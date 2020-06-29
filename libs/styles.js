// liste des styles disponibles
// Dans une vie postérieure, cette liste pourra être dynamiquement générée en interrogeant les serveurs de rendus et les styles dont ils disposent -- sly

var base_url = [ window.location.protocol + '//maps.refuges.info/' ];

//base styles (not transparent)
var all_available_styles = [
  {
    id: 'MRI',
    name: 'Maps.Refuges.Info',
    tile_urls: [ base_url[0] + 'hiking/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://wiki.openstreetmap.org/wiki/Hiking/mri">&copy; sly</a> MODIS/Terra Snow Cover 8-day by NSDIC <br>ASTER GDEM is a product of METI and NASA<br> SRTM V4 thanks to CGIAR-CSI<br>EU-DEM produced using Copernicus data and information funded by the European Union.<br>',
    description: 'MRI hiking rendering',
    numZoomLevels: 19
  },
  {
    id: 'otm',
    name: 'OpenTopoMap local clone',
    tile_urls: [ base_url[0] + 'otm/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://opentopomap.org/about">&copy; OTM</a> MODIS/Terra Snow Cover 8-day by NSDIC <br>ASTER GDEM is a product of METI and NASA<br> SRTM V4 thanks to CGIAR-CSI<br>EU-DEM produced using Copernicus data and information funded by the European Union.',
    description: 'OpenTopoMap customization',
    numZoomLevels: 19
  }
];
var all_available_overlays = [];
