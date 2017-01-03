require.config({
    baseUrl: '/',
    paths: {
        createjs: 'scripts/vendor/createjs-2015.11.26.combined'
    }
});

require(['scripts/vendor/canvas-umd', 'scripts/iframe-previewer'], function(umdLib, iframeUtil) {
    var canvasUmd = umdLib.default;
    var fileSelect = document.querySelector('input[type="file"]');
    var source = document.querySelector('textarea');
    var overlay = document.querySelector('#preOverlay');
    var overlayToggle = document.querySelector('#togglePre');

    iframeUtil.buildIframe();

    function readFile(fileObject, cb) {
        var reader = new FileReader();
        reader.onload = function(e) {
            cb(e.target.result);
        }
        reader.readAsText(fileObject);
    }

    function initUI() {
        overlayToggle.addEventListener('click', function(e) {
            e.stopImmediatePropagation();
            //console.log('toggle', e);
            source.classList.toggle('hide');
        })
    }

    function convertFile(fileObject) {
        var fileName = fileObject.name.match(/([\.\-\w]+)\.\w+?$/)[1];
        var umdConfig = {
            'module-name': fileName,
            'parse-labels': true
        };

        readFile(fileObject, function(fileContents) {
            var umd = canvasUmd(umdConfig).convert(fileContents);
            source.value = umd;

            iframeUtil.startPreview(umd);
        });
    }


    fileSelect.addEventListener('change', function(e) {
        if(e.target.files.length) {
            convertFile(e.target.files.item(0));
            source.classList.remove('hide');
        }
    })

    initUI();
});