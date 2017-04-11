var canvas, stage, exportRoot, captivateMovie, cpMovie, volChecker, counter = Number(0), incrVolume, decrVolume,m_Width;
var volAlphaIncrease = new Array();
var volAlphaDecrease = new Array();
var intervalDuration;// duration between intervals, in milliseconds
var intervalId;
var counter;
var stopCount = 10;
var changAlpha = false;
var context
var evtHandle;
var lCurrentWidgetIframe;
var projectWidth;
var	projectHeight;
var currentSlide;
var NoteWidgetClass;
var myFrameName;
var myWidgetiFrame;
var canvasOriginalLeft;
var canvasOriginalTop;
var iframeLeft;
var iframeTop;
//:::
//:::
//VARIABLES TO HANDLE VOL CONTROLS FOR VOL SLIDER:::MARCELLUS
//::
//::
var volSlider;
var volPercent;
var minVal = 2
var maxVal = 99
var neutralVal = 213

function playbarinit() {
	canvas = document.getElementById("canvas");
	
	for(i=0;i<window.parent.document.getElementsByClassName("cp-widget").length;i++){
		//console.log(window.parent.document.getElementsByClassName("cp-widget")[i].children[0].children[0].contentDocument.getElementById("NotesContainer"))
		if(window.parent.document.getElementsByClassName("cp-widget")[i].children[0].children[0].contentDocument.getElementById("NotesContainer") != null){
			//console.log(window.parent.document.getElementsByClassName("cp-widget")[i].children[0].children[0].contentDocument)
			NoteWidgetClass = window.parent.document.getElementsByClassName("cp-widget")[i];
			myFrameName = window.name;
			myWidgetiFrame = window.parent.document.getElementById(window.name);
			break;
		}else{
			//console.log(window.parent.document.getElementsByClassName("cp-widget")[i].children[0].children[0].contentDocument," NOt found")
		}
	}
	if(myWidgetiFrame){
	   canvas.style.height = myWidgetiFrame.parentElement.parentElement.style.height
	   canvas.style.width = myWidgetiFrame.parentElement.parentElement.style.width
	 }
	 
	context = canvas.getContext("2d");
    context.font="30px Arial";
	
	exportRoot = new lib.notesjs();
	
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
	
	createjs.Touch.enable(stage);
	
	//Needed for MouseOver for to work	
	stage.enableMouseOver();
	
	window.open('', '_self', '');
	
	lCurrentWidgetIframe = NoteWidgetClass;
	//console.log(lCurrentWidgetIframe,"lCurrentWidgetIframe")
	projectWidth = window.parent.document.getElementById("project").style.width;
	projectHeight= window.parent.document.getElementById("project").style.height;
	
	canvasOriginalLeft =  canvas.parentElement.style.left;
	canvasOriginalTop =  canvas.parentElement.style.top;
	iframeLeft = lCurrentWidgetIframe.style.left;
	iframeTop = lCurrentWidgetIframe.style.top;
	
	resizeIFrame();
}

function resizeIFrame(){  
    window.parent.cp.redrawItem(lCurrentWidgetIframe.id);
	
	canvas.parentElement.style.left = lCurrentWidgetIframe.style.left;
	canvas.parentElement.style.top =  lCurrentWidgetIframe.style.top;
    lCurrentWidgetIframe.style.width = projectWidth;
    lCurrentWidgetIframe.style.height = projectHeight;
    lCurrentWidgetIframe.style.left = "0px";
    lCurrentWidgetIframe.style.top = "0px";  
	
    iframeExpanded = true;
	setUpBtn();
}


