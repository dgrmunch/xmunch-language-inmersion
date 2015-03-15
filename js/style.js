function replaceWord(word,type){
    var html = $('#code').html();
    var regexp = new RegExp(word, 'gi');
    $('#code').html(html.replace(regexp, '<span class="'+type+'">$&</span>'));
}
