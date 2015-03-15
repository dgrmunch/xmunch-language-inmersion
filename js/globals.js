// ------------
// Configuration
// ------------

var knownCode 		=	'es';
var learningCode 	= 	'eo';

var text1			=	'Palabra buscada:';
var text2			=	'No encontrado';
var text3			=	'Posibles significados:';
var text4			=	'Pincha aquí para usar GT en una ventana nueva.';
var text5			=	'Pincha aqui.';
var text6			=	'Has seleccionado este texto:';
var text7			=	'¿Deseas traducirlo?';
var text8			=	'Traducir';
var text9			=	'Escuchar';
var text10			=	'Editar';
var text11			=	'Guardar cambios';
var text12			=	'Parar';
var text13 			=	'Amplitud: 100';
var text14			=	'Parada: 0';
var text15			=	'Tono: 20';
var text16			=	'Velocidad: 115';

// ------------
// Dictionaries
// ------------

var trovi	=	'http://glosbe.com/gapi/translate?from='+knownCode+'&dest='+learningCode+'&format=json&phrase=';
var vorto	=	'http://glosbe.com/gapi/translate?from='+learningCode+'&dest='+knownCode+'&format=json&phrase=';


// ----------------
// Global variables
// ----------------

var raw;
var stop;
var list = [];
var known;
var googleString;
var amplitude = 100;
var wordgap = 0;
var pitch = 20;
var speed = 115;

// --------------
// HTML Templates
// --------------

var SEARCHED_WORD_OPENER		= '<br><b> ' + text1 + '</b><ul><li>';
var NOT_FOUND 					= '<p>'      + text2 + '</p>';
var MEANINGS_HEADER 			= '<p><b>'   + text3 + '</b></p>';

var UL_OPENER					= '<ul>';
var UL_CLOSER					= '</ul>'

var LI_OPENER					= '<li>';
var LI_CLOSER					= '</li>';

var SEARCHED_WORD_CLOSER		= LI_CLOSER + UL_CLOSER;

var FINAL_NOTE_1				= '<br><a href="https://translate.google.com/?hl=';
var FINAL_NOTE_2				= '" target="blank">'+ text4 +'</a>';
var GT_1						= '<br><a href="https://translate.google.com/?hl=';
var GT_2						= '" target="blank">' + text5 + '</a>';

var JUMP						= '<br>';

// ---------
// Constants
// ---------

var CALLBACK 			=	'&callback=?';
var EMPTY_LIST			=	[];
var TRANSLATION_METHOD	=	'translateFromLearning';
