# adobe-animate-canvas-umd

[![Build Status](https://travis-ci.org/wittnl/adobe-animate-canvas-umd.svg?branch=master)](https://travis-ci.org/wittnl/adobe-animate-canvas-umd)

Wraps [Adobe Animate](https://www.adobe.com/products/animate.html) HTML5 canvas export files in [UMD](https://github.com/umdjs/umd) 
for use in modern JavaScript module ecosystems

Really old Animate CC export versions (2017.2 & below) **have been removed** from this version. Use adobe-animate-canvas-umd@2.0.0 if you
require this support.

### Conversion example

Give it a try at [wittnl.github.io/adobe-animate-canvas-umd](//wittnl.github.io/adobe-animate-canvas-umd/)

### Usage

CanvasUmd depends on a global reference to `createjs` ([1.0.0 or higher](https://www.npmjs.com/package/createjs/v/1.0.0)). That variable [must exist](http://code.createjs.com) 
before loading in order to work. Despite my best efforts, there's no workable solution for shimming it into a module format.

**This library only works in a [browser environment](src/demo.js#L52) currently, CanvasRenderingContext2D support in 
node sucks and CreateJS depends on specific DOM APIs**
```
var umd = CanvasUmd({ 
    'class-name': 'my_animation'
    'parse-labels': true
}).convert(animateJS);
```

`convert()` appends a [footer](#how-it-works) beneath your Animate export. The string it returns should be saved out in
place of your original JS file. Then to import the UMD in the intended project, request the animation just like any other
module

```javascript
/**
* @typedef {Object} CanvasUmd
* @param {Object} composition
* @param {createjs.MovieClip} ExportRoot
* @param {Array<Object>} [frameLabels]
*/

/**
* @param {CanvasUmd} umd
* @return void
*/
const startAnimation = ({ ExportRoot }) => {
  const exportRoot = new ExportRoot();
  stage.addChild(exportRoot);
}
  
require(['path/to/animation'], startAnimation);
```

### Options

* `class-name` - The alphanumeric representation of your Animate project filename. Note that spaces, hyphens & special 
characters are filtered out.
* `parse-labels` - **Experimental** Parse out top-level frame labels and add them to `exports.frameLabels` for static evaluation.

### Enhancements

* Better component organization and **no global variables**
* Integrates with AMD loaders
* Adds `frameLabels` as a static module property

### <a name="how-it-works">How it works</a>

CanvasUmd parses an original HTML5 canvas export from Animate CC (2017.5 - 2020) to determine the root animation name, composition id, 
and optionally keyframe labels by creating a temporary instance on intake. From these data an IIFE is appended to the
bottom of the original definition, enabling [UMD support](examples/umd.js).

```javascript
// ... end of original Animate source ...

/* canvasumd:start */
(function (root, factory) {
  if(typeof define === 'function' && define.amd) define(['exports'], factory); /* AMD */
  else factory((root.amdWeb = {}));
  /* no CommonJS due to browser api dependencies (CreateJS) */
}(this, function(exports) {
  var c = (function AnimateCC_2017_5_plus(compId) {
    return AdobeAn.compositions[compId];
  })("D42F2973F03C46B7A7B10E96EF073291");
  var l = c.getLibrary();

  return {
    composition: c,
    ExportRoot: l["wombat"],
    frameLabels: [{"label":"On","position":0},{"label":"Off","position":29}]
  }
}));
/* canvasumd:end */

// EOF
```
