/* global: amdWeb */

import CanvasUmd from './index';
import { makeTemporaryComposition } from './utils';

const canvas = document.getElementById("canvas");
const fileSelect = document.querySelector('input[type="file"]');
const source = document.querySelector('textarea');
const overlayToggle = document.querySelector('#togglePre');

function convertFile(fileObject) {
  const fileName = fileObject.name
    .match(/(.*)\.[A-Z0-9]+|([^\.]+)$/i).slice(1)
    .filter(function (v) {
      return !!v
    })
    .shift();

  const umdConfig = {
    'class-name': fileName,
    'parse-labels': true
  };

  readFile(fileObject, readFileCallback.bind(this, umdConfig));
}

function startCanvas() {
  const { composition, ExportRoot } = amdWeb;
  const { properties: { fps, height, width } } = composition.getLibrary();

  const exportRoot = new ExportRoot();
  const stage = new createjs.Stage(canvas);

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  createjs.Ticker.framerate = 1000 / fps;
  createjs.Ticker.addEventListener("tick", stage);
}

function readFile(fileObject, cb) {
  const reader = new FileReader();
  reader.onload = function (e) { cb(e.target.result); };
  reader.readAsText(fileObject);
}

function readFileCallback (umdConfig, fileContents) {
  try {
    CanvasUmd.resetAnimateVariables();
    const umd = new CanvasUmd(umdConfig).convert(fileContents);
    if (umd) {
      source.value = umd;
      makeTemporaryComposition(umd);
      startCanvas();
    }
  } catch(e) {
    source.value = `CONVERSION ERROR
    ${e.stack}`;
  }
}

/**
 * Event Listeners
 */
overlayToggle.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
  source.classList.toggle('hide');
});

fileSelect.addEventListener('change', function (e) {
  if (e.target.files.length) {
    convertFile(e.target.files.item(0));
    source.classList.remove('hide');
  }
});
