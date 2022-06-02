
if(document.querySelector('[id="map"]')) ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: [59.99765552868223,30.306033608459433],
    zoom: 16.5,
  });

  let placemark = new ymaps.Placemark([59.99763940716278,30.306055066131567], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageHref: './images/placemark.png',
    iconImageSize: [78, 78],
    iconImageOffset: [-25, -40]
  });

  map.geoObjects.add(placemark);
}