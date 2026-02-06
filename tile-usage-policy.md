---
title: Tile Usage Policy for the tile.openmaps.fr service
---

[Openmaps.fr (See presentation page)](https://openmaps.fr/about-openmaps.fr.html) 's maps : [OpenHikingMap](https://wiki.openstreetmap.org/wiki/OpenHikingMap) and [OpenTopoMaps](https://github.com/sletuffe/OpenTopoMap) are free software mapnik styles. But delivering tiles has a cost and our **servers are not free**: they are [funded by donations](https://openmaps.fr/donate), and capacity is limited. To protect the service from high usage and help fund server costs, you **must** follow this policy when using tiles from `tile.openmaps.fr`.

OpenMaps.fr's maps are meant to be used freely for non commercial projects because our ressources are limited. If the usage of those tiles is for a free projects (free as in "free beer") and the volume not too high, usage should be allowed.

There is no precise definition for this "too high volume", but as a rule of thumb, downloading less that 500k tiles per month will be considered acceptable "low volume", for higher volume in free projects, we might need an arangement.


You are not required to use a specific API, apikey, or prior subscription. However, heavy or inappropriate use harms others ability to view the map. We may block access, without notice, if your usage degrades the service. We may try to contact you if possible, but cannot guarantee this.

Availability is **best-effort**: there is **no SLA or guarantee**. 

If you cannot meet these requirements, please use an **alternative OSM-derived service** (see below), or run your own.

---

## 1. Tile Usage Policy for the tile.openmaps.fr service 

**You must:**

* Access OpenTopoMaps with this URL `https://tile.openmaps.fr/opentopomap/{z}/{x}/{y}.png`.
* Access OpenHikingMap with this URL  `https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png`. (Older URL will one day be removed)
* Provide visible and readable attribution without requiring individuals to interact with the map or produced work to see the **licence attribution**, for OpenStreetMap contributors, for the style's information, and a donation link to encourage your users to contibute to the openmaps.fr server(s) cost. (In the same way you would with the [OSM Attrubution guidelines](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)

For OpenHikingMaps's attribution please use the following html code:
```
'<a href="https://wiki.openstreetmap.org/wiki/OpenHikingMap">&copy; OpenHikingMap</a> <a href="https://openmaps.fr/donate">❤️ Donation</a> <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
```
For OpenTopoMaps's attribution please use 
```
'<a href="https://github.com/sletuffe/OpenTopoMap">&copy; OpenTopoMap-R</a> <a href="https://openmaps.fr/donate">❤️ Donation</a> <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
```

In both attribution texte, there is a link to the style's explanation page, a donation link because users tends to know nothing about how are those map funded, and a attribution to OpenStreetMap datas.


* Send a **valid HTTP User-Agent** that clearly identifies your application and not you library's default (e.g. `okhttp/x.y`, `Go-http-client/1.1`, `python-requests/`) 
* From web pages, ensure a valid **HTTP Referer** header is sent.

**And don't:**

* Bulk download ("scrape") tiles or offer prefetch features. apache mod_tile has been configure to rate limit high volume from single IP
* Masquerade as another app's User-Agent, or rely on a library's default User-Agent.


## 2. Changes and enforcement

This policy may change at any time to reflect project needs and constraints. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.

We may try to contact you (for example, via your `User-Agent` or public contact details) if there is a problem, but this may not always be possible. Access may be **blocked without prior notice**.

## 3. Alternatives: OSM-derived services

**Hosted tile services based on OSM data**

* Community list: [https://wiki.openstreetmap.org/wiki/Raster_tile_providers](https://wiki.openstreetmap.org/wiki/Raster_tile_providers)

**Commercial providers**

* See: [Commercial OSM Software and Services](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services) and [https://switch2osm.org/providers/](http://switch2osm.org/providers/)

**Run your own tiles**

* Up-to-date guidance: [http://switch2osm.org/](http://switch2osm.org/)

