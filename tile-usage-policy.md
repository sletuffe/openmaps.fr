---
title: Tile Usage Policy for the tile.openmaps.fr service
---

[Openmaps.fr (See presentation page)](https://openmaps.fr/about-openmaps.fr.html)'s maps : [OpenHikingMap](https://wiki.openstreetmap.org/wiki/OpenHikingMap) and [OpenTopoMap-R](https://github.com/sletuffe/OpenTopoMap) are free software mapnik styles. But delivering tiles has a cost and my **servers are not free**: they are [funded by donations](https://openmaps.fr/donate), and capacity is limited. To protect the service from high usage and help fund server costs, you **must** follow this policy when using tiles from `tile.openmaps.fr`.

OpenMaps.fr's maps are meant to be used freely for non-commercial projects because my resources are limited. If the usage of those tiles is for a free project (free as in "free of charge") and the volume not too high, usage should be allowed.

There is no precise definition for this "too high volume", but as a rule of thumb, downloading less than 400k tiles per month will be considered acceptable "low volume". For higher volume in free projects, please contact me for an arrangement.


You are not required to use a specific apikey or prior subscription. However, heavy or inappropriate use harms others' ability to view the map. I may block access, without notice, if your usage degrades the service. I may try to contact you if possible, but cannot guarantee this.

Availability is **best-effort**: there is **no SLA or guarantee**.

**If you are interested in a commercial service with fewer restrictions and an SLA, please contact me.**


---

## 1. Rules

**You must:**

* Access OpenTopoMap-R with this URL `https://tile.openmaps.fr/opentopomap/{z}/{x}/{y}.png`.
* Access OpenHikingMap with this URL  `https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png`. (Older URL will one day be removed)
* Provide visible and readable attribution without requiring individuals to interact with the map or produced work to see the **licence attribution**, for OpenStreetMap contributors, for the style's information, and a donation link to encourage your users to contribute to the openmaps.fr server(s) cost (in the same way you would with the [OSM Attribution guidelines](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)).

For OpenHikingMap's attribution please use the following html code:
```
'<a href="https://wiki.openstreetmap.org/wiki/OpenHikingMap">&copy; OpenHikingMap</a> <a href="https://openmaps.fr/donate">❤️ Donation</a> <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
```
For OpenTopoMap-R's attribution please use:
```
'<a href="https://github.com/sletuffe/OpenTopoMap">&copy; OpenTopoMap-R</a> <a href="https://openmaps.fr/donate">❤️ Donation</a> <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
```

* Send a **valid HTTP User-Agent** that clearly identifies your application and not your library's default (e.g. `okhttp/x.y`, `Go-http-client/1.1`, `python-requests/`)
* From web pages, ensure a valid **HTTP Referer** header is sent.

**And don't:**

* Bulk download ("scrape") tiles or use prefetch features.
* Masquerade as another app's User-Agent, or rely on a library's default User-Agent.


## 2. Changes and enforcement

This policy may change at any time to reflect project needs and constraints. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.

I may try to contact you (for example, via your `User-Agent` or public contact details) if there is a problem, but this may not always be possible. Access may be **blocked without prior notice**.
