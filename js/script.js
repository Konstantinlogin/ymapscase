// Рендерим карту, после загрузки страницы
ymaps.ready(init);

function init() {
	// создаем карту
	var map = new ymaps.Map('map', {
		center: [55.76, 37.64],
		controls: ['zoomControl'],
		zoom: 4
	});
	var objectManager = new ymaps.ObjectManager({
		clusterize: false
	});

	map.geoObjects.add(objectManager);

	objectManager.objects.each(function (o) {
		console.log(o);
	});


	//  Таки Сходим за данными
	$.ajax({
		url: "../data/data.json"
	}).done(function (data) {
		objectManager.add(data);
	});
}