function setUpBtn(){
	//Make PauseBtn not visible
	exportRoot.runTime_mc.pbcPlay_mc.visible = false;
	
	//Disable audio controls
	exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
	volChecker =  false;
	setVoulmeOfCourse();
	
	//Add captiavte event listeners
	evtHandle.addEventListener(evtHandle.MOVIE_PAUSE_EVENT, PauseEventListener, false);
	evtHandle.addEventListener(evtHandle.MOVIE_RESUME_EVENT, PlayEventListener, false);
	evtHandle.addEventListener(evtHandle.MOVIE_STOP_EVENT, StopEventListener, false);
	
	currentSlide = parent.cpInfoCurrentSlide;
	//console.log(currentSlide,"currentSlidecurrentSlidecurrentSlide")
	
	//Hide captivate default playbar
	parent.cpCmndShowPlaybar = false;
	
	//Assign names
	exportRoot.runTime_mc.pbcVolume_mc.name = "vol"
	exportRoot.runTime_mc.pbcPause_mc.name = "pause"
	exportRoot.runTime_mc.pbcPlay_mc.name = "play"
	exportRoot.runTime_mc.pbcNext_mc.name = "next"
	exportRoot.runTime_mc.pbcPrev_mc.name = "prev"
	exportRoot.runTime_mc.pbcStop_mc.name = "stop"
	
	exportRoot.runTime_mc.pbcVolume_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcPause_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcPlay_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcNext_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcPrev_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcStop_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.pbcVolSlider_mc.sliderBase_mc.onMouseOver = showMouse;
	exportRoot.runTime_mc.openNotes_mc.onMouseOver = showMouse;
	
	exportRoot.runTime_mc.pbcVolume_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcPause_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcPlay_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcNext_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcPrev_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcStop_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.pbcVolSlider_mc.sliderBase_mc.onMouseOut = clearMouse;
	exportRoot.runTime_mc.openNotes_mc.onMouseOut = clearMouse;
	
	exportRoot.runTime_mc.pbcVolume_mc.onClick = volumeHandler;
	exportRoot.runTime_mc.pbcPause_mc.onClick =  pausemovie;
	exportRoot.runTime_mc.pbcPlay_mc.onClick = playmovie;
	exportRoot.runTime_mc.pbcNext_mc.onClick = nextmovie;
	exportRoot.runTime_mc.pbcPrev_mc.onClick = prevmovie;
	exportRoot.runTime_mc.pbcStop_mc.onClick = stopvmovie;
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.name ="volSlider"
	exportRoot.runTime_mc.pbcVolSlider_mc.sliderBase_mc.name = "volTrack"
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.onPress = volSliderFunct;
	exportRoot.runTime_mc.pbcVolSlider_mc.sliderBase_mc.onPress = volTrackFunct;
	exportRoot.runTime_mc.openNotes_mc.onClick = openNote;;
	
	NOTES.open();
	NOTES.save();
}

function openNote(){
	if(NOTES.noteCount()>0){
		if(NOTES.hidden()){
			NOTES.show();
		}else{
			NOTES.hide();
		}
	}else{
		NOTES.new();
	}
}
//notice that when we call the function we are not explicitly passing anything
function playmovie(){
	parent.cpCmndResume = true;
	exportRoot.runTime_mc.pbcPause_mc.visible = true;
	exportRoot.runTime_mc.pbcPlay_mc.visible = false;
}

function pausemovie(elem)
{		
	parent.cpCmndPause = true;
	exportRoot.runTime_mc.pbcPause_mc.visible = false;
	exportRoot.runTime_mc.pbcPlay_mc.visible = true;

}
function nextmovie(){
	parent.cpCmndNext = true;
	exportRoot.runTime_mc.pbcPause_mc.visible = true;
	exportRoot.runTime_mc.pbcPlay_mc.visible = false;
}

function prevmovie(){
	parent.cpCmndPrevious = true;
	exportRoot.runTime_mc.pbcPause_mc.visible = true;
	exportRoot.runTime_mc.pbcPlay_mc.visible = false;
}

function stopvmovie(){
	parent.cpCmndExit = 1;
}

var reverseArray = new Array();
var i;
for(i=100;i>=1;i--){
	reverseArray.push(i)
}

