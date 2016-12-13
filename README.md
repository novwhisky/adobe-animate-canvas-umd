# adobe-animate-canvas-umd

Wraps [Adobe Animate](https://www.adobe.com/products/animate.html) HTML5 canvas export files in [UMD](https://github.com/umdjs/umd) for use in modern JavaScript module ecosystems

### Usage

`canvas-umd [options] /path/to/input-file.js > /path/to/ouput-file.umd.js`

### CLI options

* `--module-name` - Override output module namespace. Without it, module name will be inherited by input filename by default.