function updateAmplitude(){
	var id = '#amplitude';
	if($.isNumeric($(id).val())){
		amplitude = $(id).val();
	} else {
		$(id).val(100);
		amplitude = $(id).val();
	}
	resetSpeak();
}

function updateWordgap(){
	var id = '#wordgap';
	if($.isNumeric($(id).val())){
		wordgap = $(id).val();
	} else {
		$(id).val(0);
		wordgap = $(id).val();
	}
	resetSpeak();
}

function updatePitch(){
	var id = '#pitch';
	if($.isNumeric($(id).val())){
		pitch = $(id).val();
	} else {
		$(id).val(20);
		pitch = $(id).val();
	}
	resetSpeak();
}

function updateSpeed(){
	var id = '#speed';
	if($.isNumeric($(id).val())){
		speed = $(id).val();
	} else {
		$(id).val(115);
		speed = $(id).val();
	}
	resetSpeak();
}

function resetSpeak(){
	stop = true;
	meSpeak.stop();
	stop = false;
	speakWholeText(rawToSpeak);
}

function speakWholeText(txt){
	var words = txt.split(/[\,\.\:\(\)\;\!\-\?]+/);

    function speakNext() {
      if (words.length) {
        var word = words.shift();
        replaceWord(word,"_0_");
  	  speak(word.replace(/[\s\,\;\)\(\:\-]+/,'').toLowerCase().trim().replace('ĝ','gx'),speakNext);  
      }
    }

    speakNext(); 
}

function speak(text,next){
	if(!stop){
   	 	meSpeak.speak(text, {
         	amplitude: amplitude,
          	wordgap: wordgap,
          	pitch: pitch,
   		   	speed: speed
   		},next);
		
	  setTimeout(function(){$('#code').html(rawToSpeak)},speed * 10);
	  
	} else {
		return 0;
	}
}

function loadSpeakConfiguration(){
	
	meSpeak.loadConfig("js/third-party/mespeak_config.json");
	
	if(learningCode != 'en'){
		meSpeak.loadVoice("js/third-party/voices/"+learningCode+".json");
	} else {
		meSpeak.loadVoice("js/third-party/voices/en/en.json");
	}
}

