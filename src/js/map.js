
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.87258, 74.578672],
        zoom: 20
    });
    DG.marker([42.87258, 74.578672]).addTo(map).bindPopup('Юридическая компания “Бишкекский правовой центр”');
});