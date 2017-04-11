var NoteCount = 0;
var Container;
var hideStatus;
var selectedNum=2;
var showHide = "all";
var selectedNote;
var selectedNoteText;
var selectedNoteId;
var selectedDIVClass;
var topBanner;
var topBannerColor;
var noteBgColor;
var savedStyleWidth;
var savedStyleHeight;
var browser;
var addNote;
var closeNote;
var bgColorSelector;
var selectedTextNote;
var notePanelVisible;
var closeNoteId;

//For text Formats
var selectedText;
var isBold;
var isItalic;
var isUnderlined;
var fontType;
var fontSize;
var fontColor;
var notesCurX
var notesCurY;
var notesCurW
var notesCurH;
var noteEditPanel;
var placeNoteLeft;
var placeNoteTop;
var closeNotePanel;
var zIndexCount = 1;
var isCtrl = false;
var isShift = false;
var canvasLeft;
var canvasTop;
var boldChanged = false;
var	italicChanged = true;
var underlineChanged = false;
var changedFontColor = "#000000";
var changedFontFamily =  "Verdana";
var changedFontSize = "medium";

var createdNoteCount = 0;
var TotalNoteCount = 0;
var prevEditPanel;
var mainPageX;
var mainPageY
var prevProjWidth;

//Get file name
var loc;
var filename; 

