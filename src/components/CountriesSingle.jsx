import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Map from './Map';

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
    console.log(country.capital)

  }, [country.capital]);


// _________________

  const borderCountries = country.borders;


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
        <h3>{country.capital}</h3>
        <p>{country.region}</p><br />
        <div className='border-countries'>
         <p>Bordering countries:</p>
       <small>{country.borders.join(', ')}</small>
        </div>
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
      {/* <Map /> */}
      <Row>
        <Col>
        <Button className='c-single-btn' variant="light" onClick={() => navigate('/countries')}>Go Back</Button>
        </Col>
      </Row>

    </Container>
  );
};

export default CountriesSingle;
