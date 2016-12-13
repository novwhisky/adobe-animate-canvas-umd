(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}));
  }
}(this, function (exports) {
  (function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak1CvIgBgwImEAAIgIktIWFAAIgJEtIq6AAIAAAwgAjoB/ICZAAIAAgzICbAAIABjIIk4AAgAk3BLIgCjGIk4AAIAFDGICbAAIgDiVIBOAAIACCVIBNAAgAIhhKIgDCUIBNAAIAFjGInUAAIgCDGICbAAIACiUIBOAAIgCCUIBNAAIADiUgAhRAaIAAhlIBRAAIAABlg");
	this.shape.setTransform(70.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(0,0,141.4,35.1), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgpCAShQgQAAgMgHQgNgIgBgLMgEDgkaQAFgNAiAAMBaSAAAQAgAAAGAOMgEEAkXQAAAKgMAJQgOAJgPAAg");
	this.shape.setTransform(292.8,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,585.6,237), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgpHABaIgKgDQgNgOgGgTIgEgQIAAhNIEOAAIAAgyMBKhAAAIAAAyIEiAAIAABNQgFAZgSAWQgJAFgLAAg");
	this.shape.setTransform(266.5,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,533,18), null);


(lib.glowgraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#62CDEF","rgba(255,255,255,0)"],[0,1],-0.8,165.1,0,-0.8,165.1,488).s().p("EgiRAskQstkMqnnWQnmlQlxmTQi4jKhXiGQC65NSsyrQWK2KfUAAQfTAAWJWKQToTnCPazQhZB7i6C6Ql1F1nnE2QqrGzsuD5Qv7E3yQAAQyRAAv5lQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481.2,-318.8,962.5,637.6);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glowgraphic("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.75},4).to({alpha:0.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481.2,-318.8,962.5,637.6);


(lib.wombat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// laptop
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(0,382.6,1,1,0,0,0,292.8,118.5);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak1CvIAAgwImFAAIgIktIWEAAIgJEtIq5AAIAAAwgAjoB/ICaAAIAAgzICaAAIABjIIk4AAgAk3BLIgBjGIk4AAIAFDGICaAAIgCiWIBNAAIADCWIBMAAgAIhhJIgDCTIBNAAIAFjGInUAAIgBDGICaAAIACiUIBOAAIgCCUIBNAAIADiTgAhQAaIAAhmIBQAAIAABmg");
	this.shape.setTransform(2.7,386.6);

	this.instance_1 = new lib.Logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.7,385.6,1,1,0,0,0,70.7,17.5);
	this.instance_1.alpha = 0.102;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgpCASwQgQAAgMgJQgMgJgBgLMgEFgkoIAAgEIAAACQgBgLALgGQAMgHARAAMBaSAAAQATAAALAHQAMAGgBALIAAADMgEFAknQgBALgNAJQgNAJgPAAg");
	this.shape_1.setTransform(0,381.1);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,494.1,1,1,0,0,0,266.4,9);
	this.instance_2.alpha = 0.102;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EglQABpIAAjRMBKhAAAIAADRg");
	this.shape_2.setTransform(-0.4,495.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AFAFAF").s().p("EgoIABQQg2AAgagpIgQgoIAAhOMBTRAAAIAABOIgTAoQgdApg3AAg");
	this.shape_3.setTransform(0.6,498.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// glow
	this.instance_3 = new lib.glow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,187.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wombat
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#895D3D").s().p("EAtcAj8QCZjVBYiZQAT0bkKwqQjVtYmCqZQkVnelRlPQhshrhmhPQg2gqghgWQJPE1HjIgQHWIREnKcQFzNHCVRzQBKI6AAGSQkJFlmqEUQlxDwnjCuQFBkqExmqgEgw9AoyQmqkUkJllQAAmSBKo6QCVxzFztHQEnqcHWoRQHjogJPk1Qh+BRirCpQlRFPkWHeQmBKZjVNYQkKQqATUbIA/BnQBTCCBfCFQEyGqFBEqQnkiulxjwg");
	this.shape_4.setTransform(-1.1,-168.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAqQgRgRAAgZQAAgYARgRQASgRAXAAQAZAAARARQARARAAAYQAAAYgRASQgRARgZAAQgXAAgSgRg");
	this.shape_5.setTransform(131.8,51.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiBCCQg1g2AAhMQAAhLA1g2QA2g1BLAAQBMAAA2A1QA1A2AABLQAABMg1A2Qg2A1hMAAQhLAAg2g1g");
	this.shape_6.setTransform(133.4,46.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B78563").s().p("AisCuQhIhJAAhlQAAhlBIhHQBHhIBlAAQBlAABIBIQBIBIAABkQAABlhIBJQhIBHhlAAQhlAAhHhHg");
	this.shape_7.setTransform(138.1,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAqQgRgSAAgYQAAgYARgRQARgRAYAAQAYAAASARQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_8.setTransform(-132.8,51.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiBCCQg1g2AAhMQAAhLA1g2QA2g1BLAAQBMAAA2A1QA1A2AABLQAABMg1A2Qg2A1hMAAQhLAAg2g1g");
	this.shape_9.setTransform(-134.4,46.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B78563").s().p("AisCuQhIhJAAhlQAAhkBIhIQBIhIBkAAQBmAABHBIQBIBHAABlQAABlhIBJQhHBHhmAAQhkAAhIhHg");
	this.shape_10.setTransform(-139.1,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AsbGBQibhMhWhhQhYhmAAhuQAAhuBYhlQBWhiCbhLQFKifHRAAQHSAAFKCfQCbBLBWBiQBYBlAABuQAABuhYBmQhWBhibBMQlKCfnSAAQnRAAlKifg");
	this.shape_11.setTransform(-1.1,100.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#895D3D").s().p("AsbGBQibhLhWhiQhYhlAAhvQAAhtBYhmQBWhhCbhMQFKifHRAAQHSAAFKCfQCbBMBWBhQBYBmAABtQAABvhYBlQhWBiibBLQlKCfnSAAQnRAAlKifg");
	this.shape_12.setTransform(-1.1,111.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#986844").s().p("EgG8A0wQokgroBhvQrPicoikPQqqlTl0n1QAAmSBLo6QCUxzFztHQDhn8FKmyQFQm4GdlCQGtlOHcixQH1i6IIAAQIJAAH1C6QHcCxGtFOQGdFBFQG5QFKGyDhH8QFzNHCURzQBLI6AAGSQl0H1qqFTQoiEPrOCcQoBBvokArQirANibAFIh4ACIgOABQioAAkGgVg");
	this.shape_13.setTransform(-1.1,-166.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#895D3D").s().p("Aj+k1IH9FPIg8CCIkxCag");
	this.shape_14.setTransform(-165.8,-473.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#986844").s().p("Al8CzQCHmpDQkrIH+FQIkJI7IqoC4QAZiZBDjWg");
	this.shape_15.setTransform(-187.5,-450);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#895D3D").s().p("AjCCcIg8iCIH9lPIiPJrg");
	this.shape_16.setTransform(163.6,-473.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#986844").s().p("AjPFqIkJo7IH9lQQDRErCHGpQBDDWAZCZg");
	this.shape_17.setTransform(185.4,-450);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7A5336").s().p("AkHQZQlpgYlhg/QxojKp1oEQGspVLHlcQLclnNRAAQNfAALnFzQLPFoGoJmQp5HrxNC/QlZA8ldAXIkZALIgJAAQhrAAitgMg");
	this.shape_18.setTransform(-6.1,84.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#986844").s().p("Ax+DSQBhmdBzmdIBhlJQBLisB8jhQD5nCD5kJQFalyEoA3QFyBFEMLbQC6H9BNFeQBIFOgOD+QgMDfhVDhQg1CMiaEsQg+B3jIDnQkCEok0D5QmLFAmZC2QnwDcnjAAQAAtME00ug");
	this.shape_19.setTransform(150.5,262.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#895D3D").s().p("AxoDVQBbl7Bql2IBXkpQCSlPDflaQG+q1GBg3IBFBBQBKBFA3A7IAEAFQBBBDA4BBIAEAGIA6BEIACADIB1CWQAwBAA0BNIAIAMIAvBHIADAFIAqBEIBjCtQAXAqAPAeIAtBbIAmBSIAmBXQBjFTAcD/QAbDuggDKQgcCvhQDBQgyB4iEEAQgeA6huCMQh/ChiiCvQm1HYmiEfQiNACiIAAIhsAAQnYBGnRAfQAltCEjzEg");
	this.shape_20.setTransform(170.7,251.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#986844").s().p("EAHgAhwQmZi2mLlAQk0j5kCkoQjJjmg9h4Qiaksg1iMQhVjhgMjfQgOj+BIlOQBNleC6n9QEMrbFyhFQEog3FaFyQD5EID5HDQB8DhBLCsIBhFJQBzGdBhGdQE0UuAANMQnjAAnwjcg");
	this.shape_21.setTransform(-152.9,262.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#895D3D").s().p("EAIIAh2QieABjjgDQmikfm1nYQihivh/ihQhviMgeg6QiEkAgyh4QhQjBgbivQggjKAbjuQAcj/BilTIAnhXIAlhSIAuhbIAmhIICQj2IAuhHIAIgMQAshBA4hMIB1iWIADgDIA5hEIAFgGQA4hBBAhDIAEgFQA6g9BHhDIACgCQAlgkAfgbQGBA3G+K1QDfFaCRFPIBYEpQBpF2BbF7QEjTEAlNCQnRgfnYhGg");
	this.shape_22.setTransform(-173.2,251.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AF7146").s().p("AiEDlQhUgxgWhmQgVhkA3hgQA2hfBkggQBhghBVAxQBVAxAWBnQAVBkg3BgQg3BfhjAgQgnANglAAQg4AAgzgeg");
	this.shape_23.setTransform(275.1,435);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7A5336").s().p("AjaF7QiMhRgjioQgjinBaieQBbicCjg2QCig1CNBRQCLBRAkCnQAjCohbCcQhaCdijA2QhBAVg9AAQhcAAhVgwg");
	this.shape_24.setTransform(280.2,426.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#895D3D").s().p("AjZF7QiNhRgjipQgjinBbidQBaicCjg2QCig1CMBRQCNBRAjCnQAjCohaCcQhbCdijA2QhBAVg9AAQhcAAhUgwg");
	this.shape_25.setTransform(285.2,417.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#895D3D").s().p("ApfQvQIZk+CjmaQCClIhxlyQhRkJjCkFQg9hRhBhIIg1g3QGpBQEVEmQEZErAAGCQAADBhLC6QhKC0iGCVQiHCViyBhQi3BljOAfQh5ASirAQg");
	this.shape_26.setTransform(320.6,354.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#986844").s().p("A1XNLQgJi6A6kPQAzjzBbj8QBWjyBZidQCZkVErimQEyirFtAAQD+AADoBVQDgBSCsCWQCtCWBfDCQBiDJAADdQAADBhMC5QhJC0iHCVQiHCViyBhQi3BljOAfQldA2qsARIpmAGQhfhFgJjTg");
	this.shape_27.setTransform(247.6,355.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AF7146").s().p("AgyD2Qhjggg3hfQg3hgAVhkQAWhnBUgxQBVgxBiAhQBjAgA3BfQA3BggVBkQgWBmhVAxQgzAeg4AAQgkAAgngNg");
	this.shape_28.setTransform(-275,435);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7A5336").s().p("AhUGWQijg2hbidQhaicAjioQAjinCNhRQCLhRCjA1QCiA1BcCdQBaCegjCnQgjCoiNBRQhUAwhdAAQg8AAhBgVg");
	this.shape_29.setTransform(-280.1,426.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#895D3D").s().p("AhUGWQijg2haidQhbicAjioQAjioCMhRQCNhRCiA2QCjA2BaCdQBbCdgjCnQgkCoiLBRQhVAwhcAAQg9AAhBgVg");
	this.shape_30.setTransform(-285.1,417.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#895D3D").s().p("AFbQgQjOgfi3hlQiyhhiHiVQiGiVhKi0QhLi6AAjBQAAmCEZkrQEVkmGphQIg1A3QhBBIg9BRQjCEFhREJQhxFyCCFIQCjGaIZE+IAfATQiqgQh6gSg");
	this.shape_31.setTransform(-320.6,354.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#986844").s().p("AKKRdQqsgRldg2QjOggi3hkQiyhiiHiVQiHiVhJizQhMi6AAjBQAAjcBijJQBfjDCtiVQCsiWDghTQDohVD+AAQFtAAEzCrQEqCnCaEVQBYCdBXDyQBaD8A0DzQA5EPgJC5QgJDUhfBFIh/ABQjfAAkIgHg");
	this.shape_32.setTransform(-247.6,355.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A57859").s().p("ArGN1QAsgiBEhHQCHiNBzi2QFwpCAhr7IDtCNQECClBmBzQAmEdAPEPQAICIAABPQoLFhuCDgg");
	this.shape_33.setTransform(278.5,362.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A57859").s().p("ArGE0QAAhPAHiIQAQkPAmkdQBnhzEBilIDtiNQAhL7FwJCQBzC2CHCNQBEBHAsAiQuCjgoLlhg");
	this.shape_34.setTransform(-280.7,362.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B78563").s().p("Al8UmQnYgknIhJQ2xjorln1QAAhPAHiIQAQkQAmkcQH0nbONkZQOmkhROAAQROAAOnEhQOMEaH1HaQAmEdAPEPQAICIAABPQrlH12xDoQnIBJnYAkIl9AXQiQgEjsgTg");
	this.shape_35.setTransform(-1.1,345.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#895D3D").s().p("Ag9OcQCTn1gkpfQgZmzhzm+QgkiLgoh8IgihfImHohIBSAbQBhAeBOAXQEpFqDMGpQFBKeCMOFQBOH1AFGSIAAABIABAFIAAANQoLFhuEDgQHRmkC5pxg");
	this.shape_36.setTransform(278.5,253.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#895D3D").s().p("ArHVwIAAgNIABgFIAAgBQAFmSBOn1QCMuFFBqeQDMmpEplqQB9gkCEgsImHIhIgiBfQgoB8gkCLQhyG+gaGzQgkJfCTH1QC6JxHQGkQuEjgoLlhg");
	this.shape_37.setTransform(-280.6,253.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#986844").s().p("EgF8ApuQnYgknIhJQ2xjorln1QAAlUBEnhQCJvEFUrDQDNmtEvlvQE1l0F7kPQGJkaG0iVQHLieHdAAQHeAAHLCeQG0CVGJEaQF7EPE0F0QEvFvDOGtQFULDCIPEQBFHhAAFUQrlH12xDoQnIBJnYAkIl9AXQiQgEjsgTg");
	this.shape_38.setTransform(-1.1,210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wombat_1, new cjs.Rectangle(-484.4,-506.1,962.5,1012.2), null);


// stage content:
(lib.wombat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// npm-wombat-typing.svg
	this.instance = new lib.wombat_1();
	this.instance.parent = this;
	this.instance.setTransform(540.1,360,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,x:538.4},0).wait(1).to({y:360.1},0).wait(1).to({y:360.3},0).wait(1).to({y:360.6},0).wait(1).to({y:361},0).wait(1).to({y:361.5},0).wait(1).to({y:362.1},0).wait(1).to({y:362.9},0).wait(1).to({y:363.7},0).wait(1).to({y:364.7},0).wait(1).to({y:365.9},0).wait(1).to({y:367.1},0).wait(1).to({y:368.5},0).wait(1).to({y:369.8},0).wait(1).to({y:371.2},0).wait(1).to({y:372.5},0).wait(1).to({y:373.8},0).wait(1).to({y:374.9},0).wait(1).to({y:375.9},0).wait(1).to({y:376.8},0).wait(1).to({y:377.5},0).wait(1).to({y:378.2},0).wait(1).to({y:378.7},0).wait(1).to({y:379.1},0).wait(1).to({y:379.5},0).wait(1).to({y:379.7},0).wait(1).to({y:379.9},0).wait(1).to({y:380},0).wait(1).to({regX:0.1,x:540.1},0).wait(1).to({regX:-3.2,x:538.4},0).wait(1).to({y:379.9},0).wait(1).to({y:379.7},0).wait(1).to({y:379.5},0).wait(1).to({y:379.1},0).wait(1).to({y:378.7},0).wait(1).to({y:378.2},0).wait(1).to({y:377.6},0).wait(1).to({y:376.8},0).wait(1).to({y:375.9},0).wait(1).to({y:374.9},0).wait(1).to({y:373.8},0).wait(1).to({y:372.6},0).wait(1).to({y:371.3},0).wait(1).to({y:370},0).wait(1).to({y:368.7},0).wait(1).to({y:367.4},0).wait(1).to({y:366.2},0).wait(1).to({y:365.1},0).wait(1).to({y:364.1},0).wait(1).to({y:363.2},0).wait(1).to({y:362.4},0).wait(1).to({y:361.8},0).wait(1).to({y:361.3},0).wait(1).to({y:360.9},0).wait(1).to({y:360.5},0).wait(1).to({y:360.3},0).wait(1).to({y:360.1},0).wait(1).to({y:360},0).wait(1).to({regX:0.1,x:540.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(837.8,467,481.2,506.1);
// library properties:
lib.properties = {
	width: 1080,
	height: 720,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
//// "var createjs" filtered out by canvas-umd to allow encapsulated interop
var lib, images, ss, AdobeAn;

	//// Animate export wrapped by canvas-umd
	exports["lib"] = lib;
	exports["createInstance"] = function() { return new lib["wombat"](); };
}));
