(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory); // , 'b'
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports); //, require('b')
  } else {
    // Browser globals
    factory((root.commonJsStrict = {})); //, root.b
  }
}(this, function (exports) { //, b
  //use b in some fashion.

  // attach properties to the exports object to define
  // the exported module properties.
  //exports.action = function () {};

  /**REPLACE**/
}));