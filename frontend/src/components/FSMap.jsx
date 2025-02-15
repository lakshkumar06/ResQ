import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const fireStations = [
    {
      name: "Fire Station 1",
      address: "411 East Main Street, Norman, OK 73069",
      phone: "(405) 292-9780",
      coordinates: [35.2226, -97.4395]
    },
    {
      name: "Fire Station 2",
      address: "2211 West Boyd Street, Norman, OK 73069",
      phone: "(405) 292-9780",
      coordinates: [35.2125, -97.4861]
    },
    {
      name: "Fire Station 3",
      address: "500 East Constitution Street, Norman, OK 73072",
      phone: "(405) 292-9780",
      coordinates: [35.2041, -97.4339]
    },
    {
      name: "Fire Station 5",
      address: "1050 168th Avenue NE, Norman, OK 73026",
      phone: "(405) 292-9780",
      coordinates: [35.2901, -97.2815]
    },
    {
      name: "Fire Station 6",
      address: "7405 East Alameda Drive, Norman, OK 73026",
      phone: "(405) 292-9780",
      coordinates: [35.2210, -97.3440]
    },
    {
      name: "Fire Station 7",
      address: "2207 Goddard Avenue, Norman, OK 73069",
      phone: "(405) 292-9780",
      coordinates: [35.2351, -97.4857]
    },
    {
      name: "Fire Station 8",
      address: "3901 36th Avenue NW, Norman, OK 73072",
      phone: "(405) 292-9780",
      coordinates: [35.2490, -97.4950]
    },
    {
      name: "Fire Station 9",
      address: "3001 East Alameda Street, Norman, OK 73071",
      phone: "(405) 292-9780",
      coordinates: [35.2215, -97.3960]
    }
  ];
  
  const normalIcon = L.icon({
    iconUrl: '/fireIcon.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  const FSMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [showCircles, setShowCircles] = useState(false);
    const markers = useRef([]);
    const circles = useRef([]);
  
    useEffect(() => {
      if (mapRef.current && !mapRef.current._leaflet_id) {
          const newMap = L.map(mapRef.current, {
              zoomControl: false 
          }).setView([35.2226, -97.4395], 12);
  
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(newMap);
  
        setMap(newMap);
      }
    }, []);
  
    useEffect(() => {
      if (map) {
        markers.current.forEach(marker => map.removeLayer(marker));
        circles.current.forEach(circle => map.removeLayer(circle));
        markers.current = [];
        circles.current = [];
  
        fireStations.forEach(station => {
          const marker = L.marker(station.coordinates, { icon: normalIcon })
            .addTo(map)
            .bindPopup(`
              <div class="popup text-[15px]">
                <h2>${station.name}</h2>
                <p>${station.address}</p>
                <p>Phone: ${station.phone}</p>
                <div class="flex text-[14px] gap-[0.5em] justify-center">
                  <button class="mainBtnRed px-[1em] py-[0.7em] rounded-[8px]">Request Items</button>
                  <button class="mainBtnRed px-[1em] py-[0.7em] rounded-[8px]">Send Update</button>
                </div>
              </div>
            `);
          markers.current.push(marker);
  
          if (showCircles) {
            const circle = L.circle(station.coordinates, {
              color: 'red',
              fillColor: 'red',
              fillOpacity: 0.2,
              radius: 1500,
              weight: 1
            }).addTo(map);
            circles.current.push(circle);
          }
        });
      }
    }, [map, showCircles]);
  
    return (
      <div className='relative'>
        <button
          onClick={() => setShowCircles(prev => !prev)}
          className='absolute bottom-2 right-2 z-1 bg-red-900 text-white px-[0.8em] py-[0.4em] rounded-[5px] shadow-lg  text-[14px]'>
          {showCircles ? 'Hide Circles' : 'Show Circles'}
        </button>
        <div ref={mapRef} className='w-full rounded-[20px] h-[50vh] border-[1px] border-gray-200 mt-[1vw] relative z-0'></div>
      </div>
    );
  };
  
  export default FSMap;



