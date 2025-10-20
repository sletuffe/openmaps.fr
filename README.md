## About openmaps.fr

[Openmaps.fr](https://openmaps.fr) is a free [Tile Map Service](https://wiki.openstreetmap.org/wiki/TMS) based on [OpenStreetMap](https://wiki.openstreetmap.org/) datas providing 2 maps :

* [OpenTopoMap-R](https://github.com/sletuffe/OpenTopoMap) An almost clone of [OpenTopoMap](https://wiki.openstreetmap.org/wiki/OpenTopoMap)
and
* [OpenHikingMap](https://wiki.openstreetmap.org/wiki/OpenHikingMap) Another map for hiking [git repo](https://github.com/sletuffe/OpenHikingMap).


All styles and code are free and OpenSource (Check each one's specific license) on their github's repo

## Can it be used freely on another website/application ?

It was meant for that. However, there are no guarantees : the service might stop any time, or I might ban IP or web site if there are too much requests.
If you include tiles from tile.openmaps.fr in your project, you must read and accept the [Tile usage policy](https://openmaps.fr/tile-usage-policy.html) where you will also find the TMS URLs for those two map styles.

* Since ~2011, due to increasing mass dowload applications targeting and hampering the OpenHikingMap server I had to take measures in order to give priority to "browsing users". The current (since 2023) limit is that asking more than 2000 not allready rendered tiles or 8000 tiles (Total) will get your connexion throttled to 1 Tile per 5 seconds or 5 per seconds respectively. I am sad to take such measures which could well lead to collateral damage but unfortunetly I haven't a strong enough server to handle that CPU load.

Current mod_tile config :
```
  ModTileThrottlingTiles 8000 5
  ModTileThrottlingRenders 2000 0.2
```

## Funding

To help financing for server costs and maintaining the service functionnal, please chech the [Funding openmaps.fr](https://openmaps.fr/donate)

## Status of the tile.openmaps.fr service

* 2025-06-30 : <span style="background-color:lime;font-weight:bold; padding: 1pt">server running OK</span>
* Datas are from 2025-04-15 (this information is manually updated if I don't forget !)
<!--
Examples to copy :
* 2013-03-30 : <span style="background-color:lime;font-weight:bold; padding: 1pt">db not too old and server running OK</span>
* 2012-04-01 : <span style="background-color:yellow;font-weight:bold; padding: 1pt">Server running OK, but db is old due to licence change</span>
* 2025-04-25 : <span style="background-color:yellow;font-weight:bold; padding: 1pt">Server running OK, but slow response time due to DB upgradee inducing re-rendering for a few days</span>
<span style="background-color:lime;font-weight:bold; padding: 1pt">db up to date and server running OK</span>
<span style="background-color:yellow;font-weight:bold; padding: 1pt">Server running OK, but db is old and catching up</span>
<span style="background-color:orange;font-weight:bold; padding: 1pt">Server is in degraded mode, only old tiles are served, generation of new is not possible</span>
<span style="background-color:red;font-weight:bold; padding: 1pt">Service is DOWN : reason and back online estimated date</span>
<span style="background-color:orange;font-weight:bold; padding: 1pt">Service is SLOW : One crached disk brought the RAID0 array down, it was replaced but lots of tiles were lost and re-rendering is at full speed (which means it is very slow !)</span>
<span style="background-color:red;font-weight:bold; padding: 1pt">* 2013-05-24 Service is DOWN : The RAID 0 array holding the database and tile failed due to a disk drive crash, waiting for replacement and database rebuild, might take a few days before back online</span>
-->
