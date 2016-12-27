require.config({
  baseUrl: '/'
});

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
  }
  fnStartAnimation();

}

require(['web/scripts/umds/wombat.umd'], function(wombat) {
  var exportRoot = new wombat.construct();
  startCanvas(exportRoot, wombat.lib);
});
