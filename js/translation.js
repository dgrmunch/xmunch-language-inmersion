function translateFromKnown(word){
	googleString = knownCode+'#'+knownCode+'/'+learningCode+'/'+word;
	$('#log').html(SEARCHED_WORD_OPENER + word + SEARCHED_WORD_CLOSER);
	jsonpAjax(trovi + word + CALLBACK);					   
}

function translateFromLearning(word){
	googleString = learningCode+'#'+learningCode+'/'+knownCode+'/'+word;
	$('#log').html(SEARCHED_WORD_OPENER + word + SEARCHED_WORD_CLOSER);
	jsonpAjax(vorto + word + CALLBACK);			   
}

function publish(word){
	$('#log').html(word);
}

function localJsonpCallback(response) {
	if(response.Error || response.tuc == null){
		$('#log').html(NOT_FOUND);
	} else {
		translationResponseToHTML(response);
	}
}

function translationResponseToHTML(response){
	list = EMPTY_LIST;
	list.length = 0;

	var translatedWord = MEANINGS_HEADER + UL_OPENER;

    $.each(response.tuc, function (key, value) {
		
		if(value.meanings == null){
			
			if(!~list.indexOf(response.tuc[0].phrase.text.trim())){
				
				list[list.length] = response.tuc[0].phrase.text.trim();
				translatedWord += LI_OPENER + list[list.length - 1] + LI_CLOSER; 
				
			}
		
		} else if(!~list.indexOf(value.meanings[0].text.trim())){
			  
			  list[list.length] = value.meanings[0].text.trim(); 
			  translatedWord += LI_OPENER +  value.meanings[0].text.trim() + LI_CLOSER;
			
		  
		} 
		
 	});
	
 	$('#log').html($('#log').html() + JUMP + translatedWord + UL_CLOSER + FINAL_NOTE_1 + googleString + FINAL_NOTE_2); 
}

function translatize(plainText){
    words = plainText.split(/[\s]+/);
    var splitted = '';
	
    $.each(words, function (key, value) {
		known = false;
		splitted += morpho(value,key);
   
   		if(!known){
	 		var toTranslate = removeEndingsForTranslation(value.replace(/[\s\,\.\;\)\(\:\-\n]+/,'').toLowerCase().trim()); 
   	 		splitted += '<a id="word-'+key+'" onclick="'+TRANSLATION_METHOD+'(\''+toTranslate+'\')"> ' + value + ' </a>';
   		}
 
	});
	
	return splitted;
}

function removeEndingsForTranslation(cleanWord){

	if(learningCode == 'eo'){
		var lastChar = cleanWord.charAt(cleanWord.length - 1);

		if(lastChar == 'n'){
			cleanWord = cleanWord.substring(0, cleanWord.length-1);
			lastChar = cleanWord.charAt(cleanWord.length - 1);
		}

		if(lastChar == 'j'){
			cleanWord = cleanWord.substring(0, cleanWord.length-1);
		}

	}
	
	return cleanWord;

}

function processSelection(text){
	var formatedText = '' + text;
	formatedText = formatedText.replace(/\s/g,"%20")
	googleString = learningCode+'#'+learningCode+'/'+knownCode+'/'+ formatedText;
	$('#log').html('<br><b> ' + text6 + ' </b><br><br>'+text+ '<br><br><b>'+text7+'</b><br>' + GT_1 + googleString + GT_2);
	document.getSelection().removeAllRanges();
	
}

function morphoLink(key,value,translation,classId){
	return '<a id="word-'+key+'" class="_'+classId+'_" onclick="publish(\''+translation+'\')"> ' + value + ' </a>';
}

function morpho(value,key){
	
	var knownWord = '';
	
	if(learningCode == 'eo'){
		
			var cleanWord = value.replace(/[\s\,\.\;\)\(\:\-\n]+/,'').toLowerCase().trim();
	
			for(i=0;i<personalPronounsList.length;i++){
	  				if(personalPronounsList[i].word == cleanWord && !known){
			 		  	
						knownWord = morphoLink(key,value,personalPronounsList[i].translation,1);
			   			known = true;
					}
			}
		   
	 
		for(i=0;i<connectorsList.length;i++){
			
			if(connectorsList[i].word == cleanWord && !known){	
				knownWord = morphoLink(key,value,connectorsList[i].translation,2);
				known = true;
			}
		}
			
		//TODO: NUMBERS
	
		//TODO: PREPOSITIONS
	
		//TODO: ADVERBS
	
		//TODO: CORRELATIVES
	
}
	   
	return knownWord;
}
