
function NoAnimationError() {
  const deprecatedAnVer = typeof(AdobeAn) === 'undefined' || Object.keys(AdobeAn).length === 0 && lib;
  const message = 'Invalid animation file.' +
    (deprecatedAnVer ? ' This version of CanvasUmd requires Animate CC 2017.5 or newer exports.': '');
  throw new Error(message);
}

export function findOriginalComposition() {
  if(AdobeAn && AdobeAn.compositions) {
    return AdobeAn.compositions[Object.keys(AdobeAn.compositions)[0]]; /* Animate CC 2017.5 - 2020 */
  } else {
    return NoAnimationError();
  }
}

function AnimateCC_2017_5_plus(compId) { return AdobeAn.compositions[compId]; }

export function enhancedCompositionGetter() {
  if(AdobeAn && AdobeAn.compositions) return AnimateCC_2017_5_plus;
  else return NoAnimationError;
}

/**
 * Appends a script tag to <head /> which is immediately evaluated, allowing CanvasUmd to read composition specifics
 * @param {String} animateJS - The original Animate composition source
 * @return void
 */
export function makeTemporaryComposition(animateJS) {
  const s = document.createElement('script');
  s.textContent = animateJS;
  document.head.appendChild(s);
}

/**
 * Constructs animation exportRoot, enabling us to evaluate dynamic values like frame labels
 * @param {Object} comp
 * @param {String} className - The root MC name, having non-alphanumeric characters filtered out. This should correlate to the source file name
 * @return {createjs.DisplayObject}
 */
export function makeTemporaryInstance(comp, className) {
  const lib = comp.getLibrary();
  if(className in lib)
    return new lib[className]();

  throw new Error(`'${className}' does not exist in the composition library. Was the filename changed?`)
}
