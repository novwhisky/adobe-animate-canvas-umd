# adobe-animate-canvas-umd

Wraps [Adobe Animate](https://www.adobe.com/products/animate.html) HTML5 canvas export files in [UMD](https://github.com/umdjs/umd) for use in modern JavaScript module ecosystems

### Conversion example

Give it a try at [wittnl.github.io/canvas-umd](//wittnl.github.io/canvas-umd/)

### Usage

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