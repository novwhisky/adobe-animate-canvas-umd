(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	  convert: function(inputStr) {
	    var sanitized = this.removeCreateJSVar(inputStr);
	    var umd = this.Animate2UMD(sanitized);
	    return umd;
	  }
	};

	exports.default = CanvasUmd;

/***/ }
/******/ ])
});
;