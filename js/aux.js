function jsonpAjax(url){
 	$.ajax({
		url: url,
		type: "POST",
		dataType: "jsonp",
		jsonpCallback: "localJsonpCallback"
   });
}

function statusWord(word){
	console.log(word);
}