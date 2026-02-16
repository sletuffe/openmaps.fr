<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Leyenda de mapa topográfico libre basada en datos de OpenStreetMap.">
    <meta name="keywords" content="open, topo, map, maps, openstreetmap, osm, srtm, topografía, curvas de nivel, altimetría, libre">
    <title>Leyenda del mapa OpenTopoMap</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    <link href="style.css" type="text/css" rel="stylesheet"/>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }

        header h1 {
            color: #00386b;
            text-align: center;
            margin-bottom: 30px;
        }

        .legend-section {
            margin-bottom: 20px;
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .legend-title {
            font-size: 1.2em;
            font-variant: small-caps;
            font-weight: bold;
            margin-top: 15px;
            margin-bottom: 15px;
            display: block;
            color: #005691;
            border-bottom: 2px solid #eee;
            padding-bottom: 5px;
        }
        
        /* legend elements */
        .legend-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            font-size: 0.9em;
        }

        /* icon / text  */
        .legend-item {
            display: flex;
            align-items: center;
            width: 30%; /* Para 3 columnas */
            min-width: 180px; 
            padding: 5px 10px 5px 0;
        }

        .legend-item img {
            margin-right: 8px;
            height: 20px;
            object-fit: contain;
            flex-shrink: 0;
        }

        /* Style for lines road and paths*/
        .line-and-path-img img {
            height: auto;
            max-height: 20px; 
            width: auto; 
        }

        /* for roads and paths */
        .roads-paths-list {
            display: grid;
            grid-template-columns: 1fr 1fr; /* 2 columnas */
            gap: 10px 20px;
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 0.9em;
        }

        .roads-paths-item {
            display: flex;
            align-items: center;
            padding: 5px 0;
        }
        
        .roads-paths-item img {
            margin-right: 8px;
            height: auto;
            max-height: 20px;
            width: auto;
            object-fit: contain;
            flex-shrink: 0;
        }

        hr {
            border: none;
            border-top: 1px solid #eee;
            margin: 30px 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Leyenda del mapa OpenTopoMap</h1>
    </header>

    <div class="legend-section">
        <span class="legend-title">Superficies y Áreas</span>
        <ul class="legend-list">
            <li class="legend-item"><img src="./legend-images/laubwald.png" alt="Bosque caducifolio">Bosque caducifolio</li>
            <li class="legend-item"><img src="./legend-images/nadelwald.png" alt="Bosque de coníferas">Bosque de coníferas</li>
            <li class="legend-item"><img src="./legend-images/mischwald.png" alt="Bosque mixto">Bosque mixto</li>

            <li class="legend-item"><img src="./legend-images/sumpf.png" alt="Pantano">Pantano / Ciénaga</li>
            <li class="legend-item"><img src="./legend-images/moor.png" alt="Turbera">Turbera</li>
            <li class="legend-item"><img src="./legend-images/roehricht.png" alt="Carrizal">Carrizal / Cañaveral</li>

            <li class="legend-item"><img src="./legend-images/watt.png" alt="Llanura de marea">Llanura de marea / Marisma</li>
            <li class="legend-item"><img src="./legend-images/sand.png" alt="Arena">Playa / Arena</li>
            <li class="legend-item"><img src="./legend-images/geroell.png" alt="Pedregal">Pedregal / Canchal</li>

            <li class="legend-item"><img src="./legend-images/gehoelz.png" alt="Arboleda">Arboleda / Bosque bajo</li>
            <li class="legend-item"><img src="./legend-images/wiese.png" alt="Pradera">Pradera / Pastizal</li>
            <li class="legend-item"></li>
            
            <li class="legend-item"><img src="./legend-images/wein.png" alt="Viñedo">Viñedo</li>
            <li class="legend-item"><img src="./legend-images/friedhof.png" alt="Cementerio">Cementerio</li>
            <li class="legend-item"><img src="./legend-images/schrebergarten.png" alt="Huertos familiares">Huertos familiares</li>

            <li class="legend-item"><img src="./legend-images/sperrgebiet.png" alt="Zona restringida">Zona de acceso restringido</li>
            <li class="legend-item"><img src="./legend-images/bergbau.png" alt="Mina">Mina / Cantera</li>
        </ul>
    </div>
    
    <hr/>

    <div class="legend-section">
        <span class="legend-title">Líneas</span>
        <ul class="legend-list">
            
            <li class="legend-item line-and-path-img"><img src="./legend-images/stromleitung.png" alt="Línea eléctrica">Línea eléctrica</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/seilbahn.png" alt="Teleférico">Teleférico / Remonte</li>
            <li class="legend-item line-and-path-img"></li> 

            <li class="legend-item line-and-path-img"><img src="./legend-images/boeschung.png" alt="Terraplén">Terraplén / Talud</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/deich.png" alt="Dique">Dique</li>
            <li class="legend-item line-and-path-img"></li> 

            <li class="legend-item line-and-path-img"><img src="./legend-images/zaun.png" alt="Valla">Valla / Cerca</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/hecke.png" alt="Seto">Seto</li>
        </ul>
    </div>

    <hr/>

    <div class="legend-section">
        <span class="legend-title">Carreteras y Senderos</span>
        <ul class="roads-paths-list">
            <li class="roads-paths-item"><img src="./legend-images/autobahn.png" alt="Autopista">Autopista / Autovía</li>
            <li class="roads-paths-item"><img src="./legend-images/landstrasse.png" alt="Carretera rural">Carretera secundaria / rural</li>

            <li class="roads-paths-item"><img src="./legend-images/normalestrasse.png" alt="Calle local">Calle local / vía urbana</li>
            <li class="roads-paths-item"><img src="./legend-images/strassenimbau.png" alt="En construcción">Vía en construcción</li>

            <li class="roads-paths-item"><img src="./legend-images/service.png" alt="Vía de servicio">Vía de servicio / acceso</li>
            <li class="roads-paths-item"><img src="./legend-images/track_grade1.png" alt="Pista pavimentada">Pista asfaltada / pavimentada</li>

            <li class="roads-paths-item"><img src="./legend-images/track_grade2.png" alt="Pista de grava">Pista de grava / Carril bici</li>
            <li class="roads-paths-item"><img src="./legend-images/track_grade34.png" alt="Superficie blanda">Camino agrícola (superficie blanda)</li>

            <li class="roads-paths-item"><img src="./legend-images/track_grade5.png" alt="Camino de tierra">Camino de tierra / no revestido</li>
            <li class="roads-paths-item"><img src="./legend-images/bobsleigh.png" alt="Pista de bobsleigh">Pista de bobsleigh</li>

            <li class="roads-paths-item"><img src="./legend-images/toboggan.png" alt="Tobogán de verano">Pista de trineo de verano</li>
            <li class="roads-paths-item"><img src="./legend-images/fussweg_t12.png" alt="Sendero">Sendero peatonal</li>

            <li class="roads-paths-item"><img src="./legend-images/fussweg_t34.png" alt="Sendero difícil">Sendero difícil (escala SAC T3 T4)</li>
            <li class="roads-paths-item"><img src="./legend-images/fussweg_t56.png" alt="Vía ferrata">Sendero muy difícil (SAC T5 T6) / Vía ferrata</li>
        </ul>
    </div>

    <hr/>

    <div class="legend-section">
        <span class="legend-title">Símbolos</span>
        <ul class="legend-list">
            <li class="legend-item"><img src="./legend-images/kirche.png" alt="Iglesia">Iglesia</li>
            <li class="legend-item"><img src="./legend-images/kapelle.png" alt="Capilla">Capilla</li>
            <li class="legend-item"><img src="./legend-images/burg.png" alt="Castillo">Castillo / Fortaleza</li>

            <li class="legend-item"><img src="./legend-images/burgruine.png" alt="Ruinas">Ruinas de castillo / Ruinas</li>
            <li class="legend-item"><img src="./legend-images/schloss.png" alt="Palacio">Palacio / Mansión</li>
            <li class="legend-item"><img src="./legend-images/schlossruine.png" alt="Ruinas de palacio">Ruinas de palacio</li>

            <li class="legend-item"><img src="./legend-images/sportplatz.png" alt="Campo de deportes">Campo de deportes</li>
            <li class="legend-item"><img src="./legend-images/stadion.png" alt="Estadio">Estadio</li>
            <li class="legend-item"><img src="./legend-images/turm.png" alt="Torre">Torre</li>

            <li class="legend-item"><img src="./legend-images/aussichtsturm.png" alt="Mirador">Torre de observación / Mirador</li>
            <li class="legend-item"><img src="./legend-images/wasserturm.png" alt="Torre de agua">Torre de agua</li>
            <li class="legend-item"><img src="./legend-images/sendeturm.png" alt="Torre de comunicaciones">Torre de telecomunicaciones / emisor</li>

            <li class="legend-item"><img src="./legend-images/mobilfunkmast.png" alt="Antena móvil">Antena de telefonía móvil</li>
            <li class="legend-item"><img src="./legend-images/leuchtturm.png" alt="Faro">Faro</li>
            <li class="legend-item"><img src="./legend-images/aussichtspunkt.png" alt="Punto de vista">Punto de observación</li>

            <li class="legend-item"><img src="./legend-images/badestelle.png" alt="Baño">Piscina / Zona de baño</li>
            <li class="legend-item"><img src="./legend-images/camping.png" alt="Camping">Camping</li>
            <li class="legend-item"><img src="./legend-images/bergwerk.png" alt="Mina">Mina</li>

            <li class="legend-item"><img src="./legend-images/bergwerk_stillgelegt.png" alt="Mina abandonada">Mina (abandonada)</li>
            <li class="legend-item"><img src="./legend-images/muehle.png" alt="Molino">Molino</li>
            <li class="legend-item"><img src="./legend-images/unterstand.png" alt="Refugio">Refugio abierto / Cobertizo</li>

            <li class="legend-item"><img src="./legend-images/huette.png" alt="Refugio">Cabaña / Refugio</li>
            <li class="legend-item"><img src="./legend-images/huette_bewirtschaftet.png" alt="Refugio guardado">Refugio (guardado)</li>
            <li class="legend-item"><img src="./legend-images/denkmal.png" alt="Monumento">Monumento / Memorial</li>

            <li class="legend-item"><img src="./legend-images/wegkreuz.png" alt="Cruz de camino">Cruz de camino</li>
            <li class="legend-item"><img src="./legend-images/huegelgrab.png" alt="Túmulo">Túmulo</li>
            <li class="legend-item"><img src="./legend-images/gipfel.png" alt="Cima">Cima / Cumbre</li>

            <li class="legend-item"><img src="./legend-images/gipfelkreuz.png" alt="Cruz de cumbre">Cruz de cumbre</li>
            <li class="legend-item"><img src="./legend-images/quelle.png" alt="Manantial">Manantial / Fuente</li>
            <li class="legend-item"><img src="./legend-images/hoehle.png" alt="Cueva">Entrada de cueva</li>

            <li class="legend-item"><img src="./legend-images/kreuz.png" alt="Cruz">Cruz</li>
            <li class="legend-item"><img src="./legend-images/sattel.png" alt="Collado">Collado / Puerto</li>
            <li class="legend-item"><img src="./legend-images/laubbaum.png" alt="Árbol singular">Árbol singular / notable</li>
            <li class="legend-item"><img src="./legend-images/doline.png" alt="Dolina">Dolina</li>
            <li class="legend-item"><img src="./legend-images/kraftwerk.png" alt="Central eléctrica">Central eléctrica</li>
            <li class="legend-item"><img src="./legend-images/photovoltaikanlage.png" alt="Fotovoltaica">Instalación fotovoltaica</li>

            <li class="legend-item"><img src="./legend-images/windkraftanlage.png" alt="Aerogenerador">Aerogenerador</li>
            <li class="legend-item"><img src="./legend-images/schornstein.png" alt="Chimenea">Chimenea</li>
        </ul>
    </div>
</body>
</html>
