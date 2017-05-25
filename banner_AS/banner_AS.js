(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 390,
	height: 220,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.banner22 = function() {
	this.spriteSheet = ss["banner_AS_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_11 = function() {
	this.spriteSheet = ss["banner_AS_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.banner_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,390,220);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.banner22();
	this.instance.setTransform(-195,-110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-195,-110,390,220);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(195,110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,390,220);


// stage content:
(lib.banner_AS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(196.5,110.8,1.008,1.007,0,0,0,195,110);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({scaleY:1.01},64).wait(57).to({alpha:0},20).to({_off:true},1).wait(125));

	// Слой 5
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(196.5,110.8,1.008,1.008,0,0,0,195,110);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({alpha:1},19).to({regY:109.9,y:110.7},16).to({regY:110,y:110.8},64).to({alpha:0},20).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195,110,393,221.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;