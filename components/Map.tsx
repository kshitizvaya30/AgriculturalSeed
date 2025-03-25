'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface GoogleMapsType {
  maps: {
    Map: new (element: HTMLElement, options: { center: { lat: number; lng: number }; zoom: number }) => any;
    Marker: new (options: { position: { lat: number; lng: number }; map: any; title?: string }) => any;
  };
}

declare global {
  interface Window {
    google: GoogleMapsType;
    initMap: () => void;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current && mapRef.current) {
      const initMap = () => {
        const map = new window.google.maps.Map(mapRef.current as HTMLElement, {
          center: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 26.9124, lng: 75.7873 },
          map: map,
          title: "IndisInc"
        });
      };

      if (typeof window.google !== 'undefined') {
        initMap();
      } else {
        window.initMap = initMap;
      }
      isLoaded.current = true;
    }
  }, []);

  return (
    <>
      <div ref={mapRef} className="h-full w-full" />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}
        strategy="lazyOnload"
      />
    </>
  );
}
