function markerFunction(){
	$('#code').html(raw);
	replaceWord($('#marker').val(),"_0_");
}

function searcher1Function(){
	translateFromKnown($('#searcher1').val()); 	
	$('#searcher1').val('');
}

function searcher2Function(){
	translateFromLearning($('#searcher2').val()); 	
	$('#searcher2').val('');
}

function meaningsFunctions(){
	 var splitted = translatize(raw);
	 $('#code').html(splitted);
}

function stopFunction(){
	stop = true;
	$('#stop').addClass('hidden');
	$('#meanings').removeClass('hidden');
	$('#sounds').removeClass('hidden');
	$('.small').addClass('hidden');
	$('#save').addClass('hidden');
	$('#edit').removeClass('hidden');
	meSpeak.stop();
	$('#code').html(raw);
}

function soundsFunction(){
	stop = false;
	$('#stop').removeClass('hidden');
	$('#meanings').addClass('hidden');
	$('#edit').addClass('hidden');
	$('#sounds').addClass('hidden');
	$('.small').removeClass('hidden');
	$('#save').addClass('hidden');
	$('#edit').addClass('hidden');
	speakWholeText(rawToSpeak);
}

function editCode(){
	$('#code').html(raw);
	$('#meanings').addClass('hidden');
	$('#sounds').addClass('hidden');
	$('#edit').addClass('hidden');
	$('#save').removeClass('hidden');
	$('#code').attr('contenteditable','true');
}

function saveCode(){
	$('#meanings').removeClass('hidden');
	$('#sounds').removeClass('hidden');
	$('#save').addClass('hidden');
	$('#edit').removeClass('hidden');
	$('#code').attr('contenteditable','false');
	updateRawVariables();	
}
	
	