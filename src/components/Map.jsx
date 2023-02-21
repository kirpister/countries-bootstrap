import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux'; 
import axios from 'axios';





const containerStyle = {
  width: '400px',
  height: '400px'
};

const Map = ( { country } ) => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    // const country = useSelector((state) => state.countries.countries);
  
    useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
          const [lat, lng] = response.data[0].latlng;
          setLat(lat);
          setLng(lng);
        })

        console.log(lat)


    }, [country]);
   

 
    const center = {
        lat: {lat},
        lng: {lng}
      };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE}
    >
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;