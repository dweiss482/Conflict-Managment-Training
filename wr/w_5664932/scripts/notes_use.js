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
var savedBgColor = "rgb(255, 232, 105)";
var savedTopColor =  "rgb(212, 182, 14)";
var isResponsiveProject = false;
var mainCPNamespace;

var showNotesIcon;
var showOnlySlideNotes;
var storeDefault;
var storageLocation;
var messageText;
var formatVisible = false;
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
var is_touch_device;
var wdgtRefresher

//Additional variable added for localization
var ID_Note
var ID_Save
var ID_Print
var ID_BackgroundColor
var ID_Deletenote
var ID_AddNote
var ID_Slide1
var ID_Clicktoaddanote
var ID_Clicktohidenote
var ID_Clicktoshownote
var ID_Areyousure
var ID_Yes
var ID_No
var ID_Note
var lang
var ID_Note_Size
var inPreviewMode = false;

function notesinit() {
	canvas = document.getElementById("canvas");
	try{
		if(window.parent.parent.document.getElementById("control_buttons").length!=0){
			inPreviewMode = true;
		}
	}catch(err){
		inPreviewMode = false;
	}
	for(i=0;i<window.parent.document.getElementsByClassName("cp-widget").length;i++){
		if(window.parent.document.getElementsByClassName("cp-widget")[i].children[0].children[0].contentDocument.getElementById("NotesContainer") != null){
			//NoteWidgetClass = window.parent.document.getElementsByClassName("cp-widget")
			NoteWidgetClass = window.parent.document.getElementsByClassName("cp-widget")[i];
			myFrameName = window.name;
			myWidgetiFrame = window.parent.document.getElementById(window.name);
			break;
		}
	}
	parent.cpCmndShowPlaybar = true;
	
	if(myWidgetiFrame){
	  // canvas.style.height = myWidgetiFrame.parentElement.parentElement.style.height;
	   //canvas.style.width = myWidgetiFrame.parentElement.parentElement.style.width;
	 }
	 
	context = canvas.getContext("2d");
    //context.font="30px Arial";
	
	exportRoot = new lib.notesjs();
	exportRoot.runTime_mc.icon_mc.visible = false;
	
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
	
	createjs.Touch.enable(stage);
	is_touch_device = 'ontouchstart' in document.documentElement;
	
	//Needed for MouseOver for to work	
	stage.enableMouseOver();
	
	window.open('', '_self', '');
	
	lCurrentWidgetIframe=NoteWidgetClass
	
	setDefault()
}

var firstLoadProjectWidth = "-101";
var firstLoadProjectheight = "-101";

var firstIframLeft = "-101";
var firstIframTop = "-101";

function setDefault(){
	
	var projectClientWidth = window.parent.document.getElementById("project").clientWidth
	var projectClientHeight = window.parent.document.getElementById("project").clientHeight
	
	firstLoadProjectWidth = projectClientWidth;
	firstLoadProjectheight = projectClientHeight;
	
	projectWidth = (projectClientWidth)+"px";
	projectHeight = (projectClientHeight)+"px";
	
	if(!isResponsiveProject){
		firstIframLeft =  lCurrentWidgetIframe.offsetLeft
		firstIframTop = lCurrentWidgetIframe.offsetTop
		iframeLeft = lCurrentWidgetIframe.offsetLeft+"px";
		iframeTop = lCurrentWidgetIframe.offsetTop+"px";
	}else{
		firstIframLeft =  lCurrentWidgetIframe.parentElement.offsetLeft
		firstIframTop = lCurrentWidgetIframe.parentElement.offsetTop
		iframeLeft = lCurrentWidgetIframe.parentElement.offsetLeft+"px";
		iframeTop = lCurrentWidgetIframe.parentElement.offsetTop+"px";
	}
	resizeIFrame();
}

