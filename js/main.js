$(document).ready(function(){
	
	$(document).bind("mouseup", Kolich.Selector.mouseup);
	
	//Save a 'backup' of the raw text contained in 'code'
	updateRawVariables();
	
	//Load speak configuration
    loadSpeakConfiguration();
	
	//Setup main texts
    $("#meanings").html(text8);
    $("#sounds").html(text9);
    $("#edit").html(text10);
    $("#save").html(text11);
    $("#stop").html(text12);
	$('#amplitude').attr("placeholder",text13);
	$('#wordgap').attr("placeholder",text14);
	$('#pitch').attr("placeholder",text15);
	$('#speed').attr("placeholder",text16);
	
	// -------------------------------------------------------------------
	// ------------------------- Add listeners ---------------------------
	// -------------------------------------------------------------------
	
	// ********************************************************************
	// Marker: This box highlight any char sequence which matches its input
	// ********************************************************************
	document.getElementById('marker').addEventListener("input",function(){markerFunction();}, false);
 
	// ***********************************************************************
	// Searcher1: This box translate any English word  to Esperanto (on change)
	// **********************************************************************
	$('#searcher1').change(function(){searcher1Function();});
	
	// ***********************************************************************
	// Searcher2: This box translate any Esperanto word  to English (on change)
	// **********************************************************************
	$('#searcher2').change(function(){searcher2Function();});

	// ***********************************************************************
	// Meanings: allows Esperanto to English translations (clicking on each word)
	// **********************************************************************
	$("#meanings").click(function(){meaningsFunctions();});
	 
	// ***********************************************************************
	// Sounds: allows pronounciation of the text and disable buttons
	// **********************************************************************
	$("#sounds").click(function(){soundsFunction();});
	$('#wordgap').change(function(){updateWordgap();});
	$('#amplitude').change(function(){updateAmplitude();});
	$('#pitch').change(function(){updatePitch();});
	$('#speed').change(function(){updateSpeed();});
	
	// ***********************************************************************
	// Stop: it stops pronounciation of the text and re-enable buttons
	// **********************************************************************
	$("#stop").click(function(){stopFunction();});
	
	// ***********************************************************************
	// Edit & Save: allow text edition
	// **********************************************************************
	$("#edit").click(function(){editCode();});
	$("#save").click(function(){saveCode();});
    
 });


function clean(text){
	return text.replace(BR,'').replace(BR,'');
}

function updateRawVariables(){
	raw = $('#code').html();
	rawToSpeak = $('#code').html();
	
	 for(i=0;i<charsList.length;i++){
   	  	rawToSpeak = rawToSpeak.replace(charsList[i].char,charsList[i].replacement);  	
	}
}
