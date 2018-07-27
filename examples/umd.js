(function(cjs, an) {
  var lib = {
    properties: {
      id: 'ABCD-123',
      doesItWork: true
    }
  };
  an.compositions = {
    'ABCD-123': {
      getLibrary: function() { return lib; }
    }
  };
  (lib.FOO = function FOO() {
    this.talk = function() { console.log('hello') }
  })
})(createjs = createjs||{}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

/* canvasumd:start */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) define(['exports'], factory); // AMD
  else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') factory(exports); // CommonJS
  else factory((root.commonJsStrict = {})); // Global
}(this, function (exports) {
  (function(className, frameLabels, compId) {
    var _lib,
      _comp = { getLibrary: function() { return lib; } };

    if (AdobeAn && AdobeAn.compositions) {
      _comp = AdobeAn.compositions[compId]; // Animate CC 2017.5 & 2018
      _lib = _comp.getLibrary();
    } else if (Object.keys(AdobeAn).length === 0 && lib) {
      _lib = lib; // Animate CC 2017.1 and older
      lib = null; // Multiple animations will clobber global lib reference, so de-ref it
    }

    // Add stuff
    _lib.properties.frameLabels = frameLabels;

    // Public properties
    exports['composition'] = _comp;
    exports['ExportRoot'] = _lib[className];

  }('FOO', {Appear:0,Disappear:29}, 'ABCD-123'));
}));
/* canvasumd:end */
