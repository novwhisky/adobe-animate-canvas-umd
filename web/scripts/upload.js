require.config({
    baseUrl: '/',
    paths: {
        createjs: '../../node_modules/CreateJS/builds/createjs-2015.11.26.combined'
    }
});

/*
function startCanvas(exportRoot, lib) {
    var canvas, stage, anim_container, dom_overlay_container, fnStartAnimation;
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    fnStartAnimation();
}
*/


require(['dist/canvas-umd'], function(umdLib) {

    var canvasUmd = umdLib.default;
    var fileSelect = document.querySelector('input[type="file"]');
    var pre = document.querySelector('pre');

    function readFile(fileObject, cb) {
        var reader = new FileReader();
        reader.onload = function(e) {
            cb(e.target.result);
        }
        reader.readAsText(fileObject);
    }

    function convertFile(fileObject) {
        var fileName = fileObject.name.match(/([\.\-\w]+)\.\w+?$/)[1];
        var umdConfig = {
            'module-name': fileName,
            'parse-labels': true
        };

        readFile(fileObject, function(fileContents) {
            var umd = canvasUmd(umdConfig).convert(fileContents);
            pre.textContent = umd;
        });
    }


    fileSelect.addEventListener('change', function(e) {
        convertFile(e.target.files.item(0));
    })
});