function volSliderFunct(e){
var getVal
var mask_mc = exportRoot.runTime_mc.pbcVolSlider_mc.volMask_mc;
var volarr = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);
	e.onMouseMove = function(ev){
		if(e.target.name == "volSlider"){
			if(e.target.x>= minVal && e.target.x<= maxVal){
				var moveVal = ev.stageX - neutralVal
				if(moveVal<minVal){
					e.target.x =  minVal
					volPercent = parseInt((e.target.x / maxVal)*100 - minVal);
					exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(1)
				}else if(moveVal>maxVal){
					e.target.x =  maxVal
					volPercent = parseInt((e.target.x / maxVal)*100 - minVal);
					exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
				}else{
					e.target.x =  moveVal
					volPercent = parseInt((e.target.x / maxVal)*100 - minVal);
					exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
				}
				getVal = parseInt(volPercent/10);
				setVolume(volarr[getVal]);
				mask_mc.gotoAndStop(parseInt(volPercent))
			}
		}
		FadeActive = false
		//ClearFadeInterval();
		stage.update(); 
	}
	e.onMouseUp = function(ev){
		if(e.target.name == "volSlider"){
			if(e.target.x<minVal){
				e.target.x=minVal
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(1)
			}else if(e.target.x>maxVal){
				e.target.x=maxVal
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
			}
		}
		FadeActive = false;
		//ClearFadeInterval();
	}
}
function volTrackFunct(e){
var getVal
var mask_mc = exportRoot.runTime_mc.pbcVolSlider_mc.volMask_mc;
var volarr = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);

	if(e.target.name == "volTrack"){
		if(exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x>= minVal && exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x<= maxVal){
			var moveVal = e.stageX - neutralVal
			if(moveVal<minVal){
				exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x =  minVal
				volPercent = parseInt((exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(1)
			}else if(moveVal>maxVal){
				exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x =  maxVal
				volPercent = parseInt((exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
			}else{
				exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x =  moveVal
				volPercent = parseInt((exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
			}
			getVal = parseInt(volPercent/10);
			setVolume(volarr[getVal]);
			mask_mc.gotoAndStop(parseInt(volPercent))
		}
	}
	e.onMouseUp = function(ev){
		if(e.target.name == "volTrack"){
			if(exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x<minVal){
				exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x=minVal
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(1)
			}else if(e.target.x>maxVal){
				exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x=maxVal
				exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0)
			}
		}
		FadeActive = false;
		//ClearFadeInterval();
	}
}

function checkSound(){
	if(!volChecker){
		exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(1);
		volChecker = true;
		decrVolume = setInterval(function(){decreaseSound()},100);
	}else{
		exportRoot.runTime_mc.pbcVolume_mc.gotoAndStop(0);
		volChecker = false;
		incrVolume = setInterval(function(){increaseSound()},100);
	}
	exportRoot.runTime_mc.pbcVolume_mc.mouseEnabled = false;
}
function increaseSound(){
	var arr = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);
	if(counter>=11){
		clearInterval(incrVolume)
		counter = 0;
		exportRoot.runTime_mc.pbcVolume_mc.mouseEnabled = true;
	}else{
		counter++;
		setVolume(Number(arr[counter-1]))
	}
}
function decreaseSound(){
	var arr = new Array(1,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1,0);
	if(counter>=11){
		clearInterval(decrVolume)
		counter = 0;
		exportRoot.runTime_mc.pbcVolume_mc.mouseEnabled = true;
	}else{
		counter++;
		setVolume(Number(arr[counter-1]))
	}
} 
function setVolume(num){
	var numb = Number(num);
	parent.cpCmndVolume = numb;
}

function setVoulmeOfCourse() {
	for (var i = 0; i<=10; i++) {
		volAlphaIncrease.push(i/10);
	}
	for (var j = 10; j>=0; j--) {
		volAlphaDecrease.push(j/10);
	}
	//exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc
	//exportRoot.runTime_mc.pbcVolSlider_mc.volSliderTrack_mc
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.x=maxVal
	exportRoot.runTime_mc.pbcVolSlider_mc.volMask_mc.gotoAndStop(99)
	//ClearInterval();
}

function ClearInterval() {
	intervalDuration = 100;// duration between intervals, in milliseconds
	counter = 1;
	clearInterval(intervalId);
	intervalId = setInterval(myRepeatingFunction,intervalDuration);
}

function myRepeatingFunction() {
	counter++;
	if (changAlpha) {
		exportRoot.runTime_mc.pbcVolSlider_mc.alpha=(volAlphaIncrease[counter]);
	} else {
		exportRoot.runTime_mc.pbcVolSlider_mc.alpha=(volAlphaDecrease[counter]);
	}
	if (counter >= stopCount) {
		clearInterval(intervalId);
		if (! changAlpha) {
			//disableSlider();
		} else {
			//ClearFadeInterval();
		}
	}
}

function disableSlider(){
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.enabled=false;
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderTrack_mc.enabled=false;
}
function enableSlider(){
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderBar_mc.enabled=true;
	exportRoot.runTime_mc.pbcVolSlider_mc.volSliderTrack_mc.enabled=true;
}
function volumeHandler() {
	if (exportRoot.runTime_mc.pbcVolSlider_mc.alpha == 1) {
		changAlpha = false;
		disableSlider()
		//ClearInterval();
	} else {
		changAlpha = true;
		enableSlider();
		//ClearInterval();
	}
}

var FadeId;// duration between intervals, in milliseconds
var FadeintervalId;
var Fadecounter;
var FadestopCount = 3;

function ClearFadeInterval() {
	FadeId = 1000;// duration between intervals, in milliseconds
	Fadecounter = 1;
	clearInterval(FadeintervalId);
	FadeintervalId = setInterval(FadeFunction,FadeId);
}

function FadeFunction() {
	Fadecounter++;
	if (Fadecounter >= FadestopCount) {
		clearInterval(FadeintervalId);
		changAlpha = false;
		disableSlider();
		//ClearInterval();
	}
}

//EVENT LISTENERS FROM CAPTIVATE

function PauseEventListener(){
	//my click handler
	exportRoot.runTime_mc.pbcPause_mc.visible = false;
	exportRoot.runTime_mc.pbcPlay_mc.visible = true;
}

function PlayEventListener(){
	//my click handler
	exportRoot.runTime_mc.pbcPause_mc.visible = true;
	exportRoot.runTime_mc.pbcPlay_mc.visible = false;
	currentSlide = parent.cpInfoCurrentSlide;
	//console.log(currentSlide,"currentSlidecurrentSlidecurrentSlide")
}

function StopEventListener(){
	//my click handler
	exportRoot.runTime_mc.pbcPause_mc.visible = false;
	exportRoot.runTime_mc.pbcPlay_mc.visible = true;
}


function showMouse(evt){
	canvas.style.cursor = "pointer"
	if(evt.target.name == "vol"){
		exportRoot.runTime_mc.toolTip_0.x = evt.target.x ;
		exportRoot.runTime_mc.toolTip_0.y = evt.target.y-40;
		exportRoot.runTime_mc.toolTip_0.visible = true;
	}else if(evt.target.name == "play"){
		exportRoot.runTime_mc.toolTip_1.x = evt.target.x;
		exportRoot.runTime_mc.toolTip_1.y = evt.target.y-30;
		exportRoot.runTime_mc.toolTip_1.visible = true;
	}else if(evt.target.name == "pause"){
		exportRoot.runTime_mc.toolTip_2.x = evt.target.x;
		exportRoot.runTime_mc.toolTip_2.y = evt.target.y-40;
		exportRoot.runTime_mc.toolTip_2.visible = true;
	}else if(evt.target.name == "next"){
		exportRoot.runTime_mc.toolTip_3.x = evt.target.x;
		exportRoot.runTime_mc.toolTip_3.y = evt.target.y-40;
		exportRoot.runTime_mc.toolTip_3.visible = true;
	}else if(evt.target.name == "prev"){
		exportRoot.runTime_mc.toolTip_4.x = evt.target.x;
		exportRoot.runTime_mc.toolTip_4.y = evt.target.y-40;
		exportRoot.runTime_mc.toolTip_4.visible = true;
	}else if(evt.target.name == "stop"){
		exportRoot.runTime_mc.toolTip_5.x = evt.target.x;
		exportRoot.runTime_mc.toolTip_5.y = evt.target.y-40;
		exportRoot.runTime_mc.toolTip_5.visible = true;
	}
}

function clearMouse(evt){
	canvas.style.cursor = "default"
	if(evt.target.name == "vol"){
		exportRoot.runTime_mc.toolTip_0.visible = false;
	}else if(evt.target.name == "play"){
		exportRoot.runTime_mc.toolTip_1.visible = false;
	}else if(evt.target.name == "pause"){
		exportRoot.runTime_mc.toolTip_2.visible = false;
	}else if(evt.target.name == "next"){
		exportRoot.runTime_mc.toolTip_3.visible = false;
	}else if(evt.target.name == "prev"){
		exportRoot.runTime_mc.toolTip_4.visible = false;
	}else if(evt.target.name == "stop"){
		exportRoot.runTime_mc.toolTip_5.visible = false;
	}
}

function traceThis(varStat,alertStat){
	if(alertStat){
		alert(volPercent);
	}else{
		context.fillText(varStat, 10, 50);
	}
}

playbarUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		captivateMovie =  this.captivate;
		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		m_Width = this.movieProps.movieWidth;
		this.varHandle = this.movieProps.variablesHandle;
		this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.currentTheme
		this.updateData();
		cpMovie = parent.cp.movie;
		playbarinit();
		this.doUpdate();                            
		
	},

	updateData: function()
	{
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text();  
		
		var result = jQuery.parseXML( thexml );
		var resultDoc = jQuery( result );
		//alert(jQuery.isXMLDoc(resultDoc));
		
	},
	
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		
	}
};

playbar_use = function ()
{
	return playbarUse1;
}