#!/bin/bash
# Régénère les pages HTML du site à partir des fichiers markdown (pandoc + templates/page.html)
set -e
cd "$(dirname "$0")"

build() { # fichier.md  sortie.html  titre
    pandoc "$1" --template=templates/page.html --metadata title="$3" -o "$2"
    echo "$1 -> $2"
}

build README.md            about-openmaps.fr.html "About openmaps.fr"
build donate.md            donate.html            "Funding - openmaps.fr"
build tile-usage-policy.md tile-usage-policy.html "Tile usage policy - openmaps.fr"
