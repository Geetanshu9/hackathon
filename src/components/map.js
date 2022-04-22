import mapboxgl from 'mapbox-gl';
import * as React from 'react';
import Map from 'react-map-gl';

function Map_() {
    const [viewport,setviewport]=useState({
        latitude:45.42,
        longitude:-75.65,
        width:"100vw",
        height:"100vh",
        zoom:10
    })
  return (
    <mapboxgl {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiaGFyc2hpdDA1NzEiLCJhIjoiY2wyOHN6MmFxMGIwdzNrbWVvaDF5aWN0aCJ9.ZLCf69QtvSRATPEJdLSy-w">
        here
    </mapboxgl>
  );
}

export default Map_;