var NOTES = (function () {
	var initNotes = function initNotes() {
		$("<div />", { 
			text : "+", 
			"class" : "add-note",
			click : function () { createNote();}
		}).prependTo(document.getElementById("NotesContainer"));
		initNotes = null;
	},
	openNotes = function openNotes() {
	  canvasLeft = projectWidth.replace("px", "");
	  canvasLeft =  parseInt(canvasLeft)
	  canvasTop = projectHeight.replace("px", "");
	  canvasTop =  parseInt(canvasTop)

	  placeNoteLeft = (parseInt(canvasLeft/3))+"px";
	  placeNoteTop = (parseInt(canvasTop/4))+"px"
	  	  
		var localStorageKeys = Object.keys(localStorage);
		TotalNoteCount = localStorage.length-1;
		for (var i = 0; i < localStorage.length; i++) {
			if(localStorage.key(i).indexOf(filename) === -1){
			}else{
				if(JSON.parse(localStorage.getItem(localStorage.key(i))).id){
					if(JSON.parse(localStorage.getItem(localStorage.key(i))).id == "1001"){
					var tempSet = JSON.parse(localStorage.getItem(localStorage.key(i)))
					}else{	
						createNote(JSON.parse(localStorage.getItem(localStorage.key(i))));
					}
				}
			}
		}
		resetSettings(tempSet);
	},
	resetSettings = function (data) {
		data = data || { id:"", noteHideStatus : "",checkSelectedNum : "", SelectedNotesOnly:"", bc : "", ic : "", uc : "", ccf : "", cfs : "", cfc : ""};
		hideStatus =  data.noteHideStatus;
		selectedNum = data.checkSelectedNum;
		boldChanged = data.bc;
		italicChanged = data.ic; 
		underlineChanged = data.uc;
		changedFontFamily = data.ccf;
		changedFontSize = data.cfs;
		changedFontColor = data.cfc;
		if(hideStatus == "true"){
			showHide = "hide";
			hideAllNotes();
		}else{
			showHide = "showSel"
			showSlideNotes();
		}
	},
	createNote = function 	(data) {
		isResizeing = false;
		openTheIFrame();
		canvasLeft = projectWidth.replace("px", "");
		canvasLeft =  parseInt(canvasLeft)
		canvasTop = projectHeight.replace("px", "");
		canvasTop =  parseInt(canvasTop)
	
		placeNoteLeft = (parseInt(canvasLeft/3))+"px";
		placeNoteTop = (parseInt(canvasTop/4))+"px"
		var tempProjWidth = parseInt(projectWidth.replace("px", ""));
		var tempProjHeight = parseInt(projectHeight.replace("px", ""));
	
		var setStyleWidth;
		var setStyleHeight
		
		if(tempProjWidth<=360){
			setStyleWidth = 200+"px"
			setStyleHeight = 200+"px"
		}else{
			setStyleWidth = 300+"px"
			setStyleHeight = 300+"px"
		}
				
		
		data = data || { id : +new Date(), top : placeNoteTop, left : placeNoteLeft, text : "", topColor:"", bgColor:"", styleWidth:setStyleWidth, styleHeight:setStyleHeight, num:currentSlide, noteHide:"" }
		if(data.topColor){
			topBannerColor =  data.topColor;
		}else{
			topBannerColor =  savedTopColor;
		}
		if(data.bgColor){
			noteBgColor = data.bgColor;
		}else{
			noteBgColor =  savedBgColor;
		}
		hideStatus = data.noteHide;

		if(!showOnlySlideNotes){
			if(data.text == ""){
			data.text = "<i>"+messageText+"</i>";
			}
		}else{
			if(data.text == ""){
			data.text = "<i>"+ID_Slide1+" "+currentSlide+"</i>";
			}
		}
		
		savedStyleWidth = data.styleWidth;
		savedStyleHeight = data.styleHeight;
		slideNum = data.num;
		
		var tempProjWidth = parseInt(projectWidth.replace("px", ""));
		var tempProjHeight = parseInt(projectHeight.replace("px", ""));
		var noteCSS;

			
		if(tempProjWidth<=360){
			noteCSS = "smallnote";
		}else{
			noteCSS = "note";
		}
			
		clearAllSelections();
		
		if(data.id!=undefined){
			checkNoteCount("add");
			
			return $("<div />", { 
				"class" : noteCSS,
				'id' : data.id,
				'spry:default':data.num
				 })
				.prepend($("<div />", { "class" : "note-header", "id":"note-header"+data.id} )
					.append($("<span />", { 
						text : "+", 
						"class" : "add-note",
						"id": "add-note"+data.id,
						"title":ID_AddNote,
						click : function () {addNewNote();}
					}))
					.append($("<span />", { 
						"class" : "close-note", 
						"id": "close-note"+data.id,
						text : "X", 
						"title":ID_Deletenote,
						click : function () { exitSetup($(this).attr('id'));}
					}))
					.append($("<div />", { 
						 "class":"bgColorPicker-note",
						 "id" :"bgColorPicker"+data.id
					}))
					.append($("<div />", { 
						 "class":"print-note",
						 "id" :"printmc"+data.id,
						 "title":ID_Print,
						 click : function () { printDiv("NoteText"+data.id)}
					}))
					.append($("<div />", { 
						 "class":"save-note",
						 "id" :"savemc"+data.id,
						 "title":ID_Save,
						 click : function () { saveDiv("NoteText"+data.id)}
					}))
				)
				.append($("<div />", { 
					"id":"NoteText"+data.id,
					html : data.text, 
					contentEditable : true, 
					"class" : "note-content",
					keypress : saveNote
				}))
				.append($("<div />", { 
					"id":"editpanel"+data.id,
					"class":"edit-Panel"
				}).prepend($("<select />", { 
					"id":"dropDown"+data.id,
					"class":"select-panel"
				})
				.append($("<option />", {
					text:"Arial",
					"value":"Arial"
				}))
				.append($("<option />", {
					text:"Calibri",
					"value":"Calibri"
				}))
				.append($("<option />", { 
					text:"Verdana",
					"value":"Verdana"
				})))
				.append($("<select />", { 
					"id":"dropDownSize"+data.id,
					"class":"dropDown-panel"
				})
				.append($("<option />", {
					text:"12",
					"value":"2"
				}))
				.append($("<option />", {
					text:"14",
					"value":"3"
				}))
				.append($("<option />", { 
					text:"16",
					"value":"4"
				})))
				
				.append($("<input />", { 
					"type":"button",
					"value":"B",
					"class":"bold-btn",
					click: changeBold
				}))
				.append($("<input />", { 
					"type":"button",
					"value":"I",
					"class":"italic-btn",
					click: changeItalic
				}))
				.append($("<input />", { 
					"type":"button",
					"value":"U",
					"class":"underline-btn",
					click: changeUnderline
				}))
				.append($("<div />", { 
					"class":"bgfontColorPicker-note",
					"id" :"bgFontColorPicker"+data.id
				}))
				.draggable({ 
				containment: "parent"
			 }))
			 .append($("<div />", { 
					"class":"closeNoteBanner",
					"id" :"closeNoteBanner"+data.id,
				}).append($("<span />", { 
					}).append($("<img />", { 
						"src":"images/erroricon.png",
						"align":"middle"
				})).append($("<text />", { 
					text: ID_Areyousure,
					"align":"middle"
				})))
				.append($("<div />", { 
					"class":"closeNoteBtmBaner",
					"id" :"closeNoteBtmBaner"+data.id,
				}).append($("<input />", { 
					"type":"button",
					"class":"yes-btn",
					"value":ID_Yes,
					click : deleteNote,
				})).append($("<input />", { 
					"type":"button",
					"class":"no-btn",
					"value":ID_No,
					click : clearExit
				}))))
			.draggable({ 
				containment: "window",
				handle : "div.note-header", 
				stack : ".note",
				start : markUnsaved,
				stop  : saveNote,
				drag: function (e, ui){
						$(this).bind("mouseout", function (){$(this).draggable().trigger('mouseup' )})
						zIndexCount = $(this).css('z-index');
						}
			 })
			.css({
				position: "absolute",
				"top" : data.top,
				"left": data.left
			})
			 .resizable({
				start: function(e, ui) {
					$(this).unbind("mouseout");
					if (window.getSelection) {
					  if (window.getSelection().empty) {  // Chrome
						window.getSelection().empty();
					  } else if (window.getSelection().removeAllRanges) {  // Firefox
						window.getSelection().removeAllRanges();
					  }
					} else if (document.selection) {  // IE?
					  document.selection.empty();
					}
					//hidePanels;
				 },
				resize: function(e, ui) {
					if(ui.size.width<180){
						e.target.style.width = 180+"px";
					}
					if(ui.size.height<180){
						e.target.style.height = 180+"px";
					}
					changedHeight($(this).attr("id"));
					//hidePanels;
				},
				stop: function(e,ui){
					showPanels;
					saveNote;
				},
			})
			.focusout(saveNote)
			.appendTo(document.getElementById("NotesContainer"))
			.ready(NoteReady(data.id))
		}
	},
	checkNote = function checkNote(){
		changedHeight($(this).attr("id"));
	},
	changedHeight = function changedHeight(id){
		var str = id+"";
		str = str.replace("NoteText", "");
		var parentiframe = lCurrentWidgetIframe.children[0].children[0];
		if(parentiframe.contentDocument.getElementById(id)!=null){
			selectedNote = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(str)
			topBanner = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("note-header"+str)
			selectedNoteText = selectedNote.childNodes[1]
			selectedNoteText.style.height = selectedNote.offsetHeight-80+"px";
			selectedNoteText.style.width = selectedNote.offsetWidth-30+"px";
			selectedNoteText.style["max-width"] = selectedNote.style.width;
			addNote = topBanner.children[0];
		}
		
	},
	changeBold = function changeBold(){
		document.execCommand('bold', false, null);
		if(document.queryCommandState("bold")){
			noteEditPanel.children[2].style["background-color"] = "#999999";
			boldChanged = true;
		}else{
			noteEditPanel.children[2].style["background-color"] = "";
			boldChanged = false;
		}
		saveSettings();
	},
	changeItalic = function changeItalic(){
		document.execCommand('italic', false, null);
		if(document.queryCommandState("italic")){
			noteEditPanel.children[3].style["background-color"] = "#999999";
			italicChanged = true;
		}else{
			noteEditPanel.children[3].style["background-color"] = "";
			italicChanged = false;
		}
		saveSettings();
	},
	changeUnderline = function changeUnderline(){
		if(selectedNoteText.style.textDecoration == "underline"){
			selectedNoteText.style.textDecoration = "none"
			document.execCommand('underline', false, null);
		}else{
			document.execCommand('underline', false, null);
		}
		if(document.queryCommandState("underline")){
			noteEditPanel.children[4].style["background-color"] = "#999999";
			underlineChanged = true;
		}else{
			noteEditPanel.children[4].style["background-color"] = "";
			underlineChanged = false;
		}
		saveSettings();
	},
	changeDepth = function changeDepth(){
		var leftMove = selectedNote.offsetLeft;
		leftMove = parseInt(leftMove)-1;
		selectedNote.style.left = leftMove+"px";
		selectedNote.style.top = selectedNote.offsetTop-10;
	},
	deleteNote = function deleteNote() {
		closeNoteId = closeNoteId.replace("close-note","")
		checkNoteCount("delete");	
		localStorage.removeItem(filename+"note-" + closeNoteId);
		if(NoteCount<=0){
			localStorage.clear();
			resetMainNote();
		};
		$("#" + closeNoteId).remove();
		
		var slideNotesStat = checkAllNotesInSlide();
		if(slideNotesStat == false){
			resetMainNote();
		}
	},
	saveNote = function saveNote() {
		changedHeight($(this).attr("id"));
		var that = $(this),  note = (that.hasClass("note-status") || that.hasClass("note-content")) ? that.parents('div.note'): that,
				obj = {
					id  : note.attr("id"),
					top : note.css("top"),
					left: note.css("left"),
					text: note.children(".note-content").html(),
					topColor:  topBanner.style.background,
					bgColor:  selectedNote.style.background,
					styleWidth: selectedNote.style.width,
					styleHeight: selectedNote.style.height,
					num: note.attr("spry:default"),
					noteHide:hideStatus}
		localStorage.setItem(filename+"note-" + obj.id, JSON.stringify(obj));	
	}
	function saveSettings(){
		obj = {	id:1001,
				noteHideStatus : hideStatus+"",
			   	checkSelectedNum : selectedNum,
				bc : boldChanged,
				ic : italicChanged,
				uc : underlineChanged,
				ccf : changedFontFamily,
				cfs : changedFontSize,
				cfc : changedFontColor};
		localStorage.setItem(filename+"settings-"+ obj.id, JSON.stringify(obj));
	}
	function forceSaveNote() {
		changedHeight($(this).attr("id"));
		var that = $(this),  note = (that.hasClass("note-status") || that.hasClass("note-content")) ? that.parents('div.note'): that,
				obj = {
					id  : note.attr("id"),
					top : note.css("top"),
					left: note.css("left"),
					text: note.children(".note-content").html(),
					topColor:  topBanner.style.background,
					bgColor:  selectedNote.style.background,
					styleWidth: selectedNote.style.width,
					styleHeight: selectedNote.style.height,
					num: note.attr("spry:default"),
					noteHide:hideStatus}
		localStorage.setItem(filename+"note-" + obj.id, JSON.stringify(obj));
	}
	
	function createColorPanel(){
		$('#bgColorPicker'+selectedNoteId).colorPicker({pickerDefault: "", colors: ["FFE869","BAFEC5","FEB6B4","CAFFFF","91D2FF","FFD9A1","FFFFFF","D4D4D4","CCCCFF","50F0B0"], transparency: true}); 
	};
	function createFontColorPanel(varstat){
		$('#bgFontColorPicker'+selectedNoteId).fontColorPicker({pickerDefault: varstat, colors: ["000000","003300","006600","009900","00CC00","00FF00","330000","333300","336600","339900","33CC00","33FF00","660000","663300","666600","669900","66CC00","66FF00",
"000033","003333","006633","009933","00CC33","00FF33","330033","333333","336633","339933","33CC33","33FF33","660033","663333","666633","669933","66CC33","66FF33",
"000066","003366","006666","009966","00CC66","00FF66","330066","333366","336666","339966","33CC66","33FF66","660066","663366","666666","669966","66CC66","66FF66",
"000099","003399","006699","009999","00CC99","00FF99","330099","333399","336699","339999","33CC99","33FF99","660099","663399","666699","669999","66CC99","66FF99",
"0000CC","0033CC","0066CC","0099CC","00CCCC","00FFCC","3300CC","3333CC","3366CC","3399CC","33CCCC","33FFCC","6600CC","6633CC","6666CC","6699CC","66CCCC","66FFCC",
"0000FF","0033FF","0066FF","0099FF","00CCFF","00FFFF","3300FF","3333FF","3366FF","3399FF","33CCFF","33FFFF","6600FF","6633FF","6666FF","6699FF","66CCFF","66FFFF",
"990000","993300","996600","999900","99CC00","99FF00","CC0000","CC3300","CC6600","CC9900","CCCC00","CCFF00","FF0000","FF3300","FF6600","FF9900","FFCC00","FFFF00",
"990033","993333","996633","999933","99CC33","99FF33","CC0033","CC3333","CC6633","CC9933","CCCC33","CCFF33","FF0033","FF3333","FF6633","FF9933","FFCC33","FFFF33",
"990066","993366","996666","999966","99CC66","99FF66","CC0066","CC3366","CC6666","CC9966","CCCC66","CCFF66","FF0066","FF3366","FF6666","FF9966","FFCC66","FFFF66",
"990099","993399","996699","999999","99CC99","99FF99","CC0099","CC3399","CC6699","CC9999","CCCC99","CCFF99","FF0099","FF3399","FF6699","FF9999","FFCC99","FFFF99",
"9900CC","9933CC","9966CC","9999CC","99CCCC","99FFCC","CC00CC","CC33CC","CC66CC","CC99CC","CCCCCC","CCFFCC","FF00CC","FF33CC","FF66CC","FF99CC","FFCCCC","FFFFCC",
"9900FF","9933FF","9966FF","9999FF","99CCFF","99FFFF","CC00FF","CC33FF","CC66FF","CC99FF","CCCCFF","CCFFFF","FF00FF","FF33FF","FF66FF","FF99FF","FFCCFF","FFFFFF"], transparency: true}); 
	};
	markUnsaved = function markUnsaved() {
		var that = $(this), note = that.hasClass("note-content") ? that.parents("div.note") : that;
	};
	function checkNoteCount(varStat){
		if(varStat == "add"){
			NoteCount++;
		}else{
			NoteCount--;
		}
	};
	function NoteReady(varStat){
		selectedNoteId = varStat;
		var parentiframe = lCurrentWidgetIframe.children[0].children[0];
		createColorPanel();
		if(noteEditPanel){
			prevEditPanel = noteEditPanel;	
			prevEditPanel.style.visibility = "hidden";
		}
		if(parentiframe.contentDocument.getElementById(varStat)!=null){
			selectedNote = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(varStat)
			topBanner = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("note-header"+varStat)
			selectedNoteText = selectedNote.childNodes[1]
			selectedNoteText.style.height = selectedNote.offsetHeight-80+"px";
			selectedNoteText.style.width = selectedNote.offsetWidth-30+"px";
			noteEditPanel = selectedNote.children[2];
			closeNotePanel = selectedNote.children[3]
			createFontColorPanel("000000");
			
			addNote = topBanner.children[0];

			if(!showOnlySlideNotes){
				addNote.style.visibility = "hidden";
			}
			
			topBanner.style.background = topBannerColor;
			selectedNote.style.background = noteBgColor;
			
			savedBgColor = noteBgColor;
			savedTopColor = topBannerColor;
			
			selectedNote.style.width = savedStyleWidth;
			selectedNote.style.height = savedStyleHeight;
			
			changedHeight(varStat);
			
			$('#'+noteEditPanel.children[0].id).change(function() {
				document.execCommand('fontname', false, $(this).val()+"");
				changedFontFamily = $(this).val()+"";
				saveSettings();
			});
			$('#'+noteEditPanel.children[1].id).change(function() {
				document.execCommand('fontsize', false, $(this).val());
				if($(this).val() == 2){
					changedFontSize ="small"
				}else if($(this).val() == 3){
					changedFontSize ="medium"
				}else if($(this).val() == 4){
					changedFontSize ="large"
				};
				saveSettings();
			});
		
		}
		selectedNote.style.zIndex = zIndexCount++;
		changeformats();
		showSlideN();
		saveNote;
	}		
	
	function changeformats(){
		if(italicChanged){
			selectedNoteText.innerHTML = "<i>"+selectedNoteText.innerHTML+"</i>"
		}
		if(boldChanged){
			selectedNoteText.innerHTML = "<b>"+selectedNoteText.innerHTML+"</b>"
		}
		if(underlineChanged){
			selectedNoteText.innerHTML = "<u>"+selectedNoteText.innerHTML+"</u>"
		}
		if(changedFontFamily){
			selectedNoteText.innerHTML = '<font face="'+changedFontFamily+'">'+selectedNoteText.innerHTML+"</font>"
		}else{
			selectedNoteText.innerHTML = '<font face="Verdana">'+selectedNoteText.innerHTML+"</font>"
		}
		if(changedFontSize){
			selectedNoteText.innerHTML = '<font size="'+changedFontSize+'">'+selectedNoteText.innerHTML+"</font>"
		}else{
			selectedNoteText.innerHTML = '<font size="medium">'+selectedNoteText.innerHTML+"</font>"
		}
		if(changedFontColor){
			selectedNoteText.innerHTML = '<font color="'+changedFontColor+'">'+selectedNoteText.innerHTML+"</font>"
		}else{
			selectedNoteText.innerHTML = '<font color="#000000">'+selectedNoteText.innerHTML+"</font>"
		}
	}
	function hideTitle() {  
    	old_title = $(this).attr('title');      
    	$(this).attr('title',''); 
    }
    function showTitle() {  
        $(this).attr('title', old_title);  
    }  
	function setFocus(varStat){
		if(noteEditPanel){
			prevEditPanel = noteEditPanel;	
		}
		selectedNoteId = varStat;
		var parentiframe = lCurrentWidgetIframe.children[0].children[0];
		if(parentiframe.contentDocument.getElementById(varStat)!=null){
			selectedNote = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(varStat)
			topBanner = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("note-header"+varStat)
			selectedNoteText = selectedNote.childNodes[1]
			selectedNoteText.style.height = selectedNote.offsetHeight-80+"px";
			selectedNoteText.style.width = selectedNote.offsetWidth-30+"px";
			noteEditPanel = selectedNote.children[2];
			closeNotePanel = selectedNote.children[3];
		}
		if(prevEditPanel != noteEditPanel){
			clearAllSelections();
			prevEditPanel.style.visibility = "hidden";
		}
	}
	
	function clearAllSelections(){
		if (window.getSelection) {
		  if (window.getSelection().empty) {  // Chrome
			window.getSelection().empty();
		  } else if (window.getSelection().removeAllRanges) {  // Firefox
			window.getSelection().removeAllRanges();
		  }
		} else if (document.selection) {  // IE?
		  	document.selection.empty();
		}
	}
	function addNewNote(){
		if(closeNotePanel.style.visibility == "visible"){
			return false;
		}else{
			createNote()
		}
	}
	function exitSetup(id){
		closeNoteId =  id;
		clearAllSelections();
		noteEditPanel.style.visibility = "hidden";
		closeNotePanel.style.visibility = "visible"; 
		notePanelVisible = false;
		formatVisible = false;
		if(selectedNote.style.width!=""){
			setCloseLeft = selectedNote.style.width.replace("px","")
			closePanelWidth = closeNotePanel.style.width.replace("px","")
			setCloseLeft = (setCloseLeft / 2) - (270/2);
			closeNotePanel.style.left = setCloseLeft+"px"
		}
		$('#'+selectedNoteId).removeProp("selectable")
		$('#'+selectedNoteId).resizable( 'disable' )
		$('#'+selectedNoteId).draggable( 'disable' )
		
		selectedNote.style["-ms-user-select"] = "none";
		selectedNote.style["user-select"] = "none";
		selectedNote.style["-webkit-touch-callout"] = "none";
		selectedNote.style["-webkit-user-select"] = "none";

		selectedNote.style["khtml-user-select"] = "none";
		selectedNote.style["-moz-user-select"] = "none";

		if(typeof selectedNote.onselectstart != 'undefined'){
			selectedNote.onselectstart = function (){return false;};
		} else if (typeof selectedNote.style.MozUserSelect != 'undefined') {
            selectedNote.style.MozUserSelect = 'none';
        } else {
            selectedNote.onmousedown = function() { return false; };
        }
		
		$('#bgColorPicker' + selectedNoteId).prop('disabled',true)
		$('.colorPicker-palette').hide()
		
		selectedNote.style.opacity = 1;	
		topBanner.style.opacity = 1;	
		addNote.style.opacity = 1;	
		
		topBanner.children[0].style.opacity = 1;	
		selectedNote.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		selectedNote.style["filter"] =  "alpha(opacity=100)";

		addNote.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		addNote.style["filter"] =  "alpha(opacity=100)";
		addNote.style.color ="#000000"
		
		topBanner.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		topBanner.style["filter"] =  "alpha(opacity=100)";
	}
	function clearExit() {
		$('#'+selectedNoteId).resizable( 'enable' )
		$('#'+selectedNoteId).draggable( 'enable' ) 
		selectedNote.style["-webkit-touch-callout"] = "text";
		selectedNote.style["-webkit-user-select"] = "text";
		selectedNote.style["khtml-user-select"] = "text";
		selectedNote.style["-moz-user-select"] = "text";
		selectedNote.style["-ms-user-select"] = "text";
		selectedNote.style["user-select"] = "text";
		
		$('#bgColorPicker' + selectedNoteId).prop('disabled',false)
		
		if(typeof selectedNote.onselectstart != 'undefined'){
			selectedNote.onselectstart = function (){return true;};
		} else if (typeof selectedNote.style.MozUserSelect != 'undefined') {
            selectedNote.style.MozUserSelect = 'text';
        } else {
            selectedNote.onmousedown = function() { return true; };
        }
		
		closeNotePanel.style.visibility = "hidden"; 
	}
	
	function checkFormatPanel(e){

		isBold = document.queryCommandState("bold");
		isItalic = document.queryCommandState("Italic");
		isUnderlined = document.queryCommandState("underline");
		fontType = document.queryCommandValue("FontName");
		fontSize = document.queryCommandValue("FontSize");
		fontColor = document.queryCommandValue("ForeColor");
		
		if(isBold){
			noteEditPanel.children[2].style["background-color"] = "#999999";
		}else{
			noteEditPanel.children[2].style["background-color"] = "";
		}
		if(isItalic){
			noteEditPanel.children[3].style["background-color"] = "#999999";
		}else{
			noteEditPanel.children[3].style["background-color"] = "";
		}
		if(isUnderlined){
			noteEditPanel.children[4].style["background-color"] = "#999999";
		}else{
			noteEditPanel.children[4].style["background-color"] = "";
		}
		
		
		
		if(browser=="Microsoft Internet Explorer"){
			fontColor = toColor(fontColor)
			noteEditPanel.children[5].style["background-color"] = fontColor;
			noteEditPanel.children[6].style["background-color"] = fontColor;
			if(noteEditPanel.style.visibility == "hidden"){
				for(i=0;i<3;i++){
					if(noteEditPanel.children[0].children[i].value == fontType){
						noteEditPanel.children[0].children[i].selected = true;
					}
					if(noteEditPanel.children[1].children[i].value == fontSize){
						noteEditPanel.children[1].children[i].selected = true;
					}
				}
			}
		}else{
			noteEditPanel.children[5].style["background-color"] = fontColor;
			noteEditPanel.children[6].style["background-color"] = fontColor;
			for(i=0;i<3;i++){
			if(noteEditPanel.children[0].children[i].value == fontType){
				noteEditPanel.children[0].children[i].selected = true;
			}
			if(noteEditPanel.children[1].children[i].value == fontSize){
				noteEditPanel.children[1].children[i].selected = true;
			}
		}
		}
	}
	function toColor( input ) {
		if( typeof input != "number" ) {
			return input;
		}
	
		return "rgb(" + (input & 0xFF) + ", " +
						((input & 0xFF00) >> 8) + ", " +
						((input & 0xFF0000) >> 16 ) + ")";
	}
	
	function checkSelection(e,varstat){
		
		var moveX =0;
		var moveY =0;
		try{
			selectedText = NoteObject.Selector.getSelected().toString();
			
			if(varstat=="mouse"){
				notesCurX = document.getElementById(selectedNoteId).style.left;
				notesCurX = notesCurX.replace("px", "");
				moveX = (e.pageX - parseInt(notesCurX));
				
				notesCurY = document.getElementById(selectedNoteId).style.top;
				notesCurY = notesCurY.replace("px", "");
				var noteHeight = document.getElementById(selectedNoteId).style.height.replace("px","")
				if(!noteHeight){
					moveY = e.pageY - (parseInt(notesCurY)+270);
				}else{
					moveY = e.pageY - (parseInt(notesCurY)+parseInt(noteHeight)+50);
				}
				if(selectedText.length==0){
				try{
					noteEditPanel.style.visibility = "hidden";
					notePanelVisible = false;
					formatVisible = false;
					noteEditPanel.style.left = "0px"
					noteEditPanel.style.top = "0px"
				 }catch(err){
				 }
				}else{
					try{
						if(noteEditPanel.style.visibility == "hidden"){
							noteEditPanel.style.left = moveX+"px";
							noteEditPanel.style.top = moveY+"px";
						}
						if(closeNotePanel.style.visibility != "visible"){
							if(!is_touch_device){
								if(!formatVisible){
									noteEditPanel.style.visibility = "visible";
									formatVisible = true;
								}
							}
						}
				 }catch(err){
				 }
				}
			}else if(varstat=="key"){
				noteEditPanel.style.left = "50px";
				noteEditPanel.style.top = "-150px";
				
					if(selectedText.length==0){
					try{
						noteEditPanel.style.visibility = "hidden";
						formatVisible = false;
					 }catch(err){
					 }
					}else{
						try{
							if(!is_touch_device){
								if(!formatVisible){
									noteEditPanel.style.visibility = "visible";
									formatVisible = true;
								}
							}
						 }catch(err){
						}
					}
			}
			checkFormatPanel(e)
		}catch(err){
		}
	}
	hidePanels = function hidePanels(){
		noteEditPanel.style.visibility = "hidden";
		closeNotePanel.style.visibility = "hidden"; 
		
		notePanelVisible = false;
		formatVisible = false;
	}
	showPanels = function showPanels(){
		notePanelVisible = true;
		formatVisible = true;
	}
	function checkSlideNotes(){
		var checkNotes = false;
		var allNotes = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("NotesContainer")
		if(allNotes.children.length!=0){
			if (showOnlySlideNotes) {
				for(i=0;i<allNotes.children.length;i++){
					var tempMovie = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(allNotes.children[i].id);
					var tempCurSlide = JSON.stringify(currentSlide)
					var tempInt = parseInt($(tempMovie).attr("spry:default"));
					if(tempInt ==  currentSlide){
						checkNotes = true;
					}
				}
			}else{
				checkNotes = true;
			}
		}
		return checkNotes;
	}
	
	checkAllNotesInSlide = function checkAllNotesInSlide(){
		var stat =  false;
		var allNotes = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("NotesContainer")
		if(allNotes.children.length!=0){
			for(i=0;i<allNotes.children.length;i++){
				var tempMovie = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(allNotes.children[i].id);
				var tempCurSlide = JSON.stringify(currentSlide)
				var tempInt = parseInt($(tempMovie).attr("spry:default"));
				if(tempInt ==  currentSlide){
					stat = true;
				}
			}
		}else{
			stat = false;
		}
		return stat;
	}
	
	
	
	showSlideNotes = function showSlideNotes(){
		openTheIFrame();
		$('.colorPicker-palette').hide()
		var allNotes = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("NotesContainer")
		if(allNotes.children.length!=0){
			for(i=0;i<allNotes.children.length;i++){
				var tempMovie = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(allNotes.children[i].id);
				var tempCurSlide = JSON.stringify(currentSlide)
				var tempInt = parseInt($(tempMovie).attr("spry:default"));
				if(tempInt ==  currentSlide){
					tempMovie.style.visibility = "visible";
				}else{
					tempMovie.style.visibility = "hidden";
				}
				if(inPreviewMode && isResizeing){
					var tempProjWidth = parseInt(projectWidth.replace("px", ""));
					var tempProjHeight = parseInt(projectHeight.replace("px", ""));
					
					var tempMoviestyleleft = parseInt(tempMovie.style.left.replace("px", ""));
					var tempMoviestyletop = parseInt(tempMovie.style.top.replace("px", ""));
					var tempMoviestylewidth = parseInt(tempMovie.style.width.replace("px", ""));
					var tempMoviestyleheight = parseInt(tempMovie.style.height.replace("px", ""));
					
					if(tempProjWidth<=360){
						tempMovie.style.width = 200+"px"
						tempMovie.style.height = 200+"px"
					}else{
						tempMovie.style.width = 300+"px"
						tempMovie.style.height = 300+"px"
					}
					if(tempMoviestyletop>(tempProjHeight-tempMoviestyleheight)){
						tempMovie.style.top = (tempProjHeight/4)+"px"
					}
					
					if(tempMoviestyleleft>(tempProjWidth-tempMoviestylewidth)){
						tempMovie.style.left = (tempProjWidth/3)+"px"
					}
				
				}
				setFocus(tempMovie.id)
			}
		}
		
		selectedNum = "1";
		hideStatus = "false";
	}
	function showNotes(){
		//console.log("show all notes")
    	openTheIFrame();
		$('.colorPicker-palette').hide()
		var allNotes = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("NotesContainer")
		if(allNotes.children.length!=0){
			for(i=0;i<allNotes.children.length;i++){
				var tempMovie = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(allNotes.children[i].id);
				tempMovie.style.visibility = "visible";
				if(inPreviewMode && isResizeing){
					var tempWidth = tempMovie.style.left.replace("px", "");
					var tempProjWidth = parseInt(projectWidth.replace("px", ""));
					var tempProjHeight = parseInt(projectHeight.replace("px", ""));
					
					var tempMoviestyleleft = parseInt(tempMovie.style.left.replace("px", ""));
					var tempMoviestyletop = parseInt(tempMovie.style.top.replace("px", ""));
					var tempMoviestylewidth = parseInt(tempMovie.style.width.replace("px", ""));
					var tempMoviestyleheight = parseInt(tempMovie.style.height.replace("px", ""));
					
					if(tempProjWidth<=360){
						tempMovie.style.width = 200+"px"
						tempMovie.style.height = 200+"px"
					}else{
						tempMovie.style.width = 300+"px"
						tempMovie.style.height = 300+"px"
					}
					if(tempMoviestyletop>(tempProjHeight-tempMoviestyleheight)){
						tempMovie.style.top = (tempProjHeight/4)+"px"
					}
					
					if(tempMoviestyleleft>(tempProjWidth-tempMoviestylewidth)){
						tempMovie.style.left = (tempProjWidth/3)+"px"
					}
				}
				setFocus(tempMovie.id)
			}
		}
		selectedNum = "2";
		hideStatus = "false";
	}
	hideAllNotes = function hideAllNotes(){
		closeTheIFrame();
		setTimeout(function(){lCurrentWidgetIframe.parentElement.style.top = iframeTop;lCurrentWidgetIframe.parentElement.style.left = iframeLeft;},55);
	
		var allNotes = NoteWidgetClass.children[0].children[0].contentDocument.getElementById("NotesContainer")
		if(allNotes.children.length!=0){
			for(i=0;i<allNotes.children.length;i++){
				var tempMovie = NoteWidgetClass.children[0].children[0].contentDocument.getElementById(allNotes.children[i].id);
				var tempCurSlide = JSON.stringify(currentSlide)
				var tempInt = parseInt($(tempMovie).attr("spry:default"));
				tempMovie.style.visibility = "hidden";
			}
		}
		selectedNum = "0";
		hideStatus = "true";
		
	}
	
	function getFileName(){
		if(storeDefault){
			loc= window.location.pathname;
			filename= loc.substring(0, loc.indexOf('/w',1));
			filename = filename.replace(/\//g,"");
		}else{
			filename = storageLocation;
		}
	}
	function printDiv(divID) {
		var divElements = document.getElementById(divID).innerHTML;
        var newwindow = window.open('', divID, 'height=750,width=750');
		newwindow.document.body.innerHTML = "<html><head><title></title></head><body>" + divElements + "</body>";
        newwindow.print();
        newwindow.close();
        return true;
    }
	function saveDiv(divID) {
			var divElements = document.getElementById(divID).innerHTML;
			var newwindow = window.open('', divID, 'height=750,width=750');
			newwindow.document.body.innerHTML = "<html><head><title></title></head><body>" + divElements + "</body>";
		
			var textToWrite = document.getElementById(divID).innerText;
			var textFileAsBlob = new Blob([textToWrite], {type:'doc'});
			var fileNameToSaveAs =  "Slide_"+currentSlide+"_"+divID+".doc";
			
			
			var downloadLink = newwindow.document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			var IDevices = ( navigator.platform.match(/(iPad|iPhone)/g) ? true : false );
			if(IDevices){
					// IPAD requires the link to be added to the DOM
					// before it can be clicked.
					downloadLink.href = newwindow.URL.createObjectURL(textFileAsBlob);
					downloadLink.onclick = destroyClickedElement;
					downloadLink.style.display = "none";
					newwindow.document.body.insertBefore(newRadioButton)
					//newwindow.document.body.appendChild(downloadLink);
			}else{
				if (newwindow.webkitURL != null){
					// Chrome allows the link to be clicked
					// without actually adding it to the DOM.
					downloadLink.href = newwindow.webkitURL.createObjectURL(textFileAsBlob);
				}else{
					// Firefox requires the link to be added to the DOM
					// before it can be clicked.
					downloadLink.href = newwindow.URL.createObjectURL(textFileAsBlob);
					downloadLink.onclick = destroyClickedElement;
					downloadLink.style.display = "none";



					newwindow.document.body.insertBefore(newRadioButton)
					//newwindow.document.body.appendChild(downloadLink);
				}
			}
		downloadLink.click();
        return true;
    }
	
	function openTheIFrame(){
		lCurrentWidgetIframe.parentElement.style.width = projectWidth;
		lCurrentWidgetIframe.parentElement.style.height = projectHeight
		lCurrentWidgetIframe.parentElement.style.left = "0px";
		lCurrentWidgetIframe.parentElement.style.top = "0px";
		
		lCurrentWidgetIframe.style.width = projectWidth;
		lCurrentWidgetIframe.style.height = projectHeight; 
		lCurrentWidgetIframe.style.left = "0px";
		lCurrentWidgetIframe.style.top = "0px";
		
		myWidgetiFrame.style.width = projectWidth;
		myWidgetiFrame.style.height = projectHeight;
		
		canvas.parentElement.style.left = iframeLeft;
		var tempProjWidth = parseInt(projectWidth.replace("px", ""));
		if(tempProjWidth<=360){
			var tempiframeTop = parseInt(iframeTop.replace("px", ""))-20;
			canvas.parentElement.style.top =  tempiframeTop+"px";
		}else{
			canvas.parentElement.style.top =  iframeTop;
		}
	}
	
	function closeTheIFrame(){
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
	
	function saveTextAsFile(){
	}

	
	NoteObject = {};
	
	NoteObject.Selector = {};
	NoteObject.Selector.getSelected = function(){
	  var t = '';
	  if(window.getSelection){
		t = window.getSelection();
	  }else if(document.getSelection){
		t = document.getSelection();
	  }else if(document.selection){
		t = document.selection.createRange().text;
	  }
	  return t;
	}
	NoteObject.Selector.mousemove = function(e){
		if(noteEditPanel){
			checkFormatPanel(e)
		}
		if(!notePanelVisible){
			checkSelection(e,"mouse");
		}
	}
	NoteObject.Selector.mousedown = function(e){
		mainPageX = e.pageX
		mainPageY = e.pageY
		selectedDIVClass = e.target.className;
		if(selectedNote){
		selectedNote.style["z-index"] = zIndexCount++;
		}
		switch (event.which) {
        case 1:
            //('Left mouse button pressed');
            break;
        case 2:
            //('Middle mouse button pressed');
            break;
        case 3:
            //('Right mouse button pressed');
			$.fn.colorPicker.hidePalette();
			$.fn.fontColorPicker.hidePalette();
            break;
        default:
            //('You have a strange mouse');
    }
	}
	
	NoteObject.Selector.mouseup = function(e){
	try{	
	  var str = e.target.parentElement.id+"";
	  str = str.replace("NoteText", "");
	  str = str.replace("note-header", "");
	  str = str.replace("bgColorPicker", "");
	  str = str.replace("dropDownSize", "");
	  str = str.replace("dropDown", "");
	  str = str.replace("editpanel", "");
	  str = str.replace("bgColorPicker", "");
	  str = str.replace("bgFontColorPicker", "");
	  str = str.replace("fontColorPicker_palette-", "");
	  
	  var tempInt = parseInt(str);
	  
	  if(tempInt){
		  setFocus(str)
		  selectedText = NoteObject.Selector.getSelected().toString();
		  if(selectedText.length > 0){
				checkFormatPanel(e);
		  }else{
			try{
	  			noteEditPanel.style.visibility = "hidden";
				notePanelVisible = false;
				formatVisible = false;
			}catch(Error){
				
			}
		  }
	  }
	}catch(err){
	}
	}
		
	 NoteObject.Selector.mouseover =  function(e){
	   try{	
			  var str = e.target.parentElement.id+"";
			  str = str.replace("NoteText", "");
			  str = str.replace("note-header", "");
			  str = str.replace("bgColorPicker", "");
			  str = str.replace("dropDownSize", "");
			  str = str.replace("dropDown", "");
			  str = str.replace("editpanel", "");
			  str = str.replace("bgColorPicker", "");
			  str = str.replace("bgFontColorPicker", "");
			  str = str.replace("fontColorPicker_palette-", "");
			  
			  var tempInt = parseInt(str);
			  if(tempInt){
				  setFocus(str)
				  selectedText = NoteObject.Selector.getSelected().toString();
				  if(selectedText.length > 0){
					  if(!notePanelVisible){
						checkFormatPanel(e);
					  }
				  }else{
					try{
						noteEditPanel.style.visibility = "hidden";
						notePanelVisible = false;
						formatVisible = false;
					}catch(Error){
					}
				  }
			  }
		}catch(err){
		}
	  };
	$(document).ready(function(){
	  $(document).designMode = "on";
	  $(document).bind("mouseup", NoteObject.Selector.mouseup);
	  $(document).bind("mousemove", NoteObject.Selector.mousemove);
	  $(document).bind("dblclick", NoteObject.Selector.mousemove);
	  $(document).bind("mousedown", NoteObject.Selector.mousedown);
	  $(document).bind("mouseover", NoteObject.Selector.mouseover);
	  $(document).bind("mouseout", NoteObject.Selector.mouseout);
	  
	  browser = navigator.appName;
	});
	$(document).keyup(function (e) {
		if(e.which == 65 && isCtrl == true) {
			checkSelection(e,"key")
			//return false;
		}
		if(e.which == 37 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 38 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 39 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 40 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}
		if(e.which == 17) isCtrl=false;
		if(e.which == 16) isShift=false;
	}).keydown(function (e) {
		if(noteEditPanel){
			noteEditPanel.style.visibility = "hidden";
			notePanelVisible = false;
			formatVisible = false;
		}
		if(e.which == 17) isCtrl=true;
		if(e.which == 16) isShift=true;
		if(e.which == 65 && isCtrl == true) {
			checkSelection(e,"key")
			//return false;
		}
		if(e.which == 37 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 38 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 39 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}else if(e.which == 40 && isShift == true) {
			checkSelection(e,"key")
			//return false;
		}
	});

	return {
		getFile : getFileName,
		open   	: openNotes,
		init   	: initNotes,
		"new"  	: createNote,
		remove 	: deleteNote,
		hideNo	: hideAllNotes,
		showSli	: showSlideNotes,
		showAll	: showNotes,
		showAllDef: openTheIFrame,
		save	: saveNote,
		hidden	: function(){return hideStatus},
		slNum	: function(){return selectedNum},
		hidePanel: hidePanels,
		checkSlideNote:checkSlideNotes,
		checkAllNotes:checkAllNotesInSlide,
		saveSet : saveSettings,
		noteCount: function (){return NoteCount}
	};
}());
