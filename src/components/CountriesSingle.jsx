import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';


const CountriesSingle = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.country;

  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_API_KEY_WEATHER}`
    ).catch((error) => {
      setError(true)
    })
    .then((res) => {
      setWeather(res.data)
      setLoading(false)
    })
  
  }, [country.capital]);


// _________________


  if (loading) {
    return (
      <Col className='text-center m-5'>
        <Spinner
          animation= 'border'
          role= 'status'
          className= 'center'
          variant= 'info'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
      </Col>
    )
  }


  return (

    <Container>
      <Row className="m-5">
        <Col>
        {''}
          <Image className='capital-img' thumbnail src={`https://source.unsplash.com/650x500/?${country.capital}`} />
        </Col>
        <Col className='country-info'>
        <h2 className='display-4'>{country.name.common}</h2>
        <h3>Capital: {country.capital}</h3>
        <p>Region: {country.region}</p><br />
        {/* <div className='border-countries'>
         <p>Bordering countries:</p>
       <small>{country.borders.join(', ')}</small>
        </div> */}
        {!error && weather && (
          <div className='weather-box'>
            <p>
              Right now it is {parseInt(weather.main.temp)} °C in {country.capital} and {weather.weather[0].description}.
            </p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </div>
        )}
        </Col>
      </Row>
      <Row>
        <div className='map-div'>
      <iframe
      title="Google Map"
      width="91%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=${country.capital}&zoom=12&key=${process.env.REACT_APP_API_KEY_GOOGLE}`}
    />
    </div>
        <Col>
        <Button className='c-single-btn' variant="light" onClick={() => navigate('/countries')}>Go Back</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default CountriesSingle;
