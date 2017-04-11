(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.notesjs = function() {
	this.initialize();

	// Layer 1
	this.runTime_mc = new lib.playbarMC();
	this.runTime_mc.setTransform(79.3,38.6);

	this.addChild(this.runTime_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.1,13.3,45.8,53.4);


// symbols:
(lib.noteicon = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("NOTE", "bold 50px Arial", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.setTransform(12.8,44.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,-82.6,80.8,-82.6).ss(4,1,1).p("AMUj2IAAHtAsTD3IAAnt");
	this.shape.setTransform(13.3,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,-59,80.8,-59).ss(4,1,1).p("AMUjGIAACcQAABjhHBHQhHBHhmAAIxAAAQhlAAhIhHQhGhHAAhjIAAic");
	this.shape_1.setTransform(13.3,84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,30.2,80.8,30.2).ss(4,1,1).p("AsTHkIAArUQAAhkBGhIQBIhHBlAAIJVAAILfLUIAADz");
	this.shape_2.setTransform(13.3,-33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-38.1,0,36.4,0).ss(4,1,1).p("AlnleIAAGxQAABwBOBPQBOBOBwAAIHDgK");
	this.shape_3.setTransform(56,-43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-103.2,-91,96.6,-19.1).s().p("AN5j0IAADYQAABwhQBQQhRBRhxAAIzNAAQhxAAhRhRQhQhQAAhwIAAjYIBEAAIAACiQAABnBKBKQBKBJBoAAIRqAAQBoAABKhJQBKhKAAhnIAAiiIBLAA").cp();
	this.shape_4.setTransform(13.7,90.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-17.7,-158.9,182.1,43.7).s().p("AAikAIAAIAIhDAAIAAoAIBDAA").cp();
	this.shape_5.setTransform(-71.8,40.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-93.1,-19,91.2,47.3).s().p("AN5IXIhLAAIAAj8Ir6ruIpsAAQhoAAhKBKQhKBKAABoIAALuIhEAAIAAsbQAAhxBQhRQBRhQBxAAIK7AAIMkMjIAAEK").cp();
	this.shape_6.setTransform(13.7,-38.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#CCCCCC","#666666"],[0,1],-99.7,-25.8,93.5,43.6).s().p("AsTAkIAAHwIAACcQAABlBGBHQBIBHBlAAIRBAAQBlAABHhHQBHhHAAhlIAAicIAAnwIAAjxIrerVIpWAAQhlAAhIBHQhGBHAABlIAALTAswIoIAAoDIAArtQAAhpBJhJQBKhKBpAAIJsAAIL5LwIAAD5IAAIDIAAChQAABphJBJQhKBKhpAAIxpAAQhpAAhKhKQhJhJAAhpIAAih").cp();
	this.shape_7.setTransform(13.3,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-188.9,-24.6,-12.3).s().p("AMUD3I4nAAIAAntIYnAAIAAHt").cp();
	this.shape_8.setTransform(13.3,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-96.7,-24.6,-34.1).s().p("AsTjGIYnAAIAACcQAABjhHBHQhHBHhmAAIxAAAQhlAAhIhHQhGhHAAhjIAAic").cp();
	this.shape_9.setTransform(13.3,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-7.4,-24.6,55.2).s().p("AMSD2QlflblylZIAAG0QAABuBOBOQBPBOBwAAIHEgKAMUHkI4nAAIAArUQAAhkBGhIQBIhHBlAAIJVAAILfLUIAADz").cp();
	this.shape_10.setTransform(13.3,-33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF9900","#FFFF99"],[0,1],36.9,-75.5,-7.7,13.8).s().p("AlnleQFwFYFfFcInDAKQhwAAhOhOQhOhPAAhwIAAmx").cp();
	this.shape_11.setTransform(56,-43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CCCCCC","#666666"],[0,1],-188.3,-158.9,11.5,43.7).s().p("AAlkAIAAIAIhJAAIAAoAIBJAA").cp();
	this.shape_12.setTransform(98.8,40.4);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.2,-92.4,177.9,207.5);


(lib.btn1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.text_1 = new cjs.Text("Click to add a note", "13px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.setTransform(20.2,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{regX:55.9,x:76.1,text:"Click to add a note",lineWidth:108}}]},1).to({state:[{t:this.text_1,p:{regX:51.9,x:72.1,text:"Click to hide note",lineWidth:100}}]},1).to({state:[{t:this.text_1,p:{regX:54.9,x:75.1,text:"Click to show note",lineWidth:106}}]},1).wait(1));

	// Layer 1
	this.instance = new lib.noteicon("synched",0);
	this.instance.setTransform(19.4,23.8,0.257,0.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.8,53.4);


(lib.openNotes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.btn = new lib.btn1_mc();
	this.btn.setTransform(1.8,1.5,1,1,0,0,0,22.9,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-25.2,45.8,53.4);


(lib.playbarMC = function() {
	this.initialize();

	// Notes
	this.openNotes_mc = new lib.openNotes_mc();
	this.openNotes_mc.setTransform(-40.9,0);

	this.addChild(this.openNotes_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.1,-25.2,45.8,53.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;