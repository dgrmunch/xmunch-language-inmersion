var personalPronounsList = [
	{word: 'mi', translation:'I'},
	{word:'vi', translation: 'you'},
	{word: 'li', translation: 'he'},
	{word: 'sxi', translation:'she'}];
	
var prepositionsList = ['de','por','el','en','al'];

var connectorsList = [
	{word: 'kaj', translation:'and'},
	{word:'la', translation: 'the'},
	{word: 'cxu', translation: 'do (question)'},
	{word: 'ne', translation:'not'},
	{word: 'cxar', translation:'because'},
	{word: 'kvankam', translation:'although'},
	{word: 'ke', translation:'that'},
	{word: 'kvazaux', translation:'as if'},
	{word: 'se', translation:'if'},
	{word: 'sed', translation:'but'},
	{word: 'do', translation:'so,then,therefore'},
	{word: 'nu', translation:'well, now (interjection)'},
	{word: 'nek', translation:'neither, nor'},
	{word: 'ne', translation:'not'},
];
	
var endingsList = ['aj','oj','a','e','o','j','i','as','is','os','us','u'];

var charsList = [
{char: 'Ĉ', replacement: 'Cx'},
{char: 'Ĝ', replacement: 'Gx'},
{char: 'Ĵ', replacement: 'Jx'},
{char: 'Ŝ', replacement: 'Sx'},
{char: 'Ŭ', replacement: 'Ux'},
{char: 'ĉ', replacement: 'cx'},
{char: 'ĝ', replacement: 'gx'},
{char: 'ĥ', replacement: 'hx'},
{char: 'ĵ', replacement: 'jx'},
{char: 'ŝ', replacement: 'sx'},
{char: 'ŭ', replacement: 'ux'}];


var prefixesList = [
{prefix: 'bo', meaning: 'parentesco por matrimonio', example: 'patro	-	padre		bopatro	-	suegro'},
{prefix: 'dis', meaning: 'en varias direcciones', example: 'doni	-	dar		disdoni	-	repartir'},
{prefix: 'ek', meaning: 'comenzar (súbitamente)', example: 'vidi	-	ver		ekvidi	-	vislumbrar, distinguir'},
{prefix: 'eks', meaning: 'ex-', example: 'reĝo	-	rey		eksreĝo	-	ex-rey'},
{prefix: 'fi', meaning: 'malo (carácter)', example: 'domo	-	casa		fidomo	-	prostíbulo, lupanar'},
{prefix: 'ge', meaning: 'ambos sexos juntos', example: 'patro	-	padre		gepatroj	-	los padres (el padre y la madre)'},
{prefix: 'mal', meaning: 'lo contrario, lo inverso', example: 'bona	-	bueno		malbona	-	malo'},
{prefix: 'mis', meaning: 'equivocadamente, por error', example: 'uzi	-	usar		misuzi	-	dar un mal uso a algo'},
{prefix: 'pra', meaning: 'de hace mucho, mucho tiempo', example: 'tempo	-	tiempo		pratempo	-	pasado remoto'},
{prefix: 're', meaning: 'de nuevo, una vez más, en dirección inversa', example: 'veni	-	venir		reveni	-	regresar'}];

var sufixesList = [
{sufix: 'aĉ', meaning: 'mala calidad', example: 'domo	-	casa		domaĉo	-	casucha'},
{sufix: 'ad', meaning: 'Acción continuada o repetida', example: 'kanti	-	cantar		kantado	-	canto continuado'},
{sufix: 'aĵ', meaning: 'algo concreto', example: 'alta	-	alto		altaĵo	-	una altura'},
{sufix: 'an', meaning: 'miembro, participante', example: 'Kristo	-	Cristo		kristano	-	cristiano'},
{sufix: 'ar', meaning: 'colección', example: 'arbo	-	árbol		arbaro	-	bosque'},
{sufix: 'ĉj', meaning: 'crea sobrenombres masculinos (después de 2-5 letras del nombre)', example: 'patro	-	padre		paĉjo	-	papá'},
{sufix: 'ebl', meaning: 'posible', example: 'legi	-	leer		legebla	-	legible'},
{sufix: 'ec', meaning: 'cualidad abstracta', example: 'rapida	-	rápido		rapideco	-	velocidad'},
{sufix: 'eg', meaning: 'aumentativo', example: 'varma	-	caliente		varmega	-	muy caliente'},
{sufix: 'ej', meaning: 'lugar, donde', example: 'kuiri	-	cocinar		kuirejo	-	cocina, lugar para cocinar'},
{sufix: 'em', meaning: 'inclinación, preferencia', example: 'dormi	-	dormir		dormema	-	que desea dormir'},
{sufix: 'end', meaning: 'que hay que hacer', example: 'legi	-	leer		legenda	-	que hay que leer'},
{sufix: 'er', meaning: 'fragmento, unidad', example: 'sablo	-	arena		sablero	-	grano de arena'},
{sufix: 'estr', meaning: 'jefe, presidente, guía', example: 'lernejo	-	escuela		lernejestro	-	director de escuela'},
{sufix: 'et', meaning: 'diminutivo', example: 'varma	-	caliente		varmeta	-	tibio'},
{sufix: 'id', meaning: 'descendiente, niño, animal joven', example: 'hundo	-	perro		hundido	-	cachorro de perro'},
{sufix: 'ig', meaning: 'hacer, causar', example: 'labori	-	trabajar		laborigi	-	hacer trabajar'},
{sufix: 'iĝ', meaning: 'convertirse', example: 'ruĝa	-	rojo/roja		ruĝiĝi	-	enrojecerse, venirse rojo'},
{sufix: 'il', meaning: 'instrumento, herramienta', example: 'tranĉi	-	cortar		tranĉilo	-	cuchillo'},
{sufix: 'in', meaning: 'femenino', example: 'knabo	-	muchacho		knabino	-	muchacha'},
{sufix: 'ind', meaning: 'merece hacerse, tiene mérito', example: 'legi	-	leer		leginda	-	digno de leer'},
{sufix: 'ing', meaning: 'recipiente parcial para sostener', example: 'glavo	-	espada		glavingo	-	vaina de la espada'},
{sufix: 'ism', meaning: 'manera de pensar, sistema', example: 'kristano	-	cristiano		kristanismo	-	cristianismo'},
{sufix: 'ist', meaning: 'profesión, ocupación continua', example: 'labori	-	trabajar		laboristo	-	trabajador'},
{sufix: 'nj', meaning: 'sobrenombre femenino (después de 2-5 letras del nombre)', example: 'patrino	-	madre		panjo	-	mamá'},
{sufix: 'obl', meaning: 'multiplica, veces', example: 'du	-	dos, 2		duoblo	-	el doble'},
{sufix: 'on', meaning: 'fracción', example: 'du	-	dos, 2		duono	-	la mitad'},
{sufix: 'op', meaning: 'a razón de', example: 'du	-	dos, 2		duope	-	grupos de 2'},
{sufix: 'uj', meaning: 'recipiente', example: 'mono	-	dinero		monujo	-	monedero, billetera'},
{sufix: 'ul', meaning: 'individuo, persona', example: 'juna	-	joven		junulo	-	un joven'},
{sufix: 'um', meaning: 'sufijo sin significado específico', example: 'komuna	-	común		komunumo	-	comunidad'}];





