// liste des styles disponibles
// Dans une vie postérieure, cette liste pourra être dynamiquement générée en interrogeant les serveurs de rendus et les styles dont ils disposent -- sly

var base_url = [ window.location.protocol + '//' + window.location.hostname + '/' ];

//base styles (not transparent)
var all_available_styles = [
  {
    id: 'ohm',
    name: 'OpenHikingMap',
    tile_urls: [ base_url[0] + 'hiking/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://wiki.openstreetmap.org/wiki/OpenHikingMap">&copy; sly</a>',
    description: 'OpenHikingMap main rendering',
    numZoomLevels: 19
  },
  {
    id: 'otm',
    name: 'OpenTopoMap local clone',
    tile_urls: [ base_url[0] + 'otm/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://github.com/RefugesInfo/OpenTopoMap">&copy; OTM-R</a>',
    description: 'OpenTopoMap local adaptation and customization',
    numZoomLevels: 17
  },
  {
    id: 'official-otm',
    name: 'OpenTopoMap Official',
    tile_urls: [ 'https://a.tile.opentopomap.org/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://opentopomap.org/about">&copy; OTM</a>',
    description: 'OpenTopoMap main server',
    numZoomLevels: 17
  }
];
var all_available_overlays = [];
