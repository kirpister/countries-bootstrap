import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../assets/travelglobe.png';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';


import '../App.css';
import { logout } from '../auth/firebase';



const Layout = () => {

  const [user] = useAuthState(auth);
  return (
   
     <Container fluid>
       <Row> 
        <Navbar className='nav-bar'>
       <Link to="/"><div className='logo'><img src={logo} alt="logo" /></div></Link> 
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav>
            
                {!user ? ( <></> ) : (
                  <>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link>Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favorites">
                  <Nav.Link>Favorites</Nav.Link>
                </LinkContainer>  </>)}
               
                
                {user ? ( <></> ) : (
                  <>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>  </> )}
              </Nav>
              
            </Navbar.Collapse>
            {user ? (
            <Button className='logout-btn' onClick={() => logout()}>Logout</Button> ) : ( <></> )}
          </Container>
         </Navbar> 
      </Row> 
      
      <Row>
        
        <Outlet />
       
      </Row>
     </Container>
    
    
  );
};

export default Layout;
