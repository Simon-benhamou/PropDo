import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import * as turf from "@turf/turf";

export default function Map() {
const mapContainerRef = useRef(null);
const [lng, setLng] = useState(34.8040);
const [lat, setLat] = useState(32.0793);
const [zoom, setZoom] = useState(6.5);
const [mapObject, setMap] = useState();

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25kYXZpZGIiLCJhIjoiY2wwYmJmdHhiMDk1NjNqbWp0MGg5NGZqYyJ9.1fPsptzV6CcSlibJmULnqA'

useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng,lat],
    zoom: 9,
  });

    map.on('load', function(){
    let _center = turf.point([lng, lat]);
    let _radius = 1;
    let _options = {
    steps: 100,
    units: 'kilometers' // or "mile"
    };

    let _circle = turf.circle(_center, _radius, _options);
    map.addSource("circleData", {
        type: "geojson",
        data: _circle,
        });

    map.addLayer({
        id: "circle-fill",
        type: "fill",
        source: "circleData",
        paint: {
            "fill-color": "yellow",
            "fill-opacity": 0.2,
        },
        });
});

  map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
  })
  

  setMap(map);

},[]);


   const changeCoordinate = (coordinate) => {
    if (mapObject) {
        mapObject.setCenter(coordinate);
        mapObject.setZoom(13)
        }
    }
 const changeHandler = (e) => {
    const {name,value} = e.target
    e.preventDefault()
    name ==="longitude" && setLng(value);
    name ==="latitude" && setLat(value);
    
    console.log(lng,lat)
 }
  return (
    <div className='App'>
       <div>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>        
        <div ref={mapContainerRef} className="map-container" ></div>
       </div>
         <div className='colum'>
        <TextField
        className='longitude'
          id="outlined-number"
          label="Longitude"
          type="number"
          name="longitude"
          value={lng}
        onChange={changeHandler}
         
        />
        <TextField
        className='latitude '
          id="outlined-number"
          label="Latitude"
          type="number"
           name="latitude"
           value={lat}
          onChange={changeHandler}
        />
        <Button className='button' onClick={(e)=> changeCoordinate([lng,lat])}>Go</Button>
        </div>
    </div>
  )
}
