var map;

// Lat/lng of all buildings
var buildingsCoords = {
	talbot11: 		{center: {lat: 42.405014, lng: -71.118021}},
	college177: 	{center: {lat: 42.408164, lng: -71.116682}},
	boston200: 		{center: {lat: 42.415776, lng: -71.126659}},
	winthrop26: 	{center: {lat: 42.410640, lng: -71.123289}},
	boston574: 		{center: {lat: 42.403539, lng: -71.114031}},
	pro72: 			{center: {lat: 42.406302, lng: -71.121360}},
	talbot97: 		{center: {lat: 42.405898, lng: -71.121583}},
	aidekman: 		{center: {lat: 42.404471, lng: -71.118941}},
	anderson: 		{center: {lat: 42.406096, lng: -71.116792}},
	bacon: 			{center: {lat: 42.404926, lng: -71.114952}},
	barnum: 		{center: {lat: 42.407704, lng: -71.120746}},
	braker: 		{center: {lat: 42.407376, lng: -71.118133}},
	bp: 			{center: {lat: 42.405461, lng: -71.116415}},
	cabot: 			{center: {lat: 42.407910, lng: -71.121490}},
	cousens: 		{center: {lat: 42.408720, lng: -71.116017}},
	east: 			{center: {lat: 42.407648, lng: -71.118732}},
	eaton: 			{center: {lat: 42.406836, lng: -71.118644}},
	ep: 			{center: {lat: 42.410281, lng: -71.114368}},
	gantcher: 		{center: {lat: 42.409674, lng: -71.115179}},
	granoff: 		{center: {lat: 42.404481, lng: -71.118293}},
	halligan: 		{center: {lat: 42.408372, lng: -71.116314}},
	hillel: 		{center: {lat: 42.409308, lng: -71.120873}},
	jackson: 		{center: {lat: 42.404597, lng: -71.119624}},
	lane: 			{center: {lat: 42.409115, lng: -71.119918}},
	lincoln: 		{center: {lat: 42.407214, lng: -71.117812}},
	miller: 		{center: {lat: 42.409010, lng: -71.121277}},
	miner: 			{center: {lat: 42.406531, lng: -71.117845}},
	olin: 			{center: {lat: 42.408314, lng: -71.121213}},
	packard: 		{center: {lat: 42.407920, lng: -71.119346}},
	paige: 			{center: {lat: 42.406866, lng: -71.117660}},
	pearson: 		{center: {lat: 42.404863, lng: -71.120433}},
	hanger: 		{center: {lat: 42.404701, lng: -71.120020}},
	psychbuilding: 	{center: {lat: 42.406271, lng: -71.116063}},
	scitech: 		{center: {lat: 42.403803, lng: -71.113445}},
	sogo: 			{center: {lat: 42.405029, lng: -71.118344}},
	tischlib: 		{center: {lat: 42.406204, lng: -71.118788}},
	tischsports: 	{center: {lat: 42.409115, lng: -71.115540}}
};

