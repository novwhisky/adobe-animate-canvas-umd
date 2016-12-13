(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'createjs-tweenjs', 'createjs-easeljs'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('createjs-tweenjs'), require('createjs-easeljs'));
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}), root['createjs-tweenjs'], root['createjs-easeljs']);
  }
}(this, function (exports, createjs, nope) {
  /**REPLACE**/
}));