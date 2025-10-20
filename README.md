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

## Hardware used (From 2022 to 2025)

Current server hosting the map is kindly privided by the company I work for, but during 2026 it will likely be decomissionned and shut down: 
* Xeon 4 cores/8 threads @2.8 Ghz 
* 96 GB DDR3 ECC
* Hardware raid 5 of 4 12TB rotative disks (no ssd)
* ~4TB used (600GB for OSM data in Postgres + 300GB contours in Postgres + 200GB of various shape and tif files + ~1500GB of Tiles of OpenHikingMap and ~1500GB for OpenTopoMap)

Also, unfortunetly, this server is too slow for regular imports, too slow for high usage mainly because of the rotative disks. Such a setup requires NVMe drives.

## 2026+
That is why, as of 2025-10-21, I'm searching for alternatives. Either in the form of the cheapest server I can rent, or, if I get funds, 2 identical servers to organise redundancy and failover in case of problems, or during re-import or any type of upgrades.
This OVHcloud server (costing ~ 1000€/year) or equivalent should do :
* https://eco.ovhcloud.com/fr/soyoustart/sys-1/ (in Configuration 64GB RAM, 2 * 2To NVMe, 6 Xeon cores @3.7Ghz)

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
