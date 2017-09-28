# adobe-animate-canvas-umd

[![Build Status](https://travis-ci.org/wittnl/adobe-animate-canvas-umd.svg?branch=master)](https://travis-ci.org/wittnl/adobe-animate-canvas-umd)

Wraps [Adobe Animate](https://www.adobe.com/products/animate.html) HTML5 canvas export files in [UMD](https://github.com/umdjs/umd) for use in modern JavaScript module ecosystems

### Conversion example

Give it a try at [wittnl.github.io/adobe-animate-canvas-umd](//wittnl.github.io/adobe-animate-canvas-umd/)

### Usage

canvas-umd **does** depend on a global reference to `createjs`. That variable will need to exist before loading this one in order to work. Despite my best efforts, there's no workable solution for shimming it into a module format.

**This library only works in a browser environment currently, CanvasRenderingContext2D support in node sucks**
```
var umd = CanvasUmd({ 
    'module-name': 'my-module'
    'parse-labels': true
}).convert(AnimateJS);
```

### Options

* `module-name` - Override output module namespace. Without it, module name will be inherited by input filename by default.
* `parse-labels` - *Experimental* Parse out top-level frame labels and add them to `lib.properties` for static evaluation.

### UMD Enhancements

* Better component organization and **no global variables**
* Integrates with isometric JavaScript workflow (Webpack/AMD modules)
* Adds `frameLabels` to the `lib.properties` object, enabling evaluation prior to constructing the animation