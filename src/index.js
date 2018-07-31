/**
 * @class CanvasUmd
 * @param <Object> options
 * @param <String> options.class-name The name of the root export class. Based off Animate's project file name (see constructor note)
 * @param <Boolean> options.parse-labels Whether or not to do label parsing
 */
import {
  enhancedCompositionGetter,
  findOriginalComposition,
  makeTemporaryComposition,
  makeTemporaryInstance
} from './utils';

export default class CanvasUmd {
  constructor(options) {
    this.options = options;

    const nameWarningRx = /^\d|\W/g;

    if (!('class-name' in options)) {
      throw new Error("Missing required argument 'class-name'");
    }
    else if (typeof createjs === 'undefined') {
      throw new Error('CanvasUmd depends on CreateJS but was not found')
    }
    /*
     * If an Adobe Animate file name contains any weird characters, the JS export won't quite match
     * because of variable naming limitations. CanvasUmd will attempt to correctly filter the name but the rules
     * Adobe uses are not documented anywhere.
     *
     * Noted observations:
     * 1) Capitalization IS preserved
     * 2) Instances that start with a numeral are prefixed by `_`
     * 3) Special characters ($, parenthesis) and whitespace are filtered out
     */
    else if (nameWarningRx.test(options['class-name'])) {
      const name = options['class-name']
        // Prefix underscore when first character is a number
        .replace(/^(\d)/, "_$1")
        // Remove non-word characters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-non-word)
        .replace(/\W/g, "");

      console.warn(
        'Special characters detected!\n' +
        'You are probably seeing this message because the Adobe Animate source file contained whitespace or special characters.\n' +
        'CanvasUmd will attempt to remap the filename, but it is safer to use only letters, numbers, and underscores in the name of your FLA/XFL file.\n' +
        'Inferred name: ' + name
      );

      this.options['class-name'] = name;
    }
  }

  /**
   * Composites IIFE footer for exposing UMD support
   * @param {Object} metadata - properties used by CanvasUmd to target original export source
   * @param {String} metadata.className - Name of exportRoot property
   * @param {String} [metadata.compId] - Animate composition id
   * @param {Object} metadata.frameLabels - Frame labels if any, otherwise an empty object
   * @return {String} footer
   */
  static generateFooter(metadata) {
    const template = `
    
/* canvasumd:start */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) define(['exports'], factory); /* AMD */
  else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') factory(exports); /* CommonJS */
  else factory((root.commonJsStrict = {})); /* Global */
}(this, function (exports) {
  (function(className, frameLabels) {
    var c = (${enhancedCompositionGetter()})(${metadata.compId ? "'"+metadata.compId+"'": ""});
    var l = c.getLibrary();

    exports['composition'] = c;
    exports['ExportRoot'] = l[className];
    exports['frameLabels'] = frameLabels;

  }('${metadata.className}', ${JSON.stringify(metadata.frameLabels)}));
}));
/* canvasumd:end */
`;
    return template;
  }

  /**
   * Resets Animate globals to falsy values
   * @return void
   */
  static resetAnimateVariables() {
    if(typeof lib !== 'undefined') lib = undefined;
    if(typeof AdobeAn !== 'undefined') AdobeAn = undefined;
  }

  /**
   * Parses export to determine className, compId & frameLabels
   * @param animateJS - original Animate export source
   * @returns {{compId, className, frameLabels}}
   */
  ingest(animateJS) {
    const className = this.options['class-name'];
    makeTemporaryComposition(animateJS);
    const comp = findOriginalComposition();
    const { properties: { id: compId } } = comp.getLibrary();
    const metadata = { compId, className };

    if(this.options['parse-labels']) {
      const instance = makeTemporaryInstance(comp, className);
      metadata.frameLabels = instance.timeline.getLabels();
    }

    return metadata;
  }

  /**
   * Combines original Animate export with UMD footer
   * @param animateJS - original Animate export source
   * @returns {String}
   */
  convert(animateJS) {
    const footerRx = /\/\*\scanvasumd\:start\s\*\/\n([\s\S]+)\/\*\scanvasumd\:end\s\*\//gm;
    const metadata = this.ingest(animateJS);
    const footer = CanvasUmd.generateFooter(metadata);
    return animateJS.replace(footerRx, '') + footer;
  }
}
