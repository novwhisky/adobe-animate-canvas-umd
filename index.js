// var createjs = require('exports?createjs!createjs');

function CanvasUmd(options) {
  if(!(this instanceof CanvasUmd))
    return new CanvasUmd(options);

  if(!('module-name' in options)) {
    throw new Error("Missing required argument 'module-name'");
  }

  this.options = options;

  // UMD template
  this.template = "(function (root, factory) {\n" +
  "\tif (typeof define === 'function' && define.amd) {\n" +
  "\t\t// AMD. Register as an anonymous module.\n" +
  "\t\tdefine(['exports'], factory);\n" +
  "\t} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {\n" +
  "\t\t// CommonJS\n" +
  "\t\tfactory(exports);\n" +
  "\t} else {\n" +
  "\t\t// Browser globals\n" +
  "\t\tfactory((root.commonJsStrict = {}));\n" +
  "\t}\n" +
  "}(this, function (exports) {\n" +
  "\t{{REPLACE}}\n" +
  "}));";


}

CanvasUmd.prototype = {
  removeCreateJSVar: function removeCreateJSVar(exportJS) {
    var lines = exportJS.toString().split('\n');
    var noGoodVeryBadGlobals = lines.pop().replace(/(,\s+)?createjs/, '');
    lines.push('//// "var createjs" filtered out by canvas-umd to allow encapsulated interop', noGoodVeryBadGlobals);
    return lines.join('\n');
  },

  Animate2UMD: function Animate2UMD(exportJS) {
    var replaceToken = '{{REPLACE}}';
    var moduleExport = '\t//// Animate export wrapped by canvas-umd\n'+
      '\texports["lib"] = exports["default"] = lib;\n' +
      '\texports["createInstance"] = function() { return new lib["'+this.options['module-name']+'"](); };';

    var wrappedModule = exportJS + '\n\n' + moduleExport;
    return this.template.replace(replaceToken, wrappedModule)  + '\n';
  },

  getFrameLabels: function(inputStr) {
    var wrap = '(function(){' + inputStr + '})(window)';
    var def = new Function(wrap);

    // def();
  },

  convert: function(inputStr) {
    if(this.options['parse-labels']) {
      this.getFrameLabels(inputStr);
    }
    var sanitized = this.removeCreateJSVar(inputStr);
    var umd = this.Animate2UMD(sanitized);
    return umd;
  }
};

exports.default = CanvasUmd;