function resizeIFrame(){  
	
	//Hack to refresh Iframe ::: Taken from CP6.1 ::: Refreshes CP6.0 as well
	var lItemElem = window.parent.cp(lCurrentWidgetIframe.id);
		if(!lItemElem)
			return;
			var lLastDisplayStyle = lItemElem.style.display;
			var elem = document.createElement('style');
			document.body.appendChild(elem);
			var l = setTimeout(function(){
			document.body.removeChild(elem);
			lItemElem.style.display = "block";
		},50);

	canvas.parentElement.style.display = "block"
	
    iframeExpanded = true;
	setUpBtn();
	canvas.parentElement.style.visibility = "hidden";
	defaultIframe();
	setTimeout(function(){lCurrentWidgetIframe.parentElement.style.top = iframeTop;lCurrentWidgetIframe.parentElement.style.left = iframeLeft;canvas.parentElement.style.visibility = "visible"; setUpBtnFunct();},55);
}

function defaultIframe(){
	lCurrentWidgetIframe.parentElement.style.width = "120px";
	lCurrentWidgetIframe.parentElement.style.height = "100px";
	lCurrentWidgetIframe.parentElement.style.left = iframeLeft
	lCurrentWidgetIframe.parentElement.style.top = iframeTop;
	
	lCurrentWidgetIframe.style.width = "120px";
	lCurrentWidgetIframe.style.height = "100px";
	lCurrentWidgetIframe.style.left = "0px"
	lCurrentWidgetIframe.style.top = "0px";
	
	myWidgetiFrame.style.width = "120px";;
	myWidgetiFrame.style.height = "100px";
		
	canvas.parentElement.style.left =  "0px";
	var tempProjWidth = parseInt(projectWidth.replace("px", ""));
	if(tempProjWidth<=360){
		canvas.parentElement.style.top =   "-20px";	
	}else{
		canvas.parentElement.style.top =   "0px";	
	}
}


function setUpBtn(){
	//Show notes icon or not
	if(showNotesIcon){
		exportRoot.runTime_mc.icon_mc.visible = true;
	}else{
		exportRoot.runTime_mc.icon_mc.visible = false;
	}
	exportRoot.runTime_mc.tt_mc.gotoAndStop(0);
	exportRoot.runTime_mc.openNotes_mc.gotoAndStop(0);
	
	currentSlide = parent.cpInfoCurrentSlide;
	exportRoot.runTime_mc.hit.name = "btn"
	exportRoot.runTime_mc.hit.btnStat =  "new";
	exportRoot.runTime_mc.hit.onMouseOver = showMouse;
	exportRoot.runTime_mc.hit.onMouseOut = clearMouse;
	exportRoot.runTime_mc.hit.onClick = openNote;
	
	NOTES.open();
	
}

function setUpBtnFunct(){
	if(NOTES.hidden() == "true"){
			NOTES.hideNo();
	}else{
		if(showOnlySlideNotes){
			NOTES.showSli();
		}else{
			NOTES.showAll();
		}
	}
}

function openNote(){
	var notesCheck = NOTES.checkSlideNote();
	if(notesCheck){
		if(NOTES.hidden() == "true"){
			if(showOnlySlideNotes){
				NOTES.showSli();
			}else{
				NOTES.showAll();
			}
			exportRoot.runTime_mc.openNotes_mc.gotoAndStop(2)	
			exportRoot.runTime_mc.tt_mc.gotoAndStop(2);
			NOTES.saveSet();
		}else{
			NOTES.hideNo();
			exportRoot.runTime_mc.openNotes_mc.gotoAndStop(3)
			exportRoot.runTime_mc.tt_mc.gotoAndStop(3);
			NOTES.saveSet();
		}
	}else{
		NOTES.new();
		exportRoot.runTime_mc.openNotes_mc.gotoAndStop(2)
		exportRoot.runTime_mc.tt_mc.gotoAndStop(2);
	}
	//myWidgetiFrame.src = myWidgetiFrame.src;
}

function showSlideN(){
	NOTES.showSli();
}