// this looks ugly sorry
// it's all the classes in each building for a given dept
var classData = {
	aast: {boston574: 1, eaton: 1, paige: 1, tischlib: 1, winthrop26: 1},
	afr: {aidekman: 2, barnum: 1, bp: 2, braker: 1, east: 1, eaton: 3,
		granoff: 6, olin: 2, paige: 1, talbot11: 1, tischlib: 2},
	amer: {aidekman: 4, barnum: 2, boston574: 1, bp: 1, braker: 1,
		east: 2, eaton: 12, granoff: 4, jackson: 2, lane: 1, miner: 1,
		paige: 1, pearson: 1, tischlib: 4, winthrop26: 1},
	anth: {anderson: 1, eaton: 7, lane: 1, miner: 1, olin: 1, paige: 1,
		pearson: 1},
	arb: {braker: 1, granoff: 1, olin: 17},
	arch: {eaton: 2, pearson: 1},
	ast: {boston574: 2, cabot: 1},
	bio: {barnum: 15, boston200: 2, boston574: 4, halligan: 1, lane: 1,
		pearson: 2, scitech: 1, tischlib: 1, winthrop26: 2},
	bme: {boston200: 2, scitech: 10},
	cd: {anderson: 3, boston574: 1, bp: 1, braker: 2, cabot: 1, eaton: 1,
		ep: 17, jackson: 1, miller: 2, paige: 2},
	cee: {anderson: 14, boston574: 1, bp: 1, east: 1, jackson: 1,
		lane: 1, tischlib: 1, winthrop26: 1},
	ch: {anderson: 2, boston574: 9, eaton: 2, scitech: 1},
	chbe: {scitech: 13, tischlib: 1},
	chem: {braker: 1, paige: 1, pearson: 14},
	chns: {lane: 1, olin: 23},
	civ: {olin: 1},
	cls: {bp: 1, braker: 1, eaton: 6, pearson: 2},
	comp: {anderson: 4, barnum: 4, boston200: 1, bp: 2, braker: 3,
		halligan: 19, pearson: 4, winthrop26: 2},
	cst: {braker: 1, eaton: 1, olin: 1},
	dnc: {jackson: 17},
	dr: {aidekman: 13, granoff: 2, hanger: 3, jackson: 4, sogo: 2,
		tischlib: 1},
	ec: {aidekman: 1, barnum: 1, braker: 48, eaton: 1, granoff: 1,
		miner: 1},
	ed: {anderson: 4, barnum: 1, bp: 2, eaton: 3, ep: 1, lane: 1,
		miner: 4, olin: 1, tischlib: 2, winthrop26: 1},
	ee: {anderson: 1, halligan: 15, scitech: 1},
	els: {boston574: 8, tischlib: 1, winthrop26: 1},
	em: {anderson: 4, boston200: 1, boston574: 1, bp: 1},
	en: {anderson: 4, halligan: 3, scitech: 2, winthrop26: 1},
	eng: {aidekman: 3, barnum: 6, bp: 4, braker: 2, east: 23, eaton: 20,
		ep: 4, lane: 1, miner: 17, olin: 6, packard: 2, paige: 7,
		pearson: 1, sogo: 1, talbot11: 1, tischlib: 5, winthrop26: 1},
	enp: {anderson: 4, boston574: 3, olin: 1},
	env: {anderson: 3, barnum: 6, braker: 2, east: 1, lane: 1, lincoln: 1,
		miner: 1, pearson: 2, tischlib: 1},
	eos: {lane: 5},
	es: {aidekman: 1, anderson: 7, college177: 3, granoff: 1, halligan: 4,
		olin: 1, scitech: 1},
	exp: {aidekman: 1, barnum: 5, boston574: 2, braker: 4, east: 4,
		eaton: 12, lane: 2, lincoln: 2, miner: 4, olin: 6, packard: 1,
		sogo: 2, tischlib: 3, winthrop26: 1},
	fah: {aidekman: 14, jackson: 2, sogo: 1, talbot11: 7, tischlib: 1},
	fam: {braker: 2, halligan: 1, jackson: 3, lane: 22},
	fms: {aidekman: 5, eaton: 3, ep: 1, jackson: 1, lincoln: 1, miner: 1,
		olin: 7, sogo: 2, tischlib: 3},
	fr: {olin: 38, tischlib: 1},
	ger: {eaton: 1, olin: 15, tischlib: 2},
	gis: {tischlib: 1},
	grk: {eaton: 4},
	heb: {olin: 5},
	hist: {barnum: 1, bp: 2, braker: 5, east: 7, eaton: 8, jackson: 2,
		miner: 1, paige: 3, pearson: 1, tischlib: 2},
	ilvs: {olin: 8, talbot11: 1, tischlib: 3},
	intr: {eaton: 1, packard: 1},
	ital: {east: 1, olin: 12, tischlib: 1},
	jpn: {braker: 1, olin: 10},
	js: {east: 1, hillel: 1, olin: 3},
	ling: {anderson: 1, miner: 1, olin: 1, paige: 1},
	lst: {east: 1},
	ltn: {eaton: 7, lane: 1},
	math: {anderson: 1, boston574: 3, bp: 34, halligan: 1, miner: 1,
		pearson: 2, scitech: 2, winthrop26: 1},
	me: {anderson: 8, braker: 1, college177: 5, east: 1, tischlib: 3},
	ml: {olin: 1},
	mus: {aidekman: 2, granoff: 37},
	nu: {barnum: 1},
	ots: {boston574: 8},
	pe: {cousens: 8, gantcher: 1, jackson: 7, tischsports: 2},
	phil: {anderson: 3, barnum: 1, bp: 1, east: 1, eaton: 3, miner: 24,
		olin: 1, paige: 3, pro72: 1},
	phy: {barnum: 3, boston574: 12},
	pjs: {eaton: 7, miller: 1, olin: 2, packard: 1},
	por: {olin: 3, tischlib: 1},
	ps: {aidekman: 3, bp: 2, braker: 1, east: 1, eaton: 2, jackson: 1,
		lane: 2, lincoln: 2, miner: 1, packard: 7, paige: 5, pearson: 1,
		tischlib: 2, winthrop26: 1},
	psy: {aidekman: 2, anderson: 9, bacon: 1, barnum: 3, cabot: 2,
		eaton: 4, granoff: 1, halligan: 2, miner: 1, olin: 1, paige: 1,
		psychbuilding: 8, talbot11: 1, tischlib: 1, winthrop26: 1},
	rel: {aidekman: 3, eaton: 9, ep: 1, hillel: 1, jackson: 2, olin: 2,
		scitech: 1, talbot11: 2, tischlib: 1},
	rus: {olin: 10},
	skt: {eaton: 1},
	soc: {anderson: 1, boston574: 1, eaton: 13, granoff: 1, halligan: 1,
		jackson: 2, miner: 1, sogo: 1, tischlib: 1},
	spn: {eaton: 1, olin: 70, tischlib: 2},
	sts: {bp: 1},
	swa: {olin: 1},
	uep: {aidekman: 1 ,eaton: 1, olin: 1, talbot97: 1},
	wgss: {eaton: 1, miner: 1, olin: 1},
	wl: {olin: 1, tischlib: 1}
};

function initMap() {
	// Tufts Coordindates
	var tuftsLat = 42.407441
	var tuftsLng = -71.120193
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: tuftsLat, lng: tuftsLng},
		zoom: 15,
		scrollwheel: false
	});



	// Example circle
	// var circle = new google.maps.Circle({
	// 	strokeColor: '#FF0000',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: '#FF0000',
    //     fillOpacity: 0.35,
    //     map: map,
    //     center: {lat: 42.404896, lng: -71.118387},
    //     radius: 100
    // });

	// Example of class distribution for one dept
	var dept = "eng";
	for (var bldg in classData[dept]) {
		var cityCircle = new google.maps.Circle({
			clickable: true,
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: map,
			center: buildingsCoords[bldg].center,
			radius: classData[dept][bldg] * 5
			// Need a better scaler for radius. Good min: 5, max 50
			// Circles need labels too http://stackoverflow.com/questions/6584358/google-maps-v3-adding-an-info-window-to-a-circle
		});
   	}
}
