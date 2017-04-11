(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.playbar15 = function() {
	this.initialize();

	// Runtime
	this.runTime_mc = new lib.playbarMC();
	this.runTime_mc.setTransform(69.4,-38.2,1,1,0,0,0,57.5,-39.5);

	this.addChild(this.runTime_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.9,45.2,376.2,49.8);


// symbols:
(lib.erroricon = function() {
	this.initialize(img.erroricon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,35);


(lib.saveicon = function() {
	this.initialize(img.saveicon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.wall_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,51,0)").s().p("ABkhjIAADHIjHAAIAAjHIDHAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-9.9,20,20);


(lib.volspeaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(3,1,1).p("ABOhNIibCb");
	this.shape_1.setTransform(6.4,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AAAgwQAgAwggAxAgOgVQAOAVgOAY");
	this.shape_2.setTransform(11.9,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAig7QAHgDADAHIAABwQgDAHgHgFIglghQgBABgCAAIgfAAQgGAAAAgGIAAgpQAAgGAGAAIAiAAIAlgh").cp();
	this.shape_3.setTransform(4.4,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,204,0,0)").s().p("AByh6IAAD1IjjAAIAAj1IDjAA").cp();
	this.shape_4.setTransform(6.3,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5.9,23,24.7);


(lib.volRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Volume", "15px Calibri");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(30.8,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("AFHCAIqNAAIAAj/IKNAAIAAD/").cp();
	this.shape_5.setTransform(32.8,12.8);

	this.addChild(this.shape_5,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,25.7);


(lib.topBan_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.149)").s("rgba(255,255,255,0.098)").ss(0.1,1,1).p("AUih3QAAgygyAAMgnfAAAQgyAAAAAyIAAEhMApDAAAIAAkh").cp();
	this.shape_6.setTransform(131.5,17);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263,34);


(lib.TextInput = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.stop = function() {
	this.initialize();

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B4B4B4").ss(1.5,1,1).p("ABQi4Ih9AAIgiAAQhkAAAABkIAACpQAABkBkAAIAiAAIB9AAQBkAAAAhkIAAipQAAhkhkAAIAAAA").cp();
	this.shape_7.setTransform(18,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(102,102,102,0.329)").ss(1.5,1,1).p("AAZg9IgyAAQglAAAAAkIAAAzQAAAlAlAAIAyAAQAlAAAAglIAAgzQAAgkglAAIAAAA").cp();
	this.shape_8.setTransform(18.6,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#CCCCCC","#333333"],[0.235,0.604],-5.4,-5.4,2.3,2.3).s().p("AAZg9QAlAAAAAkIAAAzQAAAlglAAIgyAAQglAAAAglIAAgzQAAgkAlAAIAyAA").cp();
	this.shape_9.setTransform(18.6,18.9);

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(102,102,0,0.098)").ss(1.5,1,1).p("ACbhJIAACTQAABYhfAAIhpAAIgOAAQhgAAAAhYIAAiTQAAhYBgAAIAOAAIBpAAQBfAAAABYIAAAA").cp();
	this.shape_10.setTransform(18,18.4);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#E4E4E4","#FFFFFF","#F3F3F3"],[0,0.8,0.816,1],51.4,28.5,51.4,-4.4).s().p("ABCiiIgOAAQheAAAABYIAACTQAABYBeAAIAOAAIAAAYIghAAQhiAAAAhkIAAipQAAhkBiAAIAhAAIAAAW").cp();
	this.shape_11.setTransform(6.7,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#E4E4E4","#FFFFFF","#F3F3F3"],[0,0.8,0.816,1],-46.5,28.5,-46.5,-4.4).s().p("AhwC5IAAgYIBrAAQBdAAAAhYIAAiTQAAhYhdAAIhrAAIAAgWIB9AAQBkAAAABkIAACpQAABkhkAAIh9AA").cp();
	this.shape_12.setTransform(24.7,18.5);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFFFF","#E4E4E4","#FFFFFF","#F3F3F3"],[0,0.8,0.816,1],-39.5,28.6,-39.5,-4.3).s().p("ACfhJIAACTQAABYhgAAIjdAAIAAlDIDdAAQBgAAAABYIAAAA").cp();
	this.shape_13.setTransform(17.6,18.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,37);


(lib.sliderTrack_mc1 = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,153,153,0)").s().p("AHtgmIAABNIvZAAIAAhNIPZAA").cp();
	this.shape_14.setTransform(49.4,0);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.8,98.8,7.9);


(lib.sliderBase_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9C9C9").s().p("AH5AAQAAgPgOgNQgPgMgTAAIuQAAQgUAAgPAMQgOANAAAPQAAARAOAMQAPAMAUAAIOQAAQATAAAPgMQAOgMAAgRIAAAA").cp();
	this.shape_15.setTransform(50.6,4.1);

	this.addChild(this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101.1,8.3);


(lib.slider = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#000000"],[0,1],-1,-0.1,0,-1,-0.1,8.1).s("#333333").ss(0.5,1,1).p("AA6AlIhQAAIgjgmIAjgjIBQAAIAABJ").cp();
	this.shape_16.setTransform(5.9,0);

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.7,11.8,7.5);


(lib.sideWall_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,102,0,0.008)").s().p("Ag4g4IBxAAIAABxIhxAAIAAhx").cp();

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.4,11.4);


(lib.resizer_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(153,153,153,0.6)").s().p("AArgXIgTAAIAAgTIATAAIAAATAAJAJIgRAAIAAgRIARAAIAAARAAYgIIATAAIAAARIgTAAIAAgRAgIAYIARAAIAAATIgRAAIAAgTAgqAYIATAAIAAATIgTAAIAAgTAAYArIAAgTIATAAIAAATIgTAA").cp();
	this.shape_18.setTransform(5.1,4.9);

	this.addChild(this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.6,8.7,8.8);


(lib.prog_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA5gRIAAAjIhxAAIAAgjIBxAA").cp();
	var mask_graphics_1 = new cjs.Graphics().p("Ag4gVIBxAAIAAArIhxAAIAAgr").cp();
	var mask_graphics_2 = new cjs.Graphics().p("Ag4gaIBxAAIAAA1IhxAAIAAg1").cp();
	var mask_graphics_3 = new cjs.Graphics().p("Ag4gfIBxAAIAAA/IhxAAIAAg/").cp();
	var mask_graphics_4 = new cjs.Graphics().p("Ag4gkIBxAAIAABJIhxAAIAAhJ").cp();
	var mask_graphics_5 = new cjs.Graphics().p("Ag4gpIBxAAIAABTIhxAAIAAhT").cp();
	var mask_graphics_6 = new cjs.Graphics().p("Ag4guIBxAAIAABdIhxAAIAAhd").cp();
	var mask_graphics_7 = new cjs.Graphics().p("Ag4gzIBxAAIAABnIhxAAIAAhn").cp();
	var mask_graphics_8 = new cjs.Graphics().p("Ag4g4IBxAAIAABxIhxAAIAAhx").cp();
	var mask_graphics_9 = new cjs.Graphics().p("Ag4g9IBxAAIAAB7IhxAAIAAh7").cp();
	var mask_graphics_10 = new cjs.Graphics().p("Ag4hCIBxAAIAACFIhxAAIAAiF").cp();
	var mask_graphics_11 = new cjs.Graphics().p("Ag4hHIBxAAIAACPIhxAAIAAiP").cp();
	var mask_graphics_12 = new cjs.Graphics().p("Ag4hMIBxAAIAACZIhxAAIAAiZ").cp();
	var mask_graphics_13 = new cjs.Graphics().p("Ag4hRIBxAAIAACjIhxAAIAAij").cp();
	var mask_graphics_14 = new cjs.Graphics().p("Ag4hWIBxAAIAACtIhxAAIAAit").cp();
	var mask_graphics_15 = new cjs.Graphics().p("Ag4hbIBxAAIAAC3IhxAAIAAi3").cp();
	var mask_graphics_16 = new cjs.Graphics().p("Ag4hgIBxAAIAADBIhxAAIAAjB").cp();
	var mask_graphics_17 = new cjs.Graphics().p("Ag4hlIBxAAIAADLIhxAAIAAjL").cp();
	var mask_graphics_18 = new cjs.Graphics().p("Ag4hqIBxAAIAADVIhxAAIAAjV").cp();
	var mask_graphics_19 = new cjs.Graphics().p("Ag4hvIBxAAIAADfIhxAAIAAjf").cp();
	var mask_graphics_20 = new cjs.Graphics().p("Ag4h0IBxAAIAADpIhxAAIAAjp").cp();
	var mask_graphics_21 = new cjs.Graphics().p("Ag4h5IBxAAIAADzIhxAAIAAjz").cp();
	var mask_graphics_22 = new cjs.Graphics().p("Ag4h+IBxAAIAAD9IhxAAIAAj9").cp();
	var mask_graphics_23 = new cjs.Graphics().p("Ag4iDIBxAAIAAEHIhxAAIAAkH").cp();
	var mask_graphics_24 = new cjs.Graphics().p("Ag4iIIBxAAIAAERIhxAAIAAkR").cp();
	var mask_graphics_25 = new cjs.Graphics().p("Ag4iNIBxAAIAAEbIhxAAIAAkb").cp();
	var mask_graphics_26 = new cjs.Graphics().p("Ag4iSIBxAAIAAElIhxAAIAAkl").cp();
	var mask_graphics_27 = new cjs.Graphics().p("Ag4iWIBxAAIAAEtIhxAAIAAkt").cp();
	var mask_graphics_28 = new cjs.Graphics().p("Ag4ibIBxAAIAAE3IhxAAIAAk3").cp();
	var mask_graphics_29 = new cjs.Graphics().p("Ag4igIBxAAIAAFBIhxAAIAAlB").cp();
	var mask_graphics_30 = new cjs.Graphics().p("Ag4ilIBxAAIAAFLIhxAAIAAlL").cp();
	var mask_graphics_31 = new cjs.Graphics().p("Ag4iqIBxAAIAAFVIhxAAIAAlV").cp();
	var mask_graphics_32 = new cjs.Graphics().p("Ag4ivIBxAAIAAFfIhxAAIAAlf").cp();
	var mask_graphics_33 = new cjs.Graphics().p("Ag4i0IBxAAIAAFpIhxAAIAAlp").cp();
	var mask_graphics_34 = new cjs.Graphics().p("Ag4i5IBxAAIAAFzIhxAAIAAlz").cp();
	var mask_graphics_35 = new cjs.Graphics().p("Ag4i+IBxAAIAAF9IhxAAIAAl9").cp();
	var mask_graphics_36 = new cjs.Graphics().p("Ag4jDIBxAAIAAGHIhxAAIAAmH").cp();
	var mask_graphics_37 = new cjs.Graphics().p("Ag4jIIBxAAIAAGRIhxAAIAAmR").cp();
	var mask_graphics_38 = new cjs.Graphics().p("Ag4jNIBxAAIAAGbIhxAAIAAmb").cp();
	var mask_graphics_39 = new cjs.Graphics().p("Ag4jSIBxAAIAAGlIhxAAIAAml").cp();
	var mask_graphics_40 = new cjs.Graphics().p("Ag4jXIBxAAIAAGvIhxAAIAAmv").cp();
	var mask_graphics_41 = new cjs.Graphics().p("Ag4jcIBxAAIAAG5IhxAAIAAm5").cp();
	var mask_graphics_42 = new cjs.Graphics().p("Ag4jhIBxAAIAAHDIhxAAIAAnD").cp();
	var mask_graphics_43 = new cjs.Graphics().p("Ag4jmIBxAAIAAHNIhxAAIAAnN").cp();
	var mask_graphics_44 = new cjs.Graphics().p("Ag4jrIBxAAIAAHXIhxAAIAAnX").cp();
	var mask_graphics_45 = new cjs.Graphics().p("Ag4jwIBxAAIAAHhIhxAAIAAnh").cp();
	var mask_graphics_46 = new cjs.Graphics().p("Ag4j1IBxAAIAAHrIhxAAIAAnr").cp();
	var mask_graphics_47 = new cjs.Graphics().p("Ag4j6IBxAAIAAH1IhxAAIAAn1").cp();
	var mask_graphics_48 = new cjs.Graphics().p("Ag4j/IBxAAIAAH/IhxAAIAAn/").cp();
	var mask_graphics_49 = new cjs.Graphics().p("Ag4kEIBxAAIAAIJIhxAAIAAoJ").cp();
	var mask_graphics_50 = new cjs.Graphics().p("Ag4kJIBxAAIAAITIhxAAIAAoT").cp();
	var mask_graphics_51 = new cjs.Graphics().p("Ag4kOIBxAAIAAIdIhxAAIAAod").cp();
	var mask_graphics_52 = new cjs.Graphics().p("Ag4kTIBxAAIAAInIhxAAIAAon").cp();
	var mask_graphics_53 = new cjs.Graphics().p("Ag4kXIBxAAIAAIvIhxAAIAAov").cp();
	var mask_graphics_54 = new cjs.Graphics().p("Ag4kcIBxAAIAAI5IhxAAIAAo5").cp();
	var mask_graphics_55 = new cjs.Graphics().p("Ag4khIBxAAIAAJDIhxAAIAApD").cp();
	var mask_graphics_56 = new cjs.Graphics().p("Ag4kmIBxAAIAAJNIhxAAIAApN").cp();
	var mask_graphics_57 = new cjs.Graphics().p("Ag4krIBxAAIAAJXIhxAAIAApX").cp();
	var mask_graphics_58 = new cjs.Graphics().p("Ag4kwIBxAAIAAJhIhxAAIAAph").cp();
	var mask_graphics_59 = new cjs.Graphics().p("Ag4k1IBxAAIAAJrIhxAAIAApr").cp();
	var mask_graphics_60 = new cjs.Graphics().p("Ag4k6IBxAAIAAJ1IhxAAIAAp1").cp();
	var mask_graphics_61 = new cjs.Graphics().p("Ag4k/IBxAAIAAJ/IhxAAIAAp/").cp();
	var mask_graphics_62 = new cjs.Graphics().p("Ag4lEIBxAAIAAKJIhxAAIAAqJ").cp();
	var mask_graphics_63 = new cjs.Graphics().p("Ag4lJIBxAAIAAKTIhxAAIAAqT").cp();
	var mask_graphics_64 = new cjs.Graphics().p("Ag4lOIBxAAIAAKdIhxAAIAAqd").cp();
	var mask_graphics_65 = new cjs.Graphics().p("Ag4lTIBxAAIAAKnIhxAAIAAqn").cp();
	var mask_graphics_66 = new cjs.Graphics().p("Ag4lYIBxAAIAAKxIhxAAIAAqx").cp();
	var mask_graphics_67 = new cjs.Graphics().p("Ag4ldIBxAAIAAK7IhxAAIAAq7").cp();
	var mask_graphics_68 = new cjs.Graphics().p("Ag4liIBxAAIAALFIhxAAIAArF").cp();
	var mask_graphics_69 = new cjs.Graphics().p("Ag4lnIBxAAIAALPIhxAAIAArP").cp();
	var mask_graphics_70 = new cjs.Graphics().p("Ag4lsIBxAAIAALZIhxAAIAArZ").cp();
	var mask_graphics_71 = new cjs.Graphics().p("Ag4lxIBxAAIAALjIhxAAIAArj").cp();
	var mask_graphics_72 = new cjs.Graphics().p("Ag4l2IBxAAIAALtIhxAAIAArt").cp();
	var mask_graphics_73 = new cjs.Graphics().p("Ag4l7IBxAAIAAL3IhxAAIAAr3").cp();
	var mask_graphics_74 = new cjs.Graphics().p("Ag4mAIBxAAIAAMBIhxAAIAAsB").cp();
	var mask_graphics_75 = new cjs.Graphics().p("Ag4mFIBxAAIAAMLIhxAAIAAsL").cp();
	var mask_graphics_76 = new cjs.Graphics().p("Ag4mKIBxAAIAAMVIhxAAIAAsV").cp();
	var mask_graphics_77 = new cjs.Graphics().p("Ag4mPIBxAAIAAMfIhxAAIAAsf").cp();
	var mask_graphics_78 = new cjs.Graphics().p("Ag4mUIBxAAIAAMpIhxAAIAAsp").cp();
	var mask_graphics_79 = new cjs.Graphics().p("Ag4mZIBxAAIAAMzIhxAAIAAsz").cp();
	var mask_graphics_80 = new cjs.Graphics().p("Ag4mdIBxAAIAAM7IhxAAIAAs7").cp();
	var mask_graphics_81 = new cjs.Graphics().p("Ag4miIBxAAIAANFIhxAAIAAtF").cp();
	var mask_graphics_82 = new cjs.Graphics().p("Ag4mnIBxAAIAANPIhxAAIAAtP").cp();
	var mask_graphics_83 = new cjs.Graphics().p("Ag4msIBxAAIAANZIhxAAIAAtZ").cp();
	var mask_graphics_84 = new cjs.Graphics().p("Ag4mxIBxAAIAANjIhxAAIAAtj").cp();
	var mask_graphics_85 = new cjs.Graphics().p("Ag4m2IBxAAIAANtIhxAAIAAtt").cp();
	var mask_graphics_86 = new cjs.Graphics().p("Ag4m7IBxAAIAAN3IhxAAIAAt3").cp();
	var mask_graphics_87 = new cjs.Graphics().p("Ag4nAIBxAAIAAOBIhxAAIAAuB").cp();
	var mask_graphics_88 = new cjs.Graphics().p("Ag4nFIBxAAIAAOLIhxAAIAAuL").cp();
	var mask_graphics_89 = new cjs.Graphics().p("Ag4nKIBxAAIAAOVIhxAAIAAuV").cp();
	var mask_graphics_90 = new cjs.Graphics().p("Ag4nPIBxAAIAAOfIhxAAIAAuf").cp();
	var mask_graphics_91 = new cjs.Graphics().p("Ag4nUIBxAAIAAOpIhxAAIAAup").cp();
	var mask_graphics_92 = new cjs.Graphics().p("Ag4nZIBxAAIAAOzIhxAAIAAuz").cp();
	var mask_graphics_93 = new cjs.Graphics().p("Ag4neIBxAAIAAO9IhxAAIAAu9").cp();
	var mask_graphics_94 = new cjs.Graphics().p("Ag4njIBxAAIAAPHIhxAAIAAvH").cp();
	var mask_graphics_95 = new cjs.Graphics().p("Ag4noIBxAAIAAPRIhxAAIAAvR").cp();
	var mask_graphics_96 = new cjs.Graphics().p("Ag4ntIBxAAIAAPbIhxAAIAAvb").cp();
	var mask_graphics_97 = new cjs.Graphics().p("Ag4nyIBxAAIAAPlIhxAAIAAvl").cp();
	var mask_graphics_98 = new cjs.Graphics().p("Ag4n3IBxAAIAAPvIhxAAIAAvv").cp();
	var mask_graphics_99 = new cjs.Graphics().p("AA5H9IhxAAIAAv5IBxAAIAAP5").cp();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:3.8,y:1.4}).wait(1).to({graphics:mask_graphics_1,x:3.8,y:1.8}).wait(1).to({graphics:mask_graphics_2,x:3.8,y:2.3}).wait(1).to({graphics:mask_graphics_3,x:3.8,y:2.8}).wait(1).to({graphics:mask_graphics_4,x:3.8,y:3.3}).wait(1).to({graphics:mask_graphics_5,x:3.8,y:3.8}).wait(1).to({graphics:mask_graphics_6,x:3.8,y:4.3}).wait(1).to({graphics:mask_graphics_7,x:3.8,y:4.8}).wait(1).to({graphics:mask_graphics_8,x:3.8,y:5.3}).wait(1).to({graphics:mask_graphics_9,x:3.8,y:5.8}).wait(1).to({graphics:mask_graphics_10,x:3.8,y:6.3}).wait(1).to({graphics:mask_graphics_11,x:3.8,y:6.8}).wait(1).to({graphics:mask_graphics_12,x:3.8,y:7.3}).wait(1).to({graphics:mask_graphics_13,x:3.8,y:7.8}).wait(1).to({graphics:mask_graphics_14,x:3.8,y:8.3}).wait(1).to({graphics:mask_graphics_15,x:3.8,y:8.8}).wait(1).to({graphics:mask_graphics_16,x:3.8,y:9.3}).wait(1).to({graphics:mask_graphics_17,x:3.8,y:9.8}).wait(1).to({graphics:mask_graphics_18,x:3.8,y:10.3}).wait(1).to({graphics:mask_graphics_19,x:3.8,y:10.7}).wait(1).to({graphics:mask_graphics_20,x:3.8,y:11.2}).wait(1).to({graphics:mask_graphics_21,x:3.8,y:11.7}).wait(1).to({graphics:mask_graphics_22,x:3.8,y:12.2}).wait(1).to({graphics:mask_graphics_23,x:3.8,y:12.7}).wait(1).to({graphics:mask_graphics_24,x:3.8,y:13.2}).wait(1).to({graphics:mask_graphics_25,x:3.8,y:13.7}).wait(1).to({graphics:mask_graphics_26,x:3.8,y:14.2}).wait(1).to({graphics:mask_graphics_27,x:3.8,y:14.7}).wait(1).to({graphics:mask_graphics_28,x:3.8,y:15.2}).wait(1).to({graphics:mask_graphics_29,x:3.8,y:15.7}).wait(1).to({graphics:mask_graphics_30,x:3.8,y:16.2}).wait(1).to({graphics:mask_graphics_31,x:3.8,y:16.7}).wait(1).to({graphics:mask_graphics_32,x:3.8,y:17.2}).wait(1).to({graphics:mask_graphics_33,x:3.8,y:17.7}).wait(1).to({graphics:mask_graphics_34,x:3.8,y:18.2}).wait(1).to({graphics:mask_graphics_35,x:3.8,y:18.7}).wait(1).to({graphics:mask_graphics_36,x:3.8,y:19.2}).wait(1).to({graphics:mask_graphics_37,x:3.8,y:19.7}).wait(1).to({graphics:mask_graphics_38,x:3.8,y:20.1}).wait(1).to({graphics:mask_graphics_39,x:3.8,y:20.6}).wait(1).to({graphics:mask_graphics_40,x:3.8,y:21.1}).wait(1).to({graphics:mask_graphics_41,x:3.8,y:21.6}).wait(1).to({graphics:mask_graphics_42,x:3.8,y:22.1}).wait(1).to({graphics:mask_graphics_43,x:3.8,y:22.6}).wait(1).to({graphics:mask_graphics_44,x:3.8,y:23.1}).wait(1).to({graphics:mask_graphics_45,x:3.8,y:23.6}).wait(1).to({graphics:mask_graphics_46,x:3.8,y:24.1}).wait(1).to({graphics:mask_graphics_47,x:3.8,y:24.6}).wait(1).to({graphics:mask_graphics_48,x:3.8,y:25.1}).wait(1).to({graphics:mask_graphics_49,x:3.8,y:25.6}).wait(1).to({graphics:mask_graphics_50,x:3.8,y:26.1}).wait(1).to({graphics:mask_graphics_51,x:3.8,y:26.6}).wait(1).to({graphics:mask_graphics_52,x:3.8,y:27.1}).wait(1).to({graphics:mask_graphics_53,x:3.8,y:27.6}).wait(1).to({graphics:mask_graphics_54,x:3.8,y:28.1}).wait(1).to({graphics:mask_graphics_55,x:3.8,y:28.6}).wait(1).to({graphics:mask_graphics_56,x:3.8,y:29.1}).wait(1).to({graphics:mask_graphics_57,x:3.8,y:29.5}).wait(1).to({graphics:mask_graphics_58,x:3.8,y:30}).wait(1).to({graphics:mask_graphics_59,x:3.8,y:30.5}).wait(1).to({graphics:mask_graphics_60,x:3.8,y:31}).wait(1).to({graphics:mask_graphics_61,x:3.8,y:31.5}).wait(1).to({graphics:mask_graphics_62,x:3.8,y:32}).wait(1).to({graphics:mask_graphics_63,x:3.8,y:32.5}).wait(1).to({graphics:mask_graphics_64,x:3.8,y:33}).wait(1).to({graphics:mask_graphics_65,x:3.8,y:33.5}).wait(1).to({graphics:mask_graphics_66,x:3.8,y:34}).wait(1).to({graphics:mask_graphics_67,x:3.8,y:34.5}).wait(1).to({graphics:mask_graphics_68,x:3.8,y:35}).wait(1).to({graphics:mask_graphics_69,x:3.8,y:35.5}).wait(1).to({graphics:mask_graphics_70,x:3.8,y:36}).wait(1).to({graphics:mask_graphics_71,x:3.8,y:36.5}).wait(1).to({graphics:mask_graphics_72,x:3.8,y:37}).wait(1).to({graphics:mask_graphics_73,x:3.8,y:37.5}).wait(1).to({graphics:mask_graphics_74,x:3.8,y:38}).wait(1).to({graphics:mask_graphics_75,x:3.8,y:38.5}).wait(1).to({graphics:mask_graphics_76,x:3.8,y:38.9}).wait(1).to({graphics:mask_graphics_77,x:3.8,y:39.4}).wait(1).to({graphics:mask_graphics_78,x:3.8,y:39.9}).wait(1).to({graphics:mask_graphics_79,x:3.8,y:40.4}).wait(1).to({graphics:mask_graphics_80,x:3.8,y:40.9}).wait(1).to({graphics:mask_graphics_81,x:3.8,y:41.4}).wait(1).to({graphics:mask_graphics_82,x:3.8,y:41.9}).wait(1).to({graphics:mask_graphics_83,x:3.8,y:42.4}).wait(1).to({graphics:mask_graphics_84,x:3.8,y:42.9}).wait(1).to({graphics:mask_graphics_85,x:3.8,y:43.4}).wait(1).to({graphics:mask_graphics_86,x:3.8,y:43.9}).wait(1).to({graphics:mask_graphics_87,x:3.8,y:44.4}).wait(1).to({graphics:mask_graphics_88,x:3.8,y:44.9}).wait(1).to({graphics:mask_graphics_89,x:3.8,y:45.4}).wait(1).to({graphics:mask_graphics_90,x:3.8,y:45.9}).wait(1).to({graphics:mask_graphics_91,x:3.8,y:46.4}).wait(1).to({graphics:mask_graphics_92,x:3.8,y:46.9}).wait(1).to({graphics:mask_graphics_93,x:3.8,y:47.4}).wait(1).to({graphics:mask_graphics_94,x:3.8,y:47.9}).wait(1).to({graphics:mask_graphics_95,x:3.8,y:48.3}).wait(1).to({graphics:mask_graphics_96,x:3.8,y:48.8}).wait(1).to({graphics:mask_graphics_97,x:3.8,y:49.3}).wait(1).to({graphics:mask_graphics_98,x:3.8,y:49.8}).wait(1).to({graphics:mask_graphics_99,x:3.8,y:50.3}).wait(1));

	// Layer 4
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AgUn4QABAAAAAAQABAAAAAAQAIAAAHAEQAGADAGAHQAMAPAAAUIAAOPQAAAUgMAPQgGAHgGADQgHAEgIAAIgBAAQAAAAgBAA");
	this.shape_19.setTransform(5.8,50.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#CFEBFE","#0092F2","#D2EDFF"],[0.2,1,1],0,-66.2,0,38.7).s().p("AAQn0QAHADAGAHQAMAPAAAUIAAOPQAAAUgMAPQgGAHgHADQgHAEgIAAIgBAAQAAAAAAAAQgHAAgHgEQgIgDgGgHQgMgPAAgUIAAuPQAAgUAMgPQAGgHAIgDQAHgEAHAAQAAAAAAAAQAAAAABAAQAIAAAHAEIAAAA").cp();
	this.shape_20.setTransform(3.7,50.2);

	this.shape_19.mask = this.shape_20.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,8.3,101.1);


(lib.Previous01 = function() {
	this.initialize();

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s("#999999").ss(1,1,1).p("Ag1hrIBqBrIhqBsIAAjX").cp();
	this.shape_21.setTransform(3.3,17.5);

	// Layer 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E9E9E9").ss(1,1,1).p("ACyixQBJBKAABnQAABohJBKQhKBKhoAAQhnAAhKhKQhJhKAAhoQAAhnBJhKQBKhKBnAAQBoAABKBKIAAAA").cp();
	this.shape_22.setTransform(2.3,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AC7i5QBNBNAABsQAABthNBNQhOBOhtAAQhsAAhOhOQhNhNAAhtQAAhsBNhNQBOhOBsAAQBtAABOBOIAAAA").cp();
	this.shape_23.setTransform(2.4,17.6);

	// Layer 4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.498)").s().p("ADPiMQAcAcASAhQgeA8jMA8QiWAEg8CvQg9hJAAhhQAAhvBPhPQBPhPBuAAQBwAABPBPIAAAA").cp();
	this.shape_24.setTransform(0.9,12.5);

	// Layer 5
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","#E1E1E1"],[0,1],0,0,0,0,0,28).s("#999999").ss(1,1,1).p("ADCjBQBRBQAABxQAABxhRBRQhQBRhyAAQhwAAhRhRQhRhRAAhxQAAhxBRhQQBRhRBwAAQByAABQBRIAAAA").cp();
	this.shape_25.setTransform(2.5,17.5);

	// Layer 6
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#000000","rgba(255,255,255,0)"],[0.663,0.863],-0.4,0.3,0,-0.4,0.3,36.2).s().p("AD1j1QBmBmAACPQAACQhmBlQgeAeghAWQhQAyhmAAQhkAAhQgyQgigWgegeQhmhlAAiQQAAiPBmhmQBlhlCPAAQAKAAAKAAQBCAEA5AaQA3AZAvAuIAAAA").cp();
	this.shape_26.setTransform(2.3,17.5);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-17.2,69.5,69.5);


(lib.playRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Play", "15px Calibri");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(22,1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("ADwCAInfAAIAAj/IHfAAIAAD/").cp();
	this.shape_27.setTransform(24,12.8);

	this.addChild(this.shape_27,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,25.7);


(lib.pauseRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new cjs.Text("Pause", "15px Calibri");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.setTransform(22,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("ADwCAInfAAIAAj/IHfAAIAAD/").cp();
	this.shape_28.setTransform(24,12.8);

	this.addChild(this.shape_28,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,25.7);


(lib.pause = function() {
	this.initialize();

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666633").s().p("AA6BkIguAAIAAjHIAuAAIAADHAgLBkIguAAIAAjHIAuAAIAADH").cp();
	this.shape_29.setTransform(5.8,10);

	this.addChild(this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.6,20);


(lib.nextRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new cjs.Text("Next", "15px Calibri");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.setTransform(17,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("AC+CAIl7AAIAAj/IF7AAIAAD/").cp();
	this.shape_30.setTransform(19,12.8);

	this.addChild(this.shape_30,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,25.7);


(lib.next01 = function() {
	this.initialize();

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s("#999999").ss(1,1,1).p("AA2hrIhrBrIBrBsIAAjX").cp();
	this.shape_31.setTransform(0.8,17.5);

	// Layer 3
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#E9E9E9").ss(1,1,1).p("ACyixQBJBKAABnQAABohJBKQhKBKhoAAQhnAAhKhKQhJhKAAhoQAAhnBJhKQBKhKBnAAQBoAABKBKIAAAA").cp();
	this.shape_32.setTransform(2.3,17.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AC7i5QBNBNAABsQAABthNBNQhOBOhtAAQhsAAhOhOQhNhNAAhtQAAhsBNhNQBOhOBsAAQBtAABOBOIAAAA").cp();
	this.shape_33.setTransform(2.4,17.6);

	// Layer 4
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.498)").s().p("ADPiMQAcAcASAhQgeA8jMA8QiWAEg8CvQg9hJAAhhQAAhvBPhPQBPhPBuAAQBwAABPBPIAAAA").cp();
	this.shape_34.setTransform(0.9,12.5);

	// Layer 5
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","#E1E1E1"],[0,1],0,0,0,0,0,28).s("#999999").ss(1,1,1).p("ADCjBQBRBQAABxQAABxhRBRQhQBRhyAAQhwAAhRhRQhRhRAAhxQAAhxBRhQQBRhRBwAAQByAABQBRIAAAA").cp();
	this.shape_35.setTransform(2.5,17.5);

	// Layer 6
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#000000","rgba(255,255,255,0)"],[0.663,0.863],-0.4,0.3,0,-0.4,0.3,36.2).s().p("AD1j1QBmBmAACPQAACQhmBlQgeAeghAWQhQAyhmAAQhkAAhQgyQgigWgegeQhmhlAAiQQAAiPBmhmQBlhlCPAAQAKAAAKAAQBCAEA5AaQA3AZAvAuIAAAA").cp();
	this.shape_36.setTransform(2.3,17.5);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-17.2,69.5,69.5);


(lib.mcBase_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0)").s().p("AcSFeMg4jAAAIAAq7MA4jAAAIAAK7").cp();
	this.shape_37.setTransform(181,35);

	this.addChild(this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,362,70);


(lib.mainbase_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFE869").s("#D4B60E").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_38.setTransform(131.5,131.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BAFEC5").s("#5EF4B5").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_39.setTransform(131.5,131.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEB6B4").s("#FF7979").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_40.setTransform(131.5,131.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CAFFFF").s("#91D2FF").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_41.setTransform(131.5,131.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#91D2FF").s("#77C9FF").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_42.setTransform(131.5,131.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFD9A1").s("#FFA215").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_43.setTransform(131.5,131.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s("#666666").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_44.setTransform(131.5,131.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D4D4D4").s("#999999").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_45.setTransform(131.5,131.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCFF").s("#8282FF").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_46.setTransform(131.5,131.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#50F0B0").s("#0D8E5A").ss(0.1,1,1).p("ATw0hMgnfAAAQgyAAAAAyMAAAAnfQAAAyAyAAMAnfAAAQAyAAAAgyMAAAgnfQAAgygyAAIAAAA").cp();
	this.shape_47.setTransform(131.5,131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,263);


(lib.italic_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.text_4 = new cjs.Text("I", "italic bold 18px Times New Roman", "#4B4B4B");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.setTransform(-1.9,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4}]}).wait(2));

	// Layer 2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0)").s("rgba(153,153,153,0.098)").ss(0.1,1,1).p("ABnhmIAADNIjNAAIAAjNIDNAA").cp();

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s("rgba(153,153,153,0.098)").ss(0.1,1,1).p("AhmhmIDNAAIAADNIjNAAIAAjN").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-11.9,20.6,24);


(lib.fbase_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s("#CCCCCC").ss(1.3,1,1).p("APJEnI+RAAIAApNIeRAAIAAJN").cp();

	this.addChild(this.shape_50);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.8,-29.4,193.8,59);


(lib.exitRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new cjs.Text("Exit", "15px Calibri");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 17;
	this.text_5.setTransform(17,1.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("AC+h/IAAD/Il7AAIAAj/IF7AA").cp();
	this.shape_51.setTransform(19,12.8);

	this.addChild(this.shape_51,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,25.7);


(lib.closeNote_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AAngWIgXAWIAYAXIgRARIgXgYIgWAXIgQgQIAXgXIgYgWIARgRIAWAYIAXgXIAQAQ").cp();

	// Layer 2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(102,102,0,0)").s().p("AhOhOICdAAIAACdIidAAIAAid").cp();
	this.shape_53.setTransform(0.4,0.2);

	this.addChild(this.shape_53,this.shape_52);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.6,15.8,15.8);


(lib.bold_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Text
	this.text_6 = new cjs.Text("B", "bold 18px Times New Roman", "#4B4B4B");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 20;
	this.text_6.setTransform(-1.9,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6}]}).wait(2));

	// Base
	this.text_7 = new cjs.Text("B", "bold 18px Times New Roman", "#4B4B4B");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 20;
	this.text_7.setTransform(-1.9,-11.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0)").s("rgba(153,153,153,0.098)").ss(0.1,1,1).p("ABnBnIjNAAIAAjNIDNAAIAADN").cp();

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCCCCC").s("rgba(153,153,153,0.098)").ss(0.1,1,1).p("AhmhmIDNAAIAADNIjNAAIAAjN").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.text_7}]}).to({state:[{t:this.shape_55},{t:this.text_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-11.9,20.6,24);


(lib.base_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AdZDrMg6xAAAIAAnVMA6xAAAIAAHV").cp();
	this.shape_56.setTransform(-188,23.5);

	this.addChild(this.shape_56);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-376.1,0,376.2,47);


(lib.backRoll_mc = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new cjs.Text("Back", "15px Calibri");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 17;
	this.text_8.setTransform(17,1.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).p("AC+CAIl7AAIAAj/IF7AAIAAD/").cp();
	this.shape_57.setTransform(19,12.8);

	this.addChild(this.shape_57,this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,25.7);


(lib.udArrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,0,0,3).p("AAAg+IAAB9");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAAg+IghAAIAhgjIAiAjIgiAAAAAA/IAiAAIgiAjIghgjIAhAA").cp();

	this.addChild(this.shape_59,this.shape_58);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-9.7,6.9,19.6);


(lib.rlArrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,0,0,3).p("AAAg+IAAB9");
	this.shape_60.setTransform(0,0,1,1,-89.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAg+IghAAIAhgjIAiAjIgiAAAAAA/IAiAAIgiAjIghgjIAhAA").cp();
	this.shape_61.setTransform(0,0,1,1,-89.9);

	this.addChild(this.shape_61,this.shape_60);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-3.4,19.6,6.9);


(lib.rcArrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,0,0,3).p("AAAg+IAAB9");
	this.shape_62.setTransform(0,0,1,1,45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAg+IghAAIAhgjIAiAjIgiAAAAAA/IAiAAIgiAjIghgjIAhAA").cp();
	this.shape_63.setTransform(0,0,1,1,45);

	this.addChild(this.shape_63,this.shape_62);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.9,13.9);


(lib.lcArrow_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2,0,0,3).p("AAAg+IAAB9");
	this.shape_64.setTransform(0,0,1,1,-44.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAg+IghAAIAhgjIAiAjIgiAAAAAA/IAiAAIgiAjIghgjIAhAA").cp();
	this.shape_65.setTransform(0,0,1,1,-44.9);

	this.addChild(this.shape_65,this.shape_64);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.9,13.9);


(lib.addNote_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AAtgKIAAAVIgiAAIAAAiIgVAAIAAgiIgiAAIAAgVIAiAAIAAgiIAVAAIAAAiIAiAA").cp();

	// Layer 2
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(102,102,0,0)").s().p("ABOhNIAACbIibAAIAAibICbAA").cp();
	this.shape_67.setTransform(0.3,0.3);

	this.addChild(this.shape_67,this.shape_66);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,15.8,15.8);


(lib.noteicon = function() {
	this.initialize();

	// Layer 1
	this.text_9 = new cjs.Text("NOTE", "bold 50px Arial", "#333333");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 52;
	this.text_9.setTransform(12.8,44.2);

	// Layer 2
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,-82.6,80.8,-82.6).ss(4,1,1).p("AMUj2IAAHtAsTD3IAAnt");
	this.shape_68.setTransform(13.3,39.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,-59,80.8,-59).ss(4,1,1).p("AMUjGIAACcQAABjhHBHQhHBHhmAAIxAAAQhlAAhIhHQhGhHAAhjIAAic");
	this.shape_69.setTransform(13.3,84.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-80.6,30.2,80.8,30.2).ss(4,1,1).p("AsTHkIAArUQAAhkBGhIQBIhHBlAAIJVAAILfLUIAADz");
	this.shape_70.setTransform(13.3,-33.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().ls(["#FF9900","#FFFF99"],[0,1],-38.1,0,36.4,0).ss(4,1,1).p("AlnleIAAGxQAABwBOBPQBOBOBwAAIHDgK");
	this.shape_71.setTransform(56,-43.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-103.2,-91,96.6,-19.1).s().p("At4j0IBEAAIAACiQAABnBKBKQBKBJBoAAIRqAAQBoAABKhJQBKhKAAhnIAAiiIBLAAIAADYQAABwhQBQQhRBRhxAAIzNAAQhxAAhRhRQhQhQAAhwIAAjY").cp();
	this.shape_72.setTransform(13.7,90.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-17.7,-158.9,182.1,43.7).s().p("AAikAIAAIAIhDAAIAAoAIBDAA").cp();
	this.shape_73.setTransform(-71.8,40.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FFFFFF","#CCCCCC","#666666"],[0,0.165,1],-93.1,-19,91.2,47.3).s().p("AN5IXIhLAAIAAj8Ir6ruIpsAAQhoAAhKBKQhKBKAABoIAALuIhEAAIAAsbQAAhxBQhRQBRhQBxAAIK7AAIMkMjIAAEK").cp();
	this.shape_74.setTransform(13.7,-38.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#CCCCCC","#666666"],[0,1],-99.7,-25.8,93.5,43.6).s().p("AsTAkIAAHwIAACcQAABlBGBHQBIBHBlAAIRBAAQBlAABHhHQBHhHAAhlIAAicIAAnwIAAjxIrerVIpWAAQhlAAhIBHQhGBHAABlIAALTAswIoIAAoDIAArtQAAhpBJhJQBKhKBpAAIJsAAIL5LwIAAD5IAAIDIAAChQAABphJBJQhKBKhpAAIxpAAQhpAAhKhKQhJhJAAhpIAAih").cp();
	this.shape_75.setTransform(13.3,10.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-188.9,-24.6,-12.3).s().p("AMUD3I4nAAIAAntIYnAAIAAHt").cp();
	this.shape_76.setTransform(13.3,39.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-96.7,-24.6,-34.1).s().p("AsTjGIYnAAIAACcQAABjhHBHQhHBHhmAAIxAAAQhlAAhIhHQhGhHAAhjIAAic").cp();
	this.shape_77.setTransform(13.3,84.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#FF9900","#FFFF99"],[0,1],38,-7.4,-24.6,55.2).s().p("AMSD2QlflblylZIAAG0QAABuBOBOQBPBOBwAAIHEgKAMUHkI4nAAIAArUQAAhkBGhIQBIhHBlAAIJVAAILfLUIAADz").cp();
	this.shape_78.setTransform(13.3,-33.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#FF9900","#FFFF99"],[0,1],36.9,-75.5,-7.7,13.8).s().p("AlnleQFwFYFfFcInDAKQhwAAhOhOQhOhPAAhwIAAmx").cp();
	this.shape_79.setTransform(56,-43.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#CCCCCC","#666666"],[0,1],-188.3,-158.9,11.5,43.7).s().p("AAlkAIAAIAIhJAAIAAoAIBJAA").cp();
	this.shape_80.setTransform(98.8,40.4);

	this.addChild(this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.2,-92.4,177.9,207.5);


(lib.panelBackground_Shadow = function() {
	this.initialize();

	// shadow
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(102,153,51,0)").s().p("AUou6MgpPAAAQgRAAgLAMQgMALAAARIAAdNMAqfAAAIAA9NQAAgRgMgLQgMgMgQAAIAAAA").cp();
	this.shape_81.setTransform(139,96.5);

	this.addChild(this.shape_81);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,1,272,191);


(lib.panelBackground_Base = function() {
	this.initialize();

	// background
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(102,102,102,0)").s().p("AUou6MgpPAAAQgRAAgLAMQgMALAAARIAAdNMAqfAAAIAA9NQAAgRgMgLQgMgMgQAAIAAAA").cp();
	this.shape_82.setTransform(136,95.5);

	this.addChild(this.shape_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_83.setTransform(41,11);

	this.addChild(this.shape_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_84.setTransform(3.5,2);

	this.addChild(this.shape_84);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(153,153,153,0.498)").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_85.setTransform(0.5,74);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.498)").s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_86.setTransform(7.5,74);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(102,102,102,0.498)").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_87.setTransform(14.5,74);

	this.addChild(this.shape_87,this.shape_86,this.shape_85);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAG1").cp();
	this.shape_88.setTransform(6.5,26);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_89.setTransform(7,49.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_90.setTransform(7,23.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_91.setTransform(14.5,26);

	this.addChild(this.shape_91,this.shape_90,this.shape_89,this.shape_88);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_92.setTransform(14.5,26);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_93.setTransform(7,49.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_94.setTransform(7,23.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jbIAAG2QAAAegdABIhQAAIAAnzIBQAAQAdABAAAdIAAAA").cp();
	this.shape_95.setTransform(6.5,26);

	this.addChild(this.shape_95,this.shape_94,this.shape_93,this.shape_92);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj4QAdABAAAdIAAG1QAAAegdABIhQgBIAAnyIBQAB").cp();
	this.shape_96.setTransform(6.5,26);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_97.setTransform(7,49.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_98.setTransform(7,23.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_99.setTransform(14.5,26);

	this.addChild(this.shape_99,this.shape_98,this.shape_97,this.shape_96);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_100.setTransform(2.5,2.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_101.setTransform(2.5,0.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_102.setTransform(2.5,4.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_103.setTransform(2.5,6.5);

	this.addChild(this.shape_103,this.shape_102,this.shape_101,this.shape_100);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_104.setTransform(7.5,4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3AhKBGICVAAIAAiLIiVAAIAACL").cp();
	this.shape_105.setTransform(7.5,7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_106.setTransform(7.5,7);

	this.addChild(this.shape_106,this.shape_105,this.shape_104);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_107.setTransform(7.5,4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3AhKBGICVAAIAAiLIiVAAIAACL").cp();
	this.shape_108.setTransform(7.5,7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_109.setTransform(7.5,7);

	this.addChild(this.shape_109,this.shape_108,this.shape_107);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.List_skin = function() {
	this.initialize();

	// Layer 2
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CCCCCC").s().p("AVBurQgLgKgOAAMgpPAAAQgPAAgKAKQgKAKAAAPIAAdIMAqVAAAIAA9IQAAgPgKgKIAAAAAUou/QASAAAOANQANANAAATIAAdNQAAABgCACQgBACgCAAMgqfAAAQgCAAgBgCQgCgCAAgBIAA9NQAAgTANgNQANgNATAAMApPAAA").cp();
	this.shape_110.setTransform(136.5,96);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AVBurQAKAKAAAPIAAdIMgqVAAAIAA9IQAAgPAKgKQAKgKAPAAMApPAAAQAOAAALAKIAAAA").cp();
	this.shape_111.setTransform(136.5,96);

	this.addChild(this.shape_111,this.shape_110);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,192);


(lib.ComboBox_upSkin = function() {
	this.initialize();

	// icon
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_112.setTransform(135.5,11);

	// highlight
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("ALaA3I2zAAIAAhPQAAgeAeAAIV3AAQAdAAABAeIAABP").cp();
	this.shape_113.setTransform(74,6.5);

	// fill
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_114.setTransform(74,11);

	// border
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#585F63","#B7BABC"],[0,1],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgdABAAAdIAACLQAAAdAdABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkhFIAACLQAAAogoAAI13AAQgoAAAAgoIAAiLQAAgoAoAAIV3AAQAoAAAAAoIAAAA").cp();
	this.shape_115.setTransform(74,11);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#585F63","#B7BABC"],[0,1],0.2,20,0.2,-9.9).s().p("AAFBkIgJAAIAAjHIAJAAIAADH").cp();
	this.shape_116.setTransform(125.5,11);

	this.addChild(this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_overSkin = function() {
	this.initialize();

	// icon
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_117.setTransform(135.5,11);

	// highlight
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("ALaA3IjSAAIAAhtIC0AAQAdAAABAeIAABPAH+g2IAABtIzXAAIAAhPQAAgeAeAAIS5AA").cp();
	this.shape_118.setTransform(74,6.5);

	// fill
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALaBGQAAAdgdABIi1AAIAAjHIC1AAQAdABAAAdIAACLAH+hjIAADHIy6AAQgcgBgBgcIAAiNQABgcAcgBIS6AA").cp();
	this.shape_119.setTransform(74,11);

	// border
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AAFBkIgJAAIAAjHIAJAAIAADH").cp();
	this.shape_120.setTransform(125.5,11);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkhLQAAADAAADIAACLQAAADAAADQgEAigkAAI13AAQgHAAgGgCIgSgKQgEgFgCgHQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgCAAgBQgBgFAAgEIAAiLQAAglAjgCQADgBACAAIV3AAQAkAAAEAiIAAAA").cp();
	this.shape_121.setTransform(74,11);

	this.addChild(this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_downSkin = function() {
	this.initialize();

	// icon
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_122.setTransform(135.5,11);

	// highlight
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1.4,5.8,-1.4,-5.2).s().p("AJsg2IAABtIzXAAIAAhPQAAgeAeAAIS5AA").cp();
	this.shape_123.setTransform(63,6.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-74.9,5.5,-74.9,-4.9).s().p("ABpA3IjRAAIAAhtICzAAQAdAAABAeIAABP").cp();
	this.shape_124.setTransform(136.5,6.5);

	// fill
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-51.9,11,-51.9,-10.9).s().p("AJshjIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAAjH").cp();
	this.shape_125.setTransform(63,11);

	// border
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_126.setTransform(125.5,11);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-125.4,11,-125.4,-10.9).s().p("AhoBkIAAjHIC0AAQAdABAAAdIAACLQAAAdgdABIi0AA").cp();
	this.shape_127.setTransform(136.5,11);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("ALkBGQAAADAAADQgEAigkAAI13AAQgoAAAAgoIAAiLQAAgJACgHQADgIAFgGQAKgKAUAAIV3AAQAkAAAEAiQAAADAAADIAACLAIIhjIgKAAIy6AAQgcABgBAcIAACMQAAAdAdABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AA").cp();
	this.shape_128.setTransform(74,11);

	this.addChild(this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_disabledSkin = function() {
	this.initialize();

	// icon
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.4)").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_129.setTransform(135.5,11);

	// highlight
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],-12.3,5.5,-12.3,-4.9).s().p("ALaA3I2yAAIgBhPQAAgeAeABIV2AAQAegBAAAeIABBP").cp();
	this.shape_130.setTransform(74,6.5);

	// fill
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_131.setTransform(74,11);

	// border
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],0.2,20,0.2,-9.9).s().p("AgEhjIAJAAIAADHIgJAAIAAjH").cp();
	this.shape_132.setTransform(125.5,11);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],63,11,63,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAAAK8htI13AAQgoAAAAAoIAACLQAAAoAoAAIV3AAQAoAAAAgoIAAiLQAAgogoAAIAAAA").cp();
	this.shape_133.setTransform(74,11);

	this.addChild(this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ColorPicker_upSkin = function() {
	this.initialize();

	// icon
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_134.setTransform(17.5,18.6);

	// skin
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E5E6E7").s().p("AhjBkIAAjHIDHAAIAADHIjHAAABQAyIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgKIAAgeIAyAA").cp();
	this.shape_135.setTransform(11,11);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#9A9B9D").s().p("ABkhjIAAgKIAKAAIAADbIjbAAIAAgKIAKAAIDHAAIAAjHABQhPIifAAIAACfIgKAAIAAipICpAAIAAAK").cp();
	this.shape_136.setTransform(11,11);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhUIAKAAIAACLIgKAAIAAiBIAAgKAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_137.setTransform(10.5,10.5);

	// fill
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(51,51,51,0)").s().p("AhPBQIAAifICfAAIAACfIifAA").cp();
	this.shape_138.setTransform(11,11);

	this.addChild(this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_textFieldSkin = function() {
	this.initialize();

	// border
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.3,0,37.5,0).s().p("AFxijIrcAAIAAFMIgFAAQgCAAgBACQgCABAAACIAAlWQAAgCACgCQABgBACAAILmAAQgCAAgBABQgCACAAACIAAAF").cp();
	this.shape_139.setTransform(37.5,17.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.6,0,37.7,0).s().p("AFziwIABAAQACAAABACQABABABACIAAFXQgBACgBABQgBACgCAAIrmAAQgDAAgBgCQgBgBAAgCIAAAAQAAgCABgCQABgBADAAIAFAAILcAAIAAlNIAAgFQAAgCABgBQABgCACAAIAAAA").cp();
	this.shape_140.setTransform(37.8,17.8);

	// fill
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.6,0,37.7,0).s().p("AF0iwIrnAAQgCAAgBACQgBABgBACIAAFXQABACABABQABACACAAILnAAQACAAABgCQABgBABgCIAAlXQgBgCgBgBQgBgCgCAAIAAAAAFvCnIrdAAIAAlNILdAAIAAFN").cp();
	this.shape_141.setTransform(37.2,17.2);

	this.addChild(this.shape_141,this.shape_140,this.shape_139);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,76,36);


(lib.ColorPicker_swatchSkin = function() {
	this.initialize();

	// skin
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00CCFF").s().p("AAoAoIhPAAIAAhPIBPAAIAABP").cp();
	this.shape_142.setTransform(4,4);

	this.addChild(this.shape_142);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.ColorPicker_swatchSelectedSkin = function() {
	this.initialize();

	// skin
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AA3A3IhsAAIAAhtIBsAAIAABt").cp();
	this.shape_143.setTransform(6,6);

	this.addChild(this.shape_143);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,11,11);


(lib.ColorPicker_overSkin = function() {
	this.initialize();

	// skin
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_144.setTransform(17.5,18.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(51,51,51,0)").s().p("AAeBQIhtAAIAAifICfAAIAACBIgyAAIAAAe").cp();
	this.shape_145.setTransform(11,11);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhUIAKAAIAACLIgKAAIAAiBIAAgKAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_146.setTransform(10.5,10.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E5E6E7").s().p("AhjBkIAAjHIDHAAIAADHIjHAAABQAyIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgKIAAgeIAyAAAAsBBIAUAUIAUgUIgoAA").cp();
	this.shape_147.setTransform(11,11);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#9A9B9D").s().p("ABkhjIAAgKIAKAAIAADbIjbAAIAAgKIAKAAIDHAAIAAjHABQhPIifAAIAACfIgKAAIAAipICpAAIAAAK").cp();
	this.shape_148.setTransform(11,11);

	this.addChild(this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_downSkin = function() {
	this.initialize();

	// skin
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAUgJIgUATIgTgTIAnAA").cp();
	this.shape_149.setTransform(17.5,18.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(51,51,51,0)").s().p("AhPBQIAAifICfAAIAACBIgyAAIAAAeIhtAA").cp();
	this.shape_150.setTransform(11,11);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9A9B9D").s().p("ABVhKIifAAIAACfIgKAAIAAipICpAAIAAAK").cp();
	this.shape_151.setTransform(10.5,10.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AheBpIgKAAIAAjRIDRAAIAAAKIjHAAIAADHABVhUIAKAAIAACLIgKAAIAAiBIAAgKAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_152.setTransform(10.5,10.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E5E6E7").s().p("ABQhZIipAAIAACpIAAAKIB3AAIAAgKIAAgeIAyAAIAKAAIAAiLIgKAAAhjBkIAAjHIDHAAIAADHIjHAAABUBBIgoAAIAUAUIAUgU").cp();
	this.shape_153.setTransform(11,11);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCCCCC").s().p("ABkhjIAAgKIAKAAIAADbIjbAAIAAgKIAKAAIDHAAIAAjH").cp();
	this.shape_154.setTransform(11,11);

	this.addChild(this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.498)").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhUIAKAAIAACLIgKAAIAAiBIAAgKAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_155.setTransform(10.5,10.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(229,230,231,0.498)").s().p("AhjBkIAAjHIDHAAIAADHIjHAAABQAyIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgKIAAgeIAyAAAAsBBIAUAUIAUgUIgoAA").cp();
	this.shape_156.setTransform(11,11);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(154,155,157,0.498)").s().p("ABkhjIAAgKIAKAAIAADbIjbAAIAAgKIAKAAIDHAAIAAjHABQhPIifAAIAACfIgKAAIAAipICpAAIAAAK").cp();
	this.shape_157.setTransform(11,11);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(51,51,51,0)").s().p("AAeBQIhtAAIAAifICfAAIAACBIgyAAIAAAe").cp();
	this.shape_158.setTransform(11,11);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.498)").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_159.setTransform(17.5,18.6);

	this.addChild(this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_colorWell = function() {
	this.initialize();

	// colorWell
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#999999").s().p("AheheIC9AAIAAC9Ii9AAIAAi9").cp();
	this.shape_160.setTransform(9.5,9.5);

	this.addChild(this.shape_160);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,19);


(lib.CellRenderer_upSkin = function() {
	this.initialize();

	// border
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],67.5,-9.8,67.5,3).s().p("ALuBhIAKAAIAAANI3vAAIAAgNIAKAAIAAADIXbAAIAAgDALuhjI3bAAIgKAAIAAgKIXvAAIAAAKIgKAA").cp();
	this.shape_161.setTransform(76,11);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B7BABC").s().p("Ar3BiIAAjDIAKAAIAADDIgKAAAL4hhIAADDIgKAAIAAjDIAKAA").cp();
	this.shape_162.setTransform(76,10.9);

	// fill
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_163.setTransform(76,11);

	this.addChild(this.shape_163,this.shape_162,this.shape_161);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedUpSkin = function() {
	this.initialize();

	// border
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("ArthgIgKAAIAAgNIXvAAIAAANIgKAAIAAgDI3bAAIAAADArtBkIXbAAIAKAAIAAAKI3vAAIAAgKIAKAA").cp();
	this.shape_164.setTransform(76,11);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B7BABC").s().p("AL4hhIAADDIgKAAIAAjDIAKAAAr3BiIAAjDIAKAAIAADDIgKAA").cp();
	this.shape_165.setTransform(76,11.1);

	// fill
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_166.setTransform(76,11);

	this.addChild(this.shape_166,this.shape_165,this.shape_164);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedOverSkin = function() {
	this.initialize();

	// highlight
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_167.setTransform(76,6.5);

	// fill
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_168.setTransform(76,11);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("ALuBkIAAjHI3bAAIAADHIXbAAAL4htIAADbI3vAAIAAjbIXvAA").cp();
	this.shape_169.setTransform(76,11);

	// border
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_170.setTransform(76,11);

	this.addChild(this.shape_170,this.shape_169,this.shape_168,this.shape_167);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDownSkin = function() {
	this.initialize();

	// border
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_171.setTransform(76,11);

	// fill
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_172.setTransform(76,11);

	this.addChild(this.shape_172,this.shape_171);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDisabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.2)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_173.setTransform(76,6.5);

	// fill
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_174.setTransform(76,11);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("ALuBkIAAjHI3bAAIAADHIXbAAAL4htIAADbI3vAAIAAjbIXvAA").cp();
	this.shape_175.setTransform(76,11);

	this.addChild(this.shape_175,this.shape_174,this.shape_173);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.CellRenderer_overSkin = function() {
	this.initialize();

	// border
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_176.setTransform(76,11);

	// fill
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_177.setTransform(76,11);

	this.addChild(this.shape_177,this.shape_176);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_downSkin = function() {
	this.initialize();

	// border
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_178.setTransform(76,11);

	// fill
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_179.setTransform(76,11);

	this.addChild(this.shape_179,this.shape_178);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_disabledSkin = function() {
	this.initialize();

	// border
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],67.5,-9.8,67.5,3).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_180.setTransform(76,11);

	// fill
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.298)").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_181.setTransform(76,11);

	this.addChild(this.shape_181,this.shape_180);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg1IAABsImOAAIAAhPQgBgeAfABIFwAA").cp();
	this.shape_182.setTransform(21,6.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA3IAAhsIFwAAQAegBAAAeIABBPImPAA").cp();
	this.shape_183.setTransform(61,6.5);

	// fill
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIhjIAADHIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAA").cp();
	this.shape_184.setTransform(21,11);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBkIAAjHIFxAAQAcABAAAdIAACLQAAAdgcABIlxAA").cp();
	this.shape_185.setTransform(61,11);

	// border
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADNBuIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAK").cp();
	this.shape_186.setTransform(20.5,11);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_187.setTransform(61.5,11);

	this.addChild(this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_188.setTransform(52,11);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_189.setTransform(21,11);

	// border
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_190.setTransform(20.5,11);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_191.setTransform(52.5,11);

	this.addChild(this.shape_191,this.shape_190,this.shape_189,this.shape_188);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_192.setTransform(21,11);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_193.setTransform(52,11);

	// border
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_194.setTransform(20.5,11);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_195.setTransform(52.5,11);

	this.addChild(this.shape_195,this.shape_194,this.shape_193,this.shape_192);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_196.setTransform(21,11);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_197.setTransform(52,11);

	// border
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_198.setTransform(20.5,11);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_199.setTransform(52.5,11);

	this.addChild(this.shape_199,this.shape_198,this.shape_197,this.shape_196);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_200.setTransform(21,11);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_201.setTransform(52,11);

	// border
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_202.setTransform(20.5,11);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_203.setTransform(52.5,11);

	this.addChild(this.shape_203,this.shape_202,this.shape_201,this.shape_200);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg2IAABtImPAAIAAhPQAAgeAeAAIFxAA").cp();
	this.shape_204.setTransform(21,6.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_205.setTransform(61,6.5);

	// fill
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_206.setTransform(41,11);

	// border
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNhjIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAK").cp();
	this.shape_207.setTransform(20.5,11);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_208.setTransform(61.5,11);

	this.addChild(this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape_209.setTransform(41,11);

	// border
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_210.setTransform(41,11);

	this.addChild(this.shape_210,this.shape_209);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg2IAABtImPAAIAAhPQAAgeAeAAIFxAA").cp();
	this.shape_211.setTransform(21,6.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_212.setTransform(61,6.5);

	// fill
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBABgdIAAiLQgBgdAdgBIFyAAIAADH").cp();
	this.shape_213.setTransform(21,11);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBkIAAjHIFyAAQAdABAAAdIAACLQAAAdgdABIlyAA").cp();
	this.shape_214.setTransform(61.1,11);

	// border
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNhjIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAK").cp();
	this.shape_215.setTransform(20.5,11);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_216.setTransform(61.5,11);

	this.addChild(this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AGQA3IseAAIgBhPQAAgeAeABILiAAQAegBAAAeIABBP").cp();
	this.shape_217.setTransform(41,6.5);

	// fill
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_218.setTransform(41,11);

	// border
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_219.setTransform(20.5,11);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_220.setTransform(61.5,11);

	this.addChild(this.shape_220,this.shape_219,this.shape_218,this.shape_217);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_221.setTransform(40,11);

	this.addChild(this.shape_221);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.dummyHit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,102,0,0)").s().p("AD7jZIAAGzIn1AAIAAmzIH1AA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_222}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21.7,50.2,43.6);


(lib.bgColor_btn = function() {
	this.initialize();

	// Layer 1
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#333333").ss(1.3,1,1).p("ABHgBIAAgKIg7g7IhSAAIAACNICNAAIAAhIABCgBIg2AAIgBg6");
	this.shape_223.setTransform(-0.1,-2.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#990000").s().p("ABXAOIitAAIAAgbICtAAIAAAb").cp();
	this.shape_224.setTransform(0,8.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AAAAMIgVgXIAqAAIgVAX").cp();
	this.shape_225.setTransform(13.1,3.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#FFFFFF","#FFD800"],[0,1],10,1.6,1.2,-7.1).s().p("AgdgcQAfAVAcAjIgGAAIg0AAIgBg4").cp();
	this.shape_226.setTransform(4,-5.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#FFFFFF","#FFD800"],[0,1],-5.7,-5.7,3,3).s().p("ABHgBQgbglghgVIABA6IA2AAIAFAAIAABIIiNAAIAAiNIBSAAIA7A7IAAAK").cp();
	this.shape_227.setTransform(-0.1,-2.6);

	this.addChild(this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-9.8,24,19.8);


(lib.playbutton = function() {
	this.initialize();

	// Layer 1
	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(102,255,51,0.498)").s().p("AhXg2ICvBfQhkgmhJA0IgCht").cp();
	this.shape_228.setTransform(5.3,12.6);

	// Layer 2
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,12.3).s("#003300").ss(1,1,1).p("AhYBrICxhwIixhlIAADV").cp();
	this.shape_229.setTransform(5.2,17);

	// Layer 3
	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#E9E9E9").ss(1,1,1).p("ACyixQBJBKAABnQAABohJBKQhKBKhoAAQhnAAhKhKQhJhKAAhoQAAhnBJhKQBKhKBnAAQBoAABKBKIAAAA").cp();
	this.shape_230.setTransform(2.3,17.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AC7i5QBNBNAABsQAABthNBNQhOBOhtAAQhsAAhOhOQhNhNAAhtQAAhsBNhNQBOhOBsAAQBtAABOBOIAAAA").cp();
	this.shape_231.setTransform(2.4,17.6);

	// Layer 4
	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,255,255,0.498)").s().p("ADPiMQAcAcASAhQgeA8jMA8QiWAEg8CvQg9hJAAhhQAAhvBPhPQBPhPBuAAQBwAABPBPIAAAA").cp();
	this.shape_232.setTransform(0.9,12.5);

	// Layer 5
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#FFFFFF","#E1E1E1"],[0,1],0,0,0,0,0,28).s("#999999").ss(1,1,1).p("ADCjBQBRBQAABxQAABxhRBRQhQBRhyAAQhwAAhRhRQhRhRAAhxQAAhxBRhQQBRhRBwAAQByAABQBRIAAAA").cp();
	this.shape_233.setTransform(2.5,17.5);

	// Layer 6
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.rf(["#000000","rgba(255,255,255,0)"],[0.663,0.863],-0.4,0.3,0,-0.4,0.3,36.2).s().p("AD1j1QBmBmAACPQAACQhmBlQgeAeghAWQhQAyhmAAQhkAAhQgyQgigWgegeQhmhlAAiQQAAiPBmhmQBlhlCPAAQAKAAAKAAQBCAEA5AaQA3AZAvAuIAAAA").cp();
	this.shape_234.setTransform(2.3,17.5);

	// Pause
	this.instance = new lib.pause();
	this.instance.setTransform(2.9,17,1,1,0,0,0,5.8,10);

	this.addChild(this.instance,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-17.2,69.5,69.5);


(lib.pbcVolSlider_mc = function() {
	this.initialize();

	// slider
	this.volSliderBar_mc = new lib.slider();
	this.volSliderBar_mc.setTransform(39,6.2,1,1,90,0,0,5.9,3.8);

	// mask
	this.volSliderTrack_mc = new lib.sliderTrack_mc1();
	this.volSliderTrack_mc.setTransform(54.4,12,1,1,0,0,0,50.2,3.9);

	// prog
	this.volMask_mc = new lib.prog_mc();
	this.volMask_mc.setTransform(20.5,8.1,1,1,-89.9,0,0,3.9,16);

	// bglines
	this.sliderBase_mc = new lib.sliderBase_mc();
	this.sliderBase_mc.setTransform(54.7,8.1,1,1,0,0,0,50.6,4.1);

	// bg
	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EDEDED").s().p("AIEgzQAXAXAAAcQAAAegXAWQgYAVggAAIuXAAQggAAgYgVQgXgWAAgeQAAgcAXgXQAYgVAgAAIOXAAQAgAAAYAVIAAAAAH7ABQAAgPgOgNQgPgMgUAAIuQAAQgUAAgPAMQgOANAAAPQAAARAOAMQAPAMAUAAIOQAAQAUAAAPgMQAOgMAAgRIAAAA").cp();
	this.shape_238.setTransform(54.5,8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AH5AAQAAgPgOgNQgPgMgUAAIuQAAQgTAAgPAMQgOANAAAPQAAARAOAMQAPAMATAAIOQAAQAUAAAPgMQAOgMAAgRIAAAA").cp();
	this.shape_239.setTransform(54.7,8.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#666666").s().p("AIJg3QAYAXAAAgQAAAhgYAXQgXAYghAAIuhAAQghAAgXgYQgYgXAAghQAAggAYgXQAXgYAhAAIOhAAQAhAAAXAYIAAAAAIbAAQAAgcgXgXQgYgVggAAIuXAAQggAAgYAVQgXAXAAAcQAAAeAXAWQAYAVAgAAIOXAAQAgAAAYgVQAXgWAAgeIAAAA").cp();
	this.shape_240.setTransform(54.5,8);

	this.addChild(this.shape_240,this.shape_239,this.shape_238,this.sliderBase_mc,this.volMask_mc,this.volSliderTrack_mc,this.volSliderBar_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,16);


(lib.pausebutton = function() {
	this.initialize();

	// Pause
	this.instance_3 = new lib.pause();
	this.instance_3.setTransform(2.9,17,1,1,0,0,0,5.8,10);

	// Layer 1
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(102,255,51,0.498)").s().p("AhWgrICtBIQhkgkhJA0IAAhY").cp();
	this.shape_241.setTransform(5.9,13.4);

	// Layer 3
	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#E9E9E9").ss(1,1,1).p("AjMiQQAMgRAQgQQBKhKBmAAQBpAABKBKQAPAQALAQADLCVQgLAPgNAOQhKBKhpAAQhmAAhKhKQgPgPgLgP");
	this.shape_242.setTransform(2.2,17.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AC7i5QBNBNAABsQAABthNBNQhOBOhtAAQhsAAhOhOQhNhNAAhtQAAhsBNhNQBOhOBsAAQBtAABOBOIAAAA").cp();
	this.shape_243.setTransform(2.4,17.6);

	// Layer 4
	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.498)").s().p("ADPiMQAcAcASAhQgeA8jMA8QiWAEg8CvQg9hJAAhhQAAhvBPhPQBPhPBuAAQBwAABPBPIAAAA").cp();
	this.shape_244.setTransform(0.9,12.5);

	// Layer 5
	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.rf(["#FFFFFF","#E1E1E1"],[0,1],0,0,0,0,0,28).s("#999999").ss(1,1,1).p("ADCjBQBRBQAABxQAABxhRBRQhQBRhyAAQhwAAhRhRQhRhRAAhxQAAhxBRhQQBRhRBwAAQByAABQBRIAAAA").cp();
	this.shape_245.setTransform(2.5,17.5);

	// Layer 6
	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.rf(["#000000","rgba(255,255,255,0)"],[0.663,0.863],-0.4,0.3,0,-0.4,0.3,36.2).s().p("AD1j1QBmBmAACPQAACQhmBlQgeAeghAWQhQAyhmAAQhkAAhQgyQgigWgegeQhmhlAAiQQAAiPBmhmQBlhlCPAAQCPAABmBlIAAAA").cp();
	this.shape_246.setTransform(2.3,17.5);

	this.addChild(this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-17.2,69.5,69.5);


(lib.openNotes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_4 = new lib.noteicon("synched",0);
	this.instance_4.setTransform(-1.7,-1.4,0.129,0.129);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-13.3,22.9,26.7);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_6 = new lib.focusRectSkin();
	this.instance_6.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_7 = new lib.Button_upSkin();
	this.instance_7.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_8 = new lib.Button_selectedUpSkin();
	this.instance_8.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_9 = new lib.Button_selectedOverSkin();
	this.instance_9.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_10 = new lib.Button_selectedDownSkin();
	this.instance_10.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_11 = new lib.Button_selectedDisabledSkin();
	this.instance_11.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_12 = new lib.Button_overSkin();
	this.instance_12.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_13 = new lib.Button_emphasizedSkin();
	this.instance_13.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_14 = new lib.Button_downSkin();
	this.instance_14.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_15 = new lib.Button_disabledSkin();
	this.instance_15.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	// avatar
	this.instance_16 = new lib.Component_avatar();
	this.instance_16.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.ScrollPane_upSkin = function() {
	this.initialize();

	// skin
	this.instance_17 = new lib.panelBackground_Base();
	this.instance_17.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	this.instance_18 = new lib.panelBackground_Shadow();
	this.instance_18.setTransform(-2.9,-0.9);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_18,this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.ScrollPane_disabledSkin = function() {
	this.initialize();

	// panel base
	this.instance_19 = new lib.panelBackground_Base();
	this.instance_19.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	// drop shadow
	this.instance_20 = new lib.panelBackground_Shadow();
	this.instance_20.setTransform(-2.9,-0.9);
	this.instance_20.alpha = 0.5;
	this.instance_20.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_20,this.instance_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_21 = new lib.arrowIcon();
	this.instance_21.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_22 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_22.setTransform(4,4);

	// fill
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_247.setTransform(7.6,4.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKBGICVAAIAAiLIiVAAIAACLABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_248.setTransform(7.5,7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_249.setTransform(7.5,7);

	this.addChild(this.shape_249,this.shape_248,this.shape_247,this.instance_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_23 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_24 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_24.setTransform(4,5);

	// fill
	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_250.setTransform(7.5,4.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhAA8IAAh3ICBAAIAAB3IiBAAAhKhFIAACLICVAAIAAiLIiVAA").cp();
	this.shape_251.setTransform(7.5,7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_252.setTransform(7.5,7);

	this.addChild(this.shape_252,this.shape_251,this.shape_250,this.instance_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.NumericStepperUpArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_25 = new lib.arrowIcon("single",0);
	this.instance_25.setTransform(7,4,1,1,180);

	this.addChild(this.instance_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperUpArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_26 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_26.setTransform(6,4);

	// skin
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#008AE0").s().p("ABogEIAAAAIAAAJIjPAAIAAgJIDFAAIAKAA").cp();
	this.shape_253.setTransform(10.4,11.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,16,0,-5.9).s().p("ABjAyIjFAAIAAhjICpAAIAMACQAQAHAAAVIAABF").cp();
	this.shape_254.setTransform(9.9,6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("AhngsIAAgKICnAAQAoAAAAAoIAABFIgKAAIAAhFQAAgVgQgHIgMgCIipAA").cp();
	this.shape_255.setTransform(10.4,5.5);

	this.addChild(this.shape_255,this.shape_254,this.shape_253,this.instance_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,12);


(lib.NumericStepperUpArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_27 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_27.setTransform(6,4);
	this.instance_27.alpha = 0.301;

	// skin
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(133,139,142,0.298)").s().p("ABfgEIAKAAIAAAJIjRAAIAAgJIDHAA").cp();
	this.shape_256.setTransform(10.5,11.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABpA3IgKAAIAAhFQAAgdgdgBIiqAAIAAgKICpAAQAoAAAAAoIAABF").cp();
	this.shape_257.setTransform(10.5,5.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,15.9,0,-6).s().p("ABjAwIAAhEQABgdgdgBIiqAAIAABlIABAAIAAgDIDFAA").cp();
	this.shape_258.setTransform(10,6.1);

	this.addChild(this.shape_258,this.shape_257,this.shape_256,this.instance_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_28 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperDownArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_29 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_29.setTransform(6,4);

	// skin
	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_259.setTransform(10.5,6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,5.5,0,-16.4).s().p("AhjA3IAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIiqAA").cp();
	this.shape_260.setTransform(10,5.5);

	this.addChild(this.shape_260,this.shape_259,this.instance_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_30 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_30.setTransform(6,4);
	this.instance_30.alpha = 0.301;

	// skin
	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,5.5,0,-16.4).s().p("ABkg2IAABPQAAAOgHAIQgIAHgOABIiqAAIAAhtIDHAA").cp();
	this.shape_261.setTransform(10,5.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,5,-0.4,-16.9).s().p("AhoAyICqAAQAOgBAHgHQAHgIAAgOIAAhPIAKAAIAABPQABAogpAAIioAAIAAgK").cp();
	this.shape_262.setTransform(10.5,6);

	this.addChild(this.shape_262,this.shape_261,this.instance_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.ColorPicker_backgroundSkin = function() {
	this.initialize();

	// background
	this.instance_31 = new lib.panelBackground_Base();
	this.instance_31.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	this.instance_32 = new lib.panelBackground_Shadow();
	this.instance_32.setTransform(-2.9,-0.9);
	this.instance_32.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_32,this.instance_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.flcontrolslistClassesCellRenderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_33 = new lib.CellRenderer_selectedUpSkin();
	this.instance_33.setTransform(95.6,236.3,1,1,0,0,0,76,11);

	this.instance_34 = new lib.CellRenderer_selectedOverSkin();
	this.instance_34.setTransform(95.6,206.3,1,1,0,0,0,76,11);

	this.instance_35 = new lib.CellRenderer_selectedDownSkin();
	this.instance_35.setTransform(95.6,178.3,1,1,0,0,0,76,11);

	this.instance_36 = new lib.CellRenderer_selectedDisabledSkin();
	this.instance_36.setTransform(95.6,148.6,1,1,0,0,0,76,11);

	this.instance_37 = new lib.CellRenderer_upSkin();
	this.instance_37.setTransform(95.6,56.6,1,1,0,0,0,76,11);

	this.instance_38 = new lib.CellRenderer_overSkin();
	this.instance_38.setTransform(95.6,86.6,1,1,0,0,0,76,11);

	this.instance_39 = new lib.CellRenderer_downSkin();
	this.instance_39.setTransform(95.6,116.6,1,1,0,0,0,76,11);

	this.instance_40 = new lib.CellRenderer_disabledSkin();
	this.instance_40.setTransform(95.6,26.6,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33}]},1).wait(1));

	// avatar
	this.instance_41 = new lib.CellRenderer_upSkin();
	this.instance_41.setTransform(76,11,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.playbarMC = function() {
	this.initialize();

	// Notes
	this.openNotes_mc = new lib.openNotes_mc();
	this.openNotes_mc.setTransform(347.8,67.5);

	// Pause
	this.pbcVolSlider_mc = new lib.pbcVolSlider_mc();
	this.pbcVolSlider_mc.setTransform(242.3,70.5,1,1,0,0,0,52.2,8);

	this.pbcVolume_mc = new lib.volspeaker();
	this.pbcVolume_mc.setTransform(176.1,70.4,1,1,0,0,0,6.8,6.2);

	this.pbcNext_mc = new lib.Previous01();
	this.pbcNext_mc.setTransform(144.7,69.8,0.533,0.533,0,0,0,2.4,17.4);

	this.pbcPrev_mc = new lib.next01();
	this.pbcPrev_mc.setTransform(65.5,69.8,0.533,0.533,0,0,0,2.4,17.4);

	this.pbcStop_mc = new lib.stop();
	this.pbcStop_mc.setTransform(29.7,69.8,0.757,0.757,0,0,0,17.9,18.5);

	this.pbcPause_mc = new lib.pausebutton();
	this.pbcPause_mc.setTransform(104.8,69.3,0.701,0.701,0,0,0,2.3,17.4);

	// Play
	this.pbcPlay_mc = new lib.playbutton();
	this.pbcPlay_mc.setTransform(103.2,56.5,0.701,0.701);

	// base
	this.base_mc = new lib.base_mc();
	this.base_mc.setTransform(111.3,67.5,1,1,0,0,0,-264.9,23.5);
//============TOOL TIPS=============//
	
	// Layer 1
	this.toolTip_0 = new lib.volRoll_mc();
	this.toolTip_0.setTransform(-100,0,1,1,0,0,0,32.8,12.8);

	this.toolTip_1 = new lib.playRoll_mc();
	this.toolTip_1.setTransform(-100,0,1,1,0,0,0,24,12.8);

	this.toolTip_2 = new lib.pauseRoll_mc();
	this.toolTip_2.setTransform(-100,0,1,1,0,0,0,24,12.8);

	this.toolTip_3 = new lib.nextRoll_mc();
	this.toolTip_3.setTransform(-100,0,1,1,0,0,0,19,12.8);

	this.toolTip_4 = new lib.backRoll_mc();
	this.toolTip_4.setTransform(-100,0,1,1,0,0,0,19,12.8);
	
	this.toolTip_5 = new lib.exitRoll_mc();
	this.toolTip_5.setTransform(-100,0,1,1,0,0,0,19,12.8);
	
	this.toolTip_0.visible=this.toolTip_1.visible=this.toolTip_2.visible=this.toolTip_3.visible=this.toolTip_4.visible=this.toolTip_5.visible=false;

	this.addChild(this.base_mc,this.pbcPlay_mc,this.pbcPause_mc,this.pbcStop_mc,this.pbcPrev_mc,this.pbcNext_mc,this.pbcVolume_mc,this.pbcVolSlider_mc,this.openNotes_mc,this.toolTip_5,this.toolTip_4,this.toolTip_3,this.toolTip_2,this.toolTip_1,this.toolTip_0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,44,376.2,49.8);


(lib.delMsg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(102,51,0,0)").s().p("AB9iIIj5AAIAAERID5AAIAAkR").cp();

	this.nDel_mc = new lib.flcontrolsButton();
	this.nDel_mc.setTransform(28.5,25.2,0.42,1,0,0,0,50,11);

	this.yDel_mc = new lib.flcontrolsButton();
	this.yDel_mc.setTransform(-27.8,25.2,0.42,1,0,0,0,50,11);

	this.instance_43 = new lib.erroricon();
	this.instance_43.setTransform(-136.9,-33.9);

	this.text_10 = new cjs.Text("Are you sure you want to delete  this note?", "13px Calibri");
	this.text_10.lineHeight = 15;
	this.text_10.setTransform(-99.9,-24.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#B9B9B9").ss(1,2,1).p("A17BmIAAoJMAr3AAAIAAIJIAAAUIAABkIAADGMgr3AAAIAAjGIAAhkIAAgU").cp();

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#DDDDDD").s().p("A17ieMAr3AAAIAAAUIAABkIAADFMgr3AAAIAAjFIAAhkIAAgU").cp();
	this.shape_265.setTransform(0,26.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CCCCCC").s().p("AV8EFMgr3AAAIAAoJMAr3AAAIAAIJ").cp();
	this.shape_266.setTransform(0,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_263}]}).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.text_10},{t:this.instance_43},{t:this.yDel_mc},{t:this.nDel_mc}]},1).wait(1));

	// Layer 2
	this.dHit_btn = new lib.dummyHit_mc();
	this.dHit_btn.setTransform(-2.4,-4.9,6.839,3.248);
	this.dHit_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dHit_btn).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-13.6,25,27.4);


(lib.flcontrolsColorPicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_44 = new lib.panelBackground_Shadow();
	this.instance_44.setTransform(363.3,203.4,0.204,0.204,0,0,0,139,96.5);

	this.instance_45 = new lib.panelBackground_Base();
	this.instance_45.setTransform(363.3,273.8,0.204,0.204,0,0,0,136,95.5);

	this.instance_46 = new lib.ColorPicker_swatchSelectedSkin();
	this.instance_46.setTransform(101.3,261.9,1,1,0,0,0,6,6);

	this.instance_47 = new lib.ColorPicker_colorWell();
	this.instance_47.setTransform(90.7,174.5);

	this.instance_48 = new lib.ColorPicker_overSkin();
	this.instance_48.setTransform(100,80.6,1,1,0,0,0,11,11);

	this.instance_49 = new lib.ColorPicker_textFieldSkin();
	this.instance_49.setTransform(74.8,306.9,1,1,0,0,0,37,16.5);

	this.instance_50 = new lib.ColorPicker_downSkin();
	this.instance_50.setTransform(101.8,113.7,1,1,0,0,0,12,12);

	this.instance_51 = new lib.ColorPicker_backgroundSkin();
	this.instance_51.setTransform(329.9,83.6,0.445,0.445,0,0,0,134.6,95);

	this.instance_52 = new lib.ColorPicker_swatchSkin();
	this.instance_52.setTransform(100.2,226.9,1,1,0,0,0,4,4);

	this.instance_53 = new lib.ColorPicker_disabledSkin();
	this.instance_53.setTransform(103.9,150.7,1,1,0,0,0,13.8,13.8);

	this.instance_54 = new lib.ColorPicker_upSkin();
	this.instance_54.setTransform(100,50.3,1,1,0,0,0,11.4,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44}]},1).wait(1));

	// avatar
	this.instance_55 = new lib.Component_avatar();
	this.instance_55.setTransform(12,12,0.3,1.091,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_56 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_56.setTransform(4,4);

	// fill
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_267.setTransform(7.5,4.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("AhKBGICVAAIAAiLIiVAAIAACLAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_268.setTransform(7.5,7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_269.setTransform(7.5,7);

	this.addChild(this.shape_269,this.shape_268,this.shape_267,this.instance_56);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_57 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_57.setTransform(4,4);

	// fill
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_270.setTransform(7.6,4.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKBGICVAAIAAiLIiVAAIAACLAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_271.setTransform(7.5,7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_272.setTransform(7.5,7);

	this.addChild(this.shape_272,this.shape_271,this.shape_270,this.instance_57);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_58 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_58.setTransform(4,5);

	// fill
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_273.setTransform(7.5,4.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("AhKBGICVAAIAAiLIiVAAIAACLAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_274.setTransform(7.5,7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_275.setTransform(7.5,7);

	this.addChild(this.shape_275,this.shape_274,this.shape_273,this.instance_58);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_59 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_59.setTransform(4,5);

	// fill
	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_276.setTransform(7.5,4.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKBGICVAAIAAiLIiVAAIAACLAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_277.setTransform(7.5,7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_278.setTransform(7.5,7);

	this.addChild(this.shape_278,this.shape_277,this.shape_276,this.instance_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_60 = new lib.ScrollBar_thumbIcon();
	this.instance_60.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_61 = new lib.ScrollBar_thumbIcon();
	this.instance_61.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_62 = new lib.ScrollBar_thumbIcon();
	this.instance_62.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_63 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_63.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_64 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_64.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_65 = new lib.ScrollArrowDown_upSkin();
	this.instance_65.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_66 = new lib.ScrollThumb_upSkin();
	this.instance_66.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_67 = new lib.ScrollArrowUp_upSkin();
	this.instance_67.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_68 = new lib.ScrollArrowUp_overSkin();
	this.instance_68.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_69 = new lib.ScrollThumb_overSkin();
	this.instance_69.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_70 = new lib.ScrollArrowDown_overSkin();
	this.instance_70.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_71 = new lib.ScrollThumb_downSkin();
	this.instance_71.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_72 = new lib.ScrollArrowDown_downSkin();
	this.instance_72.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_73 = new lib.ScrollArrowUp_downSkin();
	this.instance_73.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_74 = new lib.ScrollTrack_skin();
	this.instance_74.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_75 = new lib.ScrollTrack_skin();
	this.instance_75.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_76 = new lib.ScrollTrack_skin();
	this.instance_76.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_77 = new lib.ScrollTrack_skin();
	this.instance_77.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_78 = new lib.focusRectSkin();
	this.instance_78.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60}]},1).wait(1));

	// avatar
	this.instance_79 = new lib.ScrollTrack_skin();
	this.instance_79.setTransform(7.5,50,1,0.676,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.NumericStepperUpArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_80 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_80.setTransform(6,4);

	// skin
	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_279.setTransform(10,6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#858B8E").s().p("AhngEIDFAAIAKAAIAAAJIjPAAIAAgJ").cp();
	this.shape_280.setTransform(10.5,11.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_281.setTransform(10.5,5.5);

	this.addChild(this.shape_281,this.shape_280,this.shape_279,this.instance_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperUpArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_81 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_81.setTransform(6,4);

	// skin
	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_282.setTransform(10,6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#008AE0").s().p("AhngEIDGAAIAKAAIAAAJIjRAAIAAgJIABAA").cp();
	this.shape_283.setTransform(10.5,11.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_284.setTransform(10.5,5.5);

	this.addChild(this.shape_284,this.shape_283,this.shape_282,this.instance_81);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_82 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_82.setTransform(6,4);

	// skin
	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,5,-0.4,-16.9).s().p("ABoAUQABAogpAAIioAAIAAgKICqAAQAOgBAHgHQAIgIgBgOIAAhPIAKAAIAABP").cp();
	this.shape_285.setTransform(10.5,6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("AhjA3IAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIiqAA").cp();
	this.shape_286.setTransform(10,5.5);

	this.addChild(this.shape_286,this.shape_285,this.instance_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_83 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_83.setTransform(6,4);

	// skin
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_287.setTransform(10.5,6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("AhjA3IAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIiqAA").cp();
	this.shape_288.setTransform(10,5.5);

	this.addChild(this.shape_288,this.shape_287,this.instance_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.bgColorPanel = function() {
	this.initialize();

	// Layer 1
	this.bgColor_btn = new lib.bgColor_btn();
	this.bgColor_btn.setTransform(-3.8,-1.9,1,1,0,0,0,0,-0.2);

	// Layer 2
	this.bgColor_mc = new lib.flcontrolsColorPicker();
	this.bgColor_mc.setTransform(-0.5,-1.6,0.445,0.353,0,0,0,12,12.1);
	this.bgColor_mc.alpha = 0;

	this.addChild(this.bgColor_mc,this.bgColor_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-11.6,24,19.8);


(lib.ScrollPain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_84 = new lib.flcontrolsScrollBar();
	this.instance_84.setTransform(122.5,303.3,1,1,0,0,0,7.5,50);

	this.instance_85 = new lib.ScrollPane_upSkin();
	this.instance_85.setTransform(73.7,179.9,0.407,0.407,0,0,0,134.5,94.9);

	this.instance_86 = new lib.ScrollPane_disabledSkin();
	this.instance_86.setTransform(73.7,60.9,0.406,0.406,0,0,0,134.6,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_86},{t:this.instance_85},{t:this.instance_84}]},1).wait(1));

	// avatar
	this.instance_87 = new lib.Component_avatar();
	this.instance_87.setTransform(50,50,1.25,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.flcontrolsNumericStepper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Assets
	this.instance_88 = new lib.NumericStepperUpArrow_upSkin();
	this.instance_88.setTransform(50.3,39,1,1,0,0,0,10.5,6);

	this.instance_89 = new lib.NumericStepperUpArrow_overSkin();
	this.instance_89.setTransform(51.6,232.9,1,1,0,0,0,10.5,6);

	this.instance_90 = new lib.NumericStepperUpArrow_downSkin();
	this.instance_90.setTransform(51.6,161,1,1,0,0,0,10.5,6);

	this.instance_91 = new lib.NumericStepperUpArrow_disabledSkin();
	this.instance_91.setTransform(49.3,97,1,1,0,0,0,10.5,6);

	this.instance_92 = new lib.NumericStepperDownArrow_upSkin();
	this.instance_92.setTransform(50.3,59,1,1,0,0,0,10.5,6);

	this.instance_93 = new lib.NumericStepperDownArrow_overSkin();
	this.instance_93.setTransform(51.6,252.9,1,1,0,0,0,10.5,6);

	this.instance_94 = new lib.NumericStepperDownArrow_downSkin();
	this.instance_94.setTransform(51.6,181,1,1,0,0,0,10.5,6);

	this.instance_95 = new lib.NumericStepperDownArrow_disabledSkin();
	this.instance_95.setTransform(50.3,117,1,1,0,0,0,10.5,6);

	this.instance_96 = new lib.focusRectSkin();
	this.instance_96.setTransform(347,52.5,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88}]},1).wait(1));

	// avatar
	this.instance_97 = new lib.Component_avatar();
	this.instance_97.setTransform(40,11,1,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_97).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.flcontrolsList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_98 = new lib.flcontrolsScrollBar();
	this.instance_98.setTransform(166.5,183.8,1,1,0,0,0,7.5,50.5);

	this.instance_99 = new lib.focusRectSkin();
	this.instance_99.setTransform(136.1,322.3,1,1,0,0,0,41.1,11);

	this.instance_100 = new lib.flcontrolslistClassesCellRenderer();
	this.instance_100.setTransform(101,277.3,1,1,0,0,0,76,11);

	this.instance_101 = new lib.List_skin();
	this.instance_101.setTransform(121,67.6,0.39,0.39,0,0,0,136,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98}]},1).wait(1));

	// avatar
	this.instance_102 = new lib.Component_avatar();
	this.instance_102.setTransform(62.6,50,1.25,4.545,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_102).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,100);


(lib.flcontrolsComboBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_103 = new lib.flcontrolsList();
	this.instance_103.setTransform(111.4,326.3,1,1,0,0,0,50.1,50);

	this.instance_104 = new lib.ComboBox_downSkin();
	this.instance_104.setTransform(86.4,112.3,1,1,0,0,0,74,11);

	this.instance_105 = new lib.ComboBox_overSkin();
	this.instance_105.setTransform(86.4,71,1,1,0,0,0,74,11);

	this.instance_106 = new lib.ComboBox_disabledSkin();
	this.instance_106.setTransform(87.3,157.9,1,1,0,0,0,74,11);

	this.instance_107 = new lib.ComboBox_upSkin();
	this.instance_107.setTransform(86.4,34,1,1,0,0,0,74,11);

	this.instance_108 = new lib.focusRectSkin();
	this.instance_108.setTransform(119.3,201.5,1,1,0,0,0,41,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103}]},1).wait(1));

	// avatar
	this.instance_109 = new lib.Component_avatar();
	this.instance_109.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_109).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.formatPanel_mc = function() {
	this.initialize();

	// Layer 8
	this.fontCombo_mc = new lib.flcontrolsComboBox();
	this.fontCombo_mc.setTransform(55.6,16.4,1,1,0,0,0,50,11);

	this.fontColor_mc = new lib.flcontrolsColorPicker();
	this.fontColor_mc.setTransform(94.6,41.9,0.883,0.883,0,0,0,12,12);

	// Layer 5
	this.fontSize_mc = new lib.flcontrolsNumericStepper();
	this.fontSize_mc.setTransform(143.4,17.4,0.66,1,0,0,0,40,11);

	// Layer 3
	this.italic_mc = new lib.italic_mc();
	this.italic_mc.setTransform(55.6,42.8);

	// Layer 2
	this.bold_mc = new lib.bold_mc();
	this.bold_mc.setTransform(16.6,42.8);

	// base
	this.fbase_mc = new lib.fbase_mc();
	this.fbase_mc.setTransform(96.9,29.5);

	this.addChild(this.fbase_mc,this.bold_mc,this.italic_mc,this.fontSize_mc,this.fontColor_mc,this.fontCombo_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193.8,59);


(lib.notes_mc = function() {
	this.initialize();

	// delete pop
	this.delMsg_mc = new lib.delMsg_mc();
	this.delMsg_mc.setTransform(282,19.3);

	// formatPanel
	this.formatPanel_mc = new lib.formatPanel_mc();
	this.formatPanel_mc.setTransform(40.4,274.3);
	this.formatPanel_mc.shadow = new cjs.Shadow("rgba(0,0,0,0.239)",2,2,5);

	// topBtns
	this.bgColorPanel = new lib.bgColorPanel();
	this.bgColorPanel.setTransform(228.9,18.8);

	this.closeNote_mc = new lib.closeNote_mc();
	this.closeNote_mc.setTransform(252.8,16.8);

	this.addNote_mc = new lib.addNote_mc();
	this.addNote_mc.setTransform(11.1,16.7);

	// walls
	this.wall_mc8 = new lib.sideWall_mc();
	this.wall_mc8.setTransform(263,129.8);

	this.wall_mc7 = new lib.sideWall_mc();
	this.wall_mc7.setTransform(0.6,129.8);

	this.wall_mc6 = new lib.sideWall_mc();
	this.wall_mc6.setTransform(131.6,261);

	this.wall_mc5 = new lib.sideWall_mc();
	this.wall_mc5.setTransform(129.8,0.6);

	this.wall_mc3 = new lib.wall_mc();
	this.wall_mc3.setTransform(260,3.6);

	this.wall_mc1 = new lib.wall_mc();
	this.wall_mc1.setTransform(0.6,3.6);

	this.wall_mc4 = new lib.wall_mc();
	this.wall_mc4.setTransform(1.6,257);

	this.wall_mc2 = new lib.wall_mc();
	this.wall_mc2.setTransform(262.5,258);

	// Layer 2
	this.resizer_mc = new lib.resizer_mc();
	this.resizer_mc.setTransform(255.5,255.7,1,1,0,0,0,4.7,4.7);

	// scroller
	this.scroller_mc = new lib.ScrollPain();
	this.scroller_mc.setTransform(1,34,2.608,2.07);

	// topBanner
	this.topBan_mc = new lib.topBan_mc();

	// base
	this.notebase_mc = new lib.mainbase_mc();
	this.notebase_mc.shadow = new cjs.Shadow("rgba(0,0,0,0.337)",4,4,5);

	this.addChild(this.notebase_mc,this.topBan_mc,this.scroller_mc,this.resizer_mc,this.wall_mc2,this.wall_mc4,this.wall_mc1,this.wall_mc3,this.wall_mc5,this.wall_mc6,this.wall_mc7,this.wall_mc8,this.addNote_mc,this.closeNote_mc,this.bgColorPanel,this.formatPanel_mc,this.delMsg_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-6.3,303.9,339.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;