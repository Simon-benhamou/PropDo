import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Map() {
const mapContainerRef = useRef(null);
const [lng, setLng] = useState(34.855499);
const [lat, setLat] = useState(32.109333);
const [zoom, setZoom] = useState(6.5);
const [mapObject, setMap] = useState();

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25kYXZpZGIiLCJhIjoiY2wwYmJmdHhiMDk1NjNqbWp0MGg5NGZqYyJ9.1fPsptzV6CcSlibJmULnqA'

useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng,lat],
    zoom: 13,
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