function checkshowhideNote(){
	if(!exportRoot.runTime_mc.openNotes_mc.clicked){
		NOTES.hideNo();
		exportRoot.runTime_mc.openNotes_mc.clicked = true;
		exportRoot.runTime_mc.openNotes_mc.gotoAndStop(2);
		exportRoot.runTime_mc.tt_mc.gotoAndStop(2);
	}else{
		exportRoot.runTime_mc.openNotes_mc.clicked = false;
		exportRoot.runTime_mc.openNotes_mc.gotoAndStop(1);
		exportRoot.runTime_mc.tt_mc.gotoAndStop(1);
		if(showOnlySlideNotes){
			exportRoot.runTime_mc.openNotes_mc.gotoAndStop(1);
			exportRoot.runTime_mc.tt_mc.gotoAndStop(1);
			NOTES.showSli();
			exportRoot.runTime_mc.openNotes_mc.clicked = false;
		}else{
			exportRoot.runTime_mc.openNotes_mc.gotoAndStop(1);
			exportRoot.runTime_mc.tt_mc.gotoAndStop(1);
			NOTES.showAll();
			exportRoot.runTime_mc.openNotes_mc.clicked= false;
		}
	}
}


function resetMainNote(){
	exportRoot.runTime_mc.openNotes_mc.gotoAndStop(0);
	exportRoot.runTime_mc.tt_mc.gotoAndStop(0);
	defaultIframe();



}

//EVENT LISTENERS FROM CAPTIVATE

function PauseEventListener(){
	//my click handler
}

function PlayEventListener(){
	//my click handler
}

function StopEventListener(){
	//my click handler

}

function SlideEnterEventListener(){
	currentSlide = parent.cpInfoCurrentSlide;
	var slideStat = NOTES.checkAllNotes();
	
	if(slideStat){
		NOTES.hidePanel(slideStat);
		if(NOTES.hidden() ==  "true"){
			NOTES.hideNo();
			NOTES.saveSet();
		}else{
			if(showOnlySlideNotes){
				NOTES.showSli();
			}else{
				NOTES.showAll();
			}
			NOTES.saveSet();
		}
		updatePositionOnResize();
	}else{
		defaultIframe();
	}
}


function showMouse(evt){
	var notesCheck = NOTES.checkSlideNote();
	canvas.style.cursor = "pointer"
	if(evt.target.name == "btn"){
		if(notesCheck){
			if(NOTES.hidden()=="true"){
				exportRoot.runTime_mc.openNotes_mc.gotoAndStop(3)
				exportRoot.runTime_mc.tt_mc.gotoAndStop(3)
			}else{
				exportRoot.runTime_mc.openNotes_mc.gotoAndStop(2)
				exportRoot.runTime_mc.tt_mc.gotoAndStop(2)
			}
		}else{
			exportRoot.runTime_mc.openNotes_mc.gotoAndStop(1);
			exportRoot.runTime_mc.tt_mc.gotoAndStop(1);
		}
	}
}

function clearMouse(evt){
	canvas.style.cursor = "default"
	if(evt.target.name == "btn"){
		exportRoot.runTime_mc.openNotes_mc.gotoAndStop(0);
		exportRoot.runTime_mc.tt_mc.gotoAndStop(0)
	}
}

function traceThis(varStat,alertStat){
	if(alertStat){
		alert(volPercent);
	}else{
		context.fillText(varStat, 10, 50);
	}
}

var resizedOffsetLeft;
var resizedOffsetTop;
var isResizeing = false;
var notesAlreadyHidden = false;
function updateSizeNPositionOnResizeComplete(){
	isResizeing = true;
	if(NOTES.hidden() == "true"){
		notesAlreadyHidden = true;
	}else{
		notesAlreadyHidden = false;
	}
	updatePositionOnResize();
}
		
