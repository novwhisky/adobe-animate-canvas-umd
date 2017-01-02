(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("createjs"));
	else if(typeof define === 'function' && define.amd)
		define(["createjs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("createjs")) : factory(root["createjs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	/**
	 * CanvasUmd object that manages export conversion
	 * @param options UMD conversion options
	 * @param options.module-name UMD module name. Should match the input filename
	 * @param [options.parse-labels] EXPERIMENTAL. Interpret frame labels for reading prior to canvas initialization
	 * @returns {CanvasUmd}
	 * @constructor
	 */
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
	  /**
	   * Deletes createjs declaration from last line of canvas export because CreateJS breaks if it's not globally accessed
	   * @param {string} exportJS The default Adobe Animate CC 2017 JavaScript global module, e.g. (function(lib, img, cjs, ss, an){...})
	   * @returns {string}
	   */
	  removeCreateJSVar: function removeCreateJSVar(exportJS) {
	    var lines = exportJS.toString().split('\n');
	    var noGoodVeryBadGlobals = lines.pop().replace(/(,\s+)?createjs/, '');
	    lines.push('//// var "createjs" filtered out by canvas-umd to allow encapsulated interop', noGoodVeryBadGlobals);
	    return lines.join('\n');
	  },

	  /**
	   * Splits last line of canvas export variables in to an array of variable names
	   * This is needed to infer the 'lib' namespace by argument position, since it's possible an author might change said namespace in Animate
	   * @param {string} exportJS The default Adobe Animate CC 2017 JavaScript global module, e.g. (function(lib, img, cjs, ss, an){...})
	   * @returns {Array}
	   */
	  getExportedVars: function getExportedVars(exportJS) {
	    var lines = exportJS.split('\n');
	    var varList = lines.pop().replace(/(var\s|[,;])/g, '').split(/\s/);
	    return varList;
	  },

	  /**
	   * Frame labels aren't a static property of the default export, meaning we can't evaluate against them. This method
	   * actually constructs the canvas instance in order to write them out in the UMD for evaluation.
	   * @param {string} exportJS The default Adobe Animate CC 2017 JavaScript global module, e.g. (function(lib, img, cjs, ss, an){...})
	   * @returns {Array<Object>|undefined}
	   */
	  getFrameLabels: function(exportJS) {
	    var exportedVars = this.getExportedVars(exportJS);
	    var libVarName = exportedVars[0];
	    var initializer = 'return new ' + libVarName + '["'+ this.options['module-name'] +'"]();';
	    var wrap = 'return (function(){' + exportJS + '\n\n' + initializer + '\n})()';
	    var def = new Function(wrap)();

	    if(def.timeline) {
	      return def.timeline.getLabels();
	    }
	  },

	  /**
	   * Wraps global js export to universal module definition and appends additional data
	   * @param {string} exportJS The default Adobe Animate CC 2017 JavaScript global module, e.g. (function(lib, img, cjs, ss, an){...})
	   * @returns {string}
	   */
	  Animate2UMD: function Animate2UMD(exportJS) {
	    var exportVars = this.getExportedVars(exportJS);
	    var replaceToken = '{{REPLACE}}';

	    var frameLabels = (this.options['parse-labels'])? this.getFrameLabels(exportJS): {};
	    var frameExport = '\t//// frameLabels generated by canvas-umd for static evaluation\n' +
	      '\t'+ exportVars[0] + '.properties["frameLabels"] = ' + JSON.stringify(frameLabels) + ';\n';

	    var moduleExport = '\t//// Animate export wrapped by canvas-umd\n'+
	        exportVars.reduce(function(acc, val) { return acc + '\texports["' + val + '"] = ' + val + ';\n'; }, '') +
	        '\texports["default"] = exports["construct"] = ' + exportVars[0] + '["'+this.options['module-name']+'"];\n';

	    // Done massaging data points, now put all the pieces together
	    var wrappedModule = exportJS + '\n\n' + frameExport + '\n\n' + moduleExport;
	    return this.template.replace(replaceToken, wrappedModule)  + '\n';
	  },

	  /**
	   * Converts raw Adobe Animate JS export to universal module definition for modern JavaScript ecosystem usage
	   * @param exportJS
	   * @returns {string}
	   */
	  convert: function(exportJS) {
	    var sanitized = this.removeCreateJSVar(exportJS);
	    var umd = this.Animate2UMD(sanitized);
	    return umd;
	  }
	};

	exports.default = CanvasUmd;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;