function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var umdLib = require('../../dist/canvas-umd');
var iframeUtil = require('./iframe-previewer');

ready(function() {
    var canvasUmd = umdLib.default;
    var fileSelect = document.querySelector('input[type="file"]');
    var source = document.querySelector('textarea');
    var overlay = document.querySelector('#preOverlay');
    var overlayToggle = document.querySelector('#togglePre');

    iframeUtil.buildIframe();

    function readFile(fileObject, cb) {
        var reader = new FileReader();
        reader.onload = function (e) {
            cb(e.target.result);
        }
        reader.readAsText(fileObject);
    }

    function initUI() {
        overlayToggle.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
            source.classList.toggle('hide');
        })
    }

    function convertFile(fileObject) {
        var fileName = fileObject.name
            .match(/(.*)\.[A-Z0-9]+|([^\.]+)$/i).slice(1)
            .filter(function (v) {
                return !!v
            })
            .shift();

        var umdConfig = {
            'module-name': fileName,
            'parse-labels': true
        };

        readFile(fileObject, function (fileContents) {
            var umd = canvasUmd(umdConfig).convert(fileContents);
            source.value = umd;

            iframeUtil.startPreview(umd);
        });
    }


    fileSelect.addEventListener('change', function (e) {
        if (e.target.files.length) {
            convertFile(e.target.files.item(0));
            source.classList.remove('hide');
        }
    });

    initUI();
});