/* global commonJsStrict */

define([], function() {

  var iframe;

  function buildIframe() {
    iframe = document.createElement('iframe');
    iframe.id = 'iframePreview';
    iframe.src = 'preview.html';
    iframe.frameBorder = 'none';
    iframe.scolling = 'no';
    document.body.appendChild(iframe);
    return iframe;
  }

  function deallocateIframe(node) {
    return false;
    if(node.parentNode)
      node.parentNode.removeChild(node);

    iframe = null;
  }

  function getIframeScope() {
    return {
      w: iframe.contentWindow,
      d: iframe.contentDocument
    }
  }

  function sizeIframeToCanvas() {
    var scope = getIframeScope();
    var props = getModule().lib.properties;

    iframe.width = props.width;
    iframe.height = props.height;

    var canvas = scope.d.querySelector('canvas');
    canvas.setAttribute('height', props.height);
    canvas.setAttribute('width', props.width);
  }

  function getModule() {
    return getIframeScope().w.commonJsStrict;
  }

  function addScriptTag(js) {
    var scope = getIframeScope();

    var doc = scope.d;
    var head = doc.head;

    var s = doc.createElement('script');
    head.appendChild(s);
    s.textContent = js;
  }

  function startPreview(umdJs) {
    //if(iframe != null) deallocateIframe(iframe);

    addScriptTag(umdJs);

    var scope = getIframeScope();
    var module = getModule();

    var exp = new module.construct();
    scope.w.startCanvas(exp, module.lib);
    sizeIframeToCanvas();
  }

  return {
    startPreview: startPreview,
    buildIframe: buildIframe
  }
});