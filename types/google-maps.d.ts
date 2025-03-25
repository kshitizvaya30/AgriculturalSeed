declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }

  namespace google.maps {
    class Map {
      constructor(element: HTMLElement, options: MapOptions);
    }

    class Marker {
      constructor(options: MarkerOptions);
    }

    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
    }

    interface MarkerOptions {
      position: LatLngLiteral;
      map: Map;
      title?: string;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
}
