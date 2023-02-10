import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCountries } from '../features/countriesSlice';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

const Countries = () => {

  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);

  const [search, setSearch] = useState('')

  // console.log("Search: ", search)
  // console.log('Countries list', countriesList)

  useEffect(() => {
    dispatch(initializeCountries())
  },[dispatch]);

  // We will be replacing this with data from our API.
  const country = {
    name: {
      common: 'Example Country'
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: '18rem' }}
              type="search"
              className="me-2 "
              placeholder="Search for countries"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        {countriesList.map((country) => (
           <Col className="mt-5">
           <LinkContainer
             to={`/countries/${country.name.common}`}
             state={{ country: country }}
           >
             <Card className="h-100">
               <Card.Body className="d-flex flex-column">
                 <Card.Title>{country.name.common}</Card.Title>
                 <Card.Subtitle className="mb-5 text-muted">
                   {country.name.official}
                 </Card.Subtitle>
                 <Card.Img
                        src={country?.flags?.svg}
                        alt={country.name.common}
                      />
                 <ListGroup
                   variant="flush"
                   className="flex-grow-1 justify-content-end"
                 >
                   <ListGroup.Item>
                     <i className="bi bi-translate me-2"></i>
                     <span>
                            {
                              country.languages
                                ? Object.values(country.languages).join(", ")
                                : "---"
                            }
                          </span>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <i className="bi bi-cash-coin me-2"></i>
                     <span>
                            {country.currencies
                              ? Object.values(country.currencies)
                                  .map((currency) => currency.name)
                                  .join(", ")
                              : "---"}
                          </span>
                   </ListGroup.Item>

                   <ListGroup.Item>
                     <i className="bi bi-people me-2"></i>
                     <span>{country.population.toLocaleString('en-GB')}</span>
                   </ListGroup.Item>
                 </ListGroup>
               </Card.Body>
             </Card>
           </LinkContainer>
         </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Countries;
