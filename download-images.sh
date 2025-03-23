#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p public/images/cars

# Download Corolla images
curl -o public/images/cars/corolla-1.jpg "https://placehold.co/800x600/silver/white?text=Toyota+Corolla+1"
curl -o public/images/cars/corolla-2.jpg "https://placehold.co/800x600/silver/white?text=Toyota+Corolla+2"
curl -o public/images/cars/corolla-3.jpg "https://placehold.co/800x600/silver/white?text=Toyota+Corolla+3"

# Download Civic images
curl -o public/images/cars/civic-1.jpg "https://placehold.co/800x600/black/white?text=Honda+Civic+1"
curl -o public/images/cars/civic-2.jpg "https://placehold.co/800x600/black/white?text=Honda+Civic+2"
curl -o public/images/cars/civic-3.jpg "https://placehold.co/800x600/black/white?text=Honda+Civic+3"

# Download Compass images
curl -o public/images/cars/compass-1.jpg "https://placehold.co/800x600/white/black?text=Jeep+Compass+1"
curl -o public/images/cars/compass-2.jpg "https://placehold.co/800x600/white/black?text=Jeep+Compass+2"
curl -o public/images/cars/compass-3.jpg "https://placehold.co/800x600/white/black?text=Jeep+Compass+3" 