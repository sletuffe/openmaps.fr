// liste of styles
var all_available_styles = [
  {
    id: 'OpenHikingMap',
    name: 'OpenHikingMap',
    tile_urls: [ 'https://tile.openmaps.fr/openhikingmap/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://wiki.openstreetmap.org/wiki/OpenHikingMap">&copy; OpenHikingMap</a> <a href="https://openmaps.fr/donnate">❤️ Donation</a>',
    description: 'OpenHikingMap main rendering',
    numZoomLevels: 19
  },
  {
    id: 'OpenTopoMap',
    name: 'OpenTopoMap local clone',
    tile_urls: [ 'https://tile.openmaps.fr/opentopomap/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://github.com/sletuffe/OpenTopoMap">&copy; OTM-R</a> <a href="https://openmaps.fr/donnate">❤️ Donation</a>',
    description: 'OpenTopoMap local adaptation and customization',
    numZoomLevels: 17
  },
  {
    id: 'official-OpenTopoMap',
    name: 'OpenTopoMap Official',
    tile_urls: [ 'https://a.tile.opentopomap.org/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://opentopomap.org/about">&copy; OTM</a>',
    description: 'OpenTopoMap main server',
    numZoomLevels: 17
  }
];
var all_available_overlays = [];
