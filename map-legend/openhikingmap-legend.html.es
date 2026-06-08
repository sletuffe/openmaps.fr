<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Un mapa gratuito para senderistas basado en los datos de OpenHikingMap.">
    <title>Leyenda de OpenHikingMap</title>
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
            font-weight: bold;
            margin-top: 15px;
            margin-bottom: 15px;
            display: block;
            color: #005691;
            border-bottom: 2px solid #eee;
            padding-bottom: 5px;
        }
        
        .legend-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            font-size: 0.9em;
        }

        .legend-item {
            display: flex;
            align-items: center;
            width: 30%;
            min-width: 180px;
            padding: 5px 10px 5px 0;
        }

        .legend-item img {
            margin-right: 8px;
            height: 20px;
            object-fit: contain;
            flex-shrink: 0;
        }

        .line-and-path-img img {
            height: auto;
            max-height: 20px;
            width: auto; 
        }

        .roads-paths-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
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
        <h1>Leyenda del mapa OpenHikingMap</h1>
    </header>

    <div class="legend-section">
        <span class="legend-title">Senderismo y Caminos (Clasificación de dificultad escala SAC)</span>
        
        <ul class="legend-list">
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round"/></svg>
                T1 / T2 / Dificultad desconocida
            </li>
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="7,5"/></svg>
                T3 / T4
            </li>
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1,6"/></svg>
                T5 / T6
            </li>
        </ul>

        <div style="font-size: 0.85em; color: #666; margin: 10px 0 5px 0; font-style: italic; border-top: 1px dashed #eee; padding-top: 5px;">
            Senderos con visibilidad del terreno escasa:
        </div>
        <ul class="legend-list">
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.5"/></svg>
                T1 / T2 / Dificultad desconocida
            </li>
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="7,5" stroke-opacity="0.5"/></svg>
                T3 / T4
            </li>
            <li class="legend-item">
                <svg width="40" height="20"><line x1="5" y1="10" x2="35" y2="10" stroke="#f12b2b" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1,6" stroke-opacity="0.5"/></svg>
                T5 / T6
            </li>
        </ul>

        <div style="margin-top: 10px;">
            <ul class="legend-list">
                <li>
                    <img src="./legend-images/via_ferrata.png" alt="Vía Ferrata">
                    Vía Ferrata
                </li>
            </ul>
        </div>
    </div>

    <div class="legend-section">
        <span class="legend-title">Pistas (para vehículos)</span>
        <div style="font-size: 0.85em; color: #666; margin: 0 0 10px 0; font-style: italic;">
            Transitable con los siguientes vehículos:
        </div>
        <ul class="roads-paths-list">
            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 5px;">
                    <line x1="0" y1="10" x2="40" y2="10" stroke="black" stroke-width="4.6" />
                    <line x1="0" y1="10" x2="40" y2="10" stroke="white" stroke-width="2.8" />
                </svg>
                Pista asfaltada (todo tipo de vehículos)
            </li>

            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 15px;">
                    <line x1="0" y1="8.2" x2="40" y2="8.2" stroke="#8B4513" stroke-width="1.2" stroke-opacity="0.65" />
                    <line x1="0" y1="11.8" x2="40" y2="11.8" stroke="#8B4513" stroke-width="1.2" stroke-opacity="0.65" />
                </svg>
                Turismos convencionales y bicis urbanas
            </li>

            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 5px;">
                    <line x1="0" y1="8.2" x2="40" y2="8.2" stroke="#8B4513" stroke-width="1.2" stroke-opacity="0.65" />
                    <line x1="0" y1="11.8" x2="40" y2="11.8" stroke="#8B4513" stroke-width="1.2" stroke-dasharray="6,4" stroke-opacity="0.65" />
                </svg>
                Vehículos altos (SUV) y con marchas cortas
            </li>

            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 5px;">
                    <line x1="0" y1="8.2" x2="40" y2="8.2" stroke="#8B4513" stroke-width="1.2" stroke-dasharray="4,4" stroke-opacity="0.65" />
                    <line x1="0" y1="11.8" x2="40" y2="11.8" stroke="#8B4513" stroke-width="1.2" stroke-dasharray="4,4" stroke-opacity="0.65" />
                </svg>
                Todoterreno pesado (4x4)
            </li>

            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 5px;">
                    <line x1="0" y1="8.2" x2="40" y2="8.2" stroke="#8B4513" stroke-width="1.1" stroke-dasharray="5,5" stroke-opacity="0.65" />
                    <line x1="0" y1="11.8" x2="40" y2="11.8" stroke="#8B4513" stroke-width="1.1" stroke-dasharray="5,5" stroke-opacity="0.65" />
                    <text x="20" y="14" font-family="Arial" font-size="11" fill="#8B4513" font-weight="bold" stroke="white" stroke-width="0.3" paint-order="stroke" text-anchor="middle">?</text>
                </svg>
                Desconocido
            </li>
            <li class="roads-paths-item">
                <svg width="40" height="20" viewBox="0 0 40 20" style="margin-right: 5px;">
                    <line x1="0" y1="8.2" x2="40" y2="8.2" stroke="#8B4513" stroke-width="1.1" stroke-dasharray="5,5" stroke-opacity="0.65" />
                    <line x1="0" y1="11.8" x2="40" y2="11.8" stroke="#8B4513" stroke-width="1.1" stroke-dasharray="5,5" stroke-opacity="0.65" />
                    <text x="20" y="14" font-family="Arial" font-size="11" fill="#8B4513" font-weight="bold" stroke="white" stroke-width="0.3" paint-order="stroke" text-anchor="middle">x</text>
                </svg>
                Impracticable para vehículos
            </li>
        </ul>
    </div>

    <div class="legend-section">
        <span class="legend-title">Carreteras principales</span>
        <ul class="roads-paths-list">
            <li class="roads-paths-item"><img src="./legend-images/autobahn.png" alt="Autovía">Autovía, Carretera nacional</li>
            <li class="roads-paths-item"><img src="./legend-images/landstrasse.png" alt="Carretera secundaria">Carretera secundaria / rural</li>

            <li class="roads-paths-item"><img src="./legend-images/normalestrasse.png" alt="Calle local">Carretera comarcal, Calle local</li>
            <li class="roads-paths-item"><img src="./legend-images/strassenimbau.png" alt="En construcción">Carretera en construcción</li>

            <li class="roads-paths-item"><img src="./legend-images/service.png" alt="Vía de servicio">Vía de servicio</li>
        </ul>
    </div>

    <hr/>

    <div class="legend-section">
        <span class="legend-title">Áreas</span>
        <ul class="legend-list">
            <li class="legend-item"><img src="./legend-images/laubwald.png" alt="Bosque caducifolio">Bosque caducifolio</li>
            <li class="legend-item"><img src="./legend-images/nadelwald.png" alt="Bosque de coníferas">Bosque de coníferas</li>
            <li class="legend-item"><img src="./legend-images/mischwald.png" alt="Bosque mixto">Bosque mixto</li>

            <li class="legend-item"><img src="./legend-images/sumpf.png" alt="Pantano">Pantano</li>
            <li class="legend-item"><img src="./legend-images/moor.png" alt="Turbera">Turbera / Marisma</li>
            <li class="legend-item"><img src="./legend-images/roehricht.png" alt="Cañaveral">Cañaveral</li>

            <li class="legend-item"><img src="./legend-images/watt.png" alt="Llanura de marea">Llanura de marea</li>
            <li class="legend-item"><img src="./legend-images/sand.png" alt="Arena">Playa, Arena</li>
            <li class="legend-item"><img src="./legend-images/geroell.png" alt="Pedregal">Pedregal / Canchal</li>

            <li class="legend-item"><img src="./legend-images/gehoelz.png" alt="Arboleda">Arboleda / Bosquete</li>
            <li class="legend-item"><img src="./legend-images/wiese.png" alt="Prado">Prado / Pradera</li>
            <li class="legend-item"></li>
            
            <li class="legend-item"><img src="./legend-images/wein.png" alt="Viñedo">Viñedo</li>
            <li class="legend-item"><img src="./legend-images/friedhof.png" alt="Cementerio">Cementerio</li>
            <li class="legend-item"><img src="./legend-images/schrebergarten.png" alt="Huertos comunitarios">Huertos comunitarios</li>

            <li class="legend-item"><img src="./legend-images/sperrgebiet.png" alt="Zona restringida">Zona restringida / Prohibida</li>
            <li class="legend-item"><img src="./legend-images/bergbau.png" alt="Minería">Minería, Cantera</li>
        </ul>
    </div>
    
    <hr/>

    <div class="legend-section">
        <span class="legend-title">Líneas</span>
        <ul class="legend-list">
            <li class="legend-item line-and-path-img"><img src="./legend-images/stromleitung.png" alt="Línea eléctrica">Línea eléctrica</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/seilbahn.png" alt="Teleférico">Teleférico / Telesilla</li>
            <li class="legend-item line-and-path-img"></li> 

            <li class="legend-item line-and-path-img"><img src="./legend-images/boeschung.png" alt="Terraplén">Terraplén / Talud</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/deich.png" alt="Dique">Dique</li>
            <li class="legend-item line-and-path-img"></li> 

            <li class="legend-item line-and-path-img"><img src="./legend-images/zaun.png" alt="Valla">Valla / Cercado</li>
            <li class="legend-item line-and-path-img"><img src="./legend-images/hecke.png" alt="Seto">Seto</li>
        </ul>
    </div>

    <hr/>

    <div class="legend-section">
        <span class="legend-title">Símbolos</span>
        <ul class="legend-list">
            <li class="legend-item"><img src="./legend-images/kirche.png" alt="Iglesia">Iglesia</li>
            <li class="legend-item"><img src="./legend-images/kapelle.png" alt="Capilla">Capilla</li>
            <li class="legend-item"><img src="./legend-images/burg.png" alt="Castillo">Castillo, Fortaleza</li>

            <li class="legend-item"><img src="./legend-images/burgruine.png" alt="Ruinas de castillo">Ruinas de castillo</li>
            <li class="legend-item"><img src="./legend-images/schloss.png" alt="Palacio">Palacio, Mansión</li>
            <li class="legend-item"><img src="./legend-images/schlossruine.png" alt="Ruinas de palacio">Ruinas de palacio</li>

            <li class="legend-item"><img src="./legend-images/sportplatz.png" alt="Campo deportivo">Campo deportivo</li>
            <li class="legend-item"><img src="./legend-images/stadion.png" alt="Estadio">Estadio</li>
            <li class="legend-item"><img src="./legend-images/turm.png" alt="Torre">Torre</li>

            <li class="legend-item"><img src="./legend-images/aussichtsturm.png" alt="Torre de observación">Torre de observación</li>
            <li class="legend-item"><img src="./legend-images/wasserturm.png" alt="Torre de agua">Torre de agua</li>
            <li class="legend-item"><img src="./legend-images/sendeturm.png" alt="Torre de telecomunicaciones">Torre de transmisión</li>

            <li class="legend-item"><img src="./legend-images/mobilfunkmast.png" alt="Antena móvil">Antena de telefonía móvil</li>
            <li class="legend-item"><img src="./legend-images/leuchtturm.png" alt="Faro">Faro</li>
            <li class="legend-item"><img src="./legend-images/aussichtspunkt.png" alt="Mirador">Mirador</li>

            <li class="legend-item"><img src="./legend-images/badestelle.png" alt="Zona de baño">Piscina, Zona de baño</li>
            <li class="legend-item"><img src="./legend-images/camping.png" alt="Camping">Camping</li>
            <li class="legend-item"><img src="./legend-images/bergwerk.png" alt="Mina">Mina</li>

            <li class="legend-item"><img src="./legend-images/bergwerk_stillgelegt.png" alt="Mina abandonada">Mina (en desuso)</li>
            <li class="legend-item"><img src="./legend-images/muehle.png" alt="Molino">Molino</li>

            <li class="legend-item"><img src="./legend-images/denkmal.png" alt="Monumento">Monumento, Memorial</li>
            <li class="legend-item"><img src="./legend-images/wegkreuz.png" alt="Crucero">Crucero / Cruz de camino</li>
            <li class="legend-item"><img src="./legend-images/huegelgrab.png" alt="Túmulo">Túmulo</li>

            <li class="legend-item"><img src="./legend-images/gipfel.png" alt="Cima">Cima / Pico</li>
            <li class="legend-item"><img src="./legend-images/gipfelkreuz.png" alt="Cruz de cima">Cruz de cumbre</li>
            <li class="legend-item"><img src="./legend-images/quelle.png" alt="Manantial">Manantial / Fuente</li>

            <li class="legend-item"><img src="./legend-images/hoehle.png" alt="Entrada de cueva">Entrada de cueva</li>
            <li class="legend-item"><img src="./legend-images/kreuz.png" alt="Cruz">Cruz</li>
            <li class="legend-item"><img src="./legend-images/sattel.png" alt="Collado">Collado / Puerto</li>

            <li class="legend-item"><img src="./legend-images/laubbaum.png" alt="Árbol singular">Árbol singular</li>
            <li class="legend-item"><img src="./legend-images/doline.png" alt="Dolina">Dolina</li>
            <li class="legend-item"><img src="./legend-images/kraftwerk.png" alt="Central eléctrica">Central eléctrica</li>

            <li class="legend-item"><img src="./legend-images/photovoltaikanlage.png" alt="Planta fotovoltaica">Planta fotovoltaica</li>
            <li class="legend-item"><img src="./legend-images/windkraftanlage.png" alt="Aerogenerador">Aerogenerador</li>
            <li class="legend-item"><img src="./legend-images/schornstein.png" alt="Chimenea">Chimenea</li>
        </ul>
    </div>
</body>
</html>