function updatePositionOnResize(){
	var projectClientWidth = window.parent.document.getElementById("project").clientWidth
	var projectClientHeight = window.parent.document.getElementById("project").clientHeight
	
	//Calculate the Percentage difference from first load.
	var widthDiff = (projectClientWidth/firstLoadProjectWidth)*100;
	var heightDiff = (projectClientHeight/firstLoadProjectheight)*100;
	
	projectWidth = (projectClientWidth)+"px";
	projectHeight = (projectClientHeight)+"px";
	
	if(!isResponsiveProject){
		resizedOffsetLeft = (widthDiff/100)*firstIframLeft;
		resizedOffsetTop = (heightDiff/100)*firstIframTop;
		iframeLeft = resizedOffsetLeft+"px";
		iframeTop = resizedOffsetTop+"px";
	}else{
		resizedOffsetLeft = (widthDiff/100)*firstIframLeft;
		resizedOffsetTop = (heightDiff/100)*firstIframTop;
		iframeLeft = resizedOffsetLeft+"px";
		iframeTop = resizedOffsetTop+"px";
	}
	resizeIFrameResponsive();
	
}

function resizeIFrameResponsive(){  
	//Hack to refresh Iframe ::: Taken from CP6.1 ::: Refreshes CP6.0 as well
	var lItemElem = window.parent.cp(lCurrentWidgetIframe.id);
		if(!lItemElem)
			return;
			var lLastDisplayStyle = lItemElem.style.display;
			var elem = document.createElement('style');
			document.body.appendChild(elem);
			var l = setTimeout(function(){
			document.body.removeChild(elem);
			lItemElem.style.display = "block";
		},50);

	canvas.parentElement.style.display = "block"
	
    iframeExpanded = true;
	canvas.parentElement.style.visibility = "hidden";
	defaultIframe();
	setTimeout(function(){lCurrentWidgetIframe.parentElement.style.top = iframeTop;lCurrentWidgetIframe.parentElement.style.left = iframeLeft;canvas.parentElement.style.visibility = "visible"; console.log(notesAlreadyHidden);
	if(!notesAlreadyHidden){
		if(showOnlySlideNotes){
			NOTES.showSli();
		}else{
			NOTES.showAll();
		}
	}},55);
			
}

notesUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		captivateMovie =  this.captivate;
		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		mainCPNamespace = this.captivate.CPMovieHandle.getMovieProps().getCpHandle();
		isResponsiveProject = mainCPNamespace.responsive;		

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
		notesinit();
		this.doUpdate();  
		
		//Add captiavte event listeners
		evtHandle.addEventListener(evtHandle.MOVIE_PAUSE_EVENT, PauseEventListener, false);
		evtHandle.addEventListener(evtHandle.MOVIE_RESUME_EVENT, PlayEventListener, false);
		evtHandle.addEventListener(evtHandle.MOVIE_STOP_EVENT, StopEventListener, false);
		evtHandle.addEventListener(evtHandle.SLIDE_ENTER_EVENT, SlideEnterEventListener, false);                          
		//evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZEDEVENT,updateSizeNPositionOnResize, false );
		//evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGEDEVENT,updateSizeNPositionOnResize, false );
		
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
	},
	
	updateData: function()
	{
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text();  
		//alert(jQuery.isXMLDoc(resultDoc));
		
		
		//BREAKING UP THE XML FROM CAPTIVATE
		var showNotesIconString = initresultDoc.find( '#showNotesIcon' ).text();
		var showOnlySlideNotesString = initresultDoc.find( '#showOnlySlideNotes' ).text(); 
		var storeDefaultString = initresultDoc.find( '#storeDefault' ).text(); 
		
		if (showNotesIconString ==  "true") {
			showNotesIcon=true;
			} else {
			showNotesIcon=false;
		}
		if (showOnlySlideNotesString ==  "true") {
			showOnlySlideNotes=true;
			} else {
			showOnlySlideNotes=false;
		}
		if (storeDefaultString ==  "true") {
			storeDefault=true;
			storageLocation="";
		} else {
			storeDefault=false;
			storageLocation =  initresultDoc.find( '#storageLocation' ).text();
		}
		
		//Adding additional text that is needed from for Localization
	
		var ID_Note_Str = initresultDoc.find('#ID_Note');
        if (ID_Note_Str){
            if (ID_Note_Str.find('string')){
                ID_Note = ID_Note_Str.find('string').text();
            }
        }
		var ID_Save_Str = initresultDoc.find('#ID_Save');
        if (ID_Save_Str){
            if (ID_Save_Str.find('string')){
                ID_Save = ID_Save_Str.find('string').text();
            }
        }
		var ID_Print_Str = initresultDoc.find('#ID_Print');
        if (ID_Print_Str){
            if (ID_Print_Str.find('string')){
                ID_Print = ID_Print_Str.find('string').text();
            }
        }
		var ID_BackgroundColor_Str = initresultDoc.find('#ID_BackgroundColor');
        if (ID_BackgroundColor_Str){
            if (ID_BackgroundColor_Str.find('string')){
                ID_BackgroundColor = ID_BackgroundColor_Str.find('string').text();
            }
        }
		var ID_Deletenote_Str = initresultDoc.find('#ID_Deletenote');
        if (ID_Deletenote_Str){
            if (ID_Deletenote_Str.find('string')){
                ID_Deletenote = ID_Deletenote_Str.find('string').text();
            }
        }
		var ID_AddNote_Str = initresultDoc.find('#ID_AddNote');
        if (ID_AddNote_Str){
            if (ID_AddNote_Str.find('string')){
                ID_AddNote = ID_AddNote_Str.find('string').text();
            }
        }
		var ID_Slide1_Str = initresultDoc.find('#ID_Slide1');
        if (ID_Slide1_Str){
            if (ID_Slide1_Str.find('string')){
                ID_Slide1 = ID_Slide1_Str.find('string').text();
            }
        }
		var ID_Clicktoaddanote_Str = initresultDoc.find('#ID_Clicktoaddanote');
        if (ID_Clicktoaddanote_Str){
            if (ID_Clicktoaddanote_Str.find('string')){
                ID_Clicktoaddanote = ID_Clicktoaddanote_Str.find('string').text();
            }
        }
		var ID_Clicktohidenote_Str = initresultDoc.find('#ID_Clicktohidenote');
        if (ID_Clicktohidenote_Str){
            if (ID_Clicktohidenote_Str.find('string')){
                ID_Clicktohidenote = ID_Clicktohidenote_Str.find('string').text();
            }
        }
		var ID_Clicktoshownote_Str = initresultDoc.find('#ID_Clicktoshownote');
        if (ID_Clicktoshownote_Str){
            if (ID_Clicktoshownote_Str.find('string')){
                ID_Clicktoshownote = ID_Clicktoshownote_Str.find('string').text();
            }
        }
		var ID_Areyousure_Str = initresultDoc.find('#ID_Areyousure');
        if (ID_Areyousure_Str){
            if (ID_Areyousure_Str.find('string')){
                ID_Areyousure = ID_Areyousure_Str.find('string').text();
            }
        }
		var ID_Yes_Str = initresultDoc.find('#ID_Yes');
        if (ID_Yes_Str){
            if (ID_Yes_Str.find('string')){
                ID_Yes = ID_Yes_Str.find('string').text();
            }
        }
		var ID_No_Str = initresultDoc.find('#ID_No');
        if (ID_No_Str){
            if (ID_No_Str.find('string')){
                ID_No = ID_No_Str.find('string').text();
            }
        }
		var saveLang_Str = initresultDoc.find('#saveLang');
        if (saveLang_Str){
            if (saveLang_Str.find('string')){
                ID_lang = saveLang_Str.find('string').text();
            }
        }
		if(ID_lang == "fr"){
			ID_Note_Size="bold 30px Arial"
		}else{
			ID_Note_Size="bold 50px Arial"
		}

		messageText = initresultDoc.find( '#messageText' ).text();
		
		NOTES.getFile();
		
	},
	
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		
	}
};

notes_use = function ()
{
	return notesUse1;
}