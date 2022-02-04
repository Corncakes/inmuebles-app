import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class PrediosMarkerService {
  predios = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [10.423145, -75.547207]
        },
        "properties": {
          "name": "Test"
        }
      }
    ]
  };

  constructor() { }

  makePrediosMarkers(map: L.Map): void {
      for (const c of this.predios.features) {
        //const lon = c.geometry.coordinates[0];
        //const lat = c.geometry.coordinates[1];
        //const marker = L.geoJSON(c);

        //marker.addTo(map);
      }
  }
}
