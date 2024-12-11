import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navigation.css'; // Import the custom CSS file

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by reading from localStorage
    const loggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home"><b>DayLy-Blog</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            {isLoggedIn && <Nav.Link as={Link} to="/blog">Blog</Nav.Link>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            {!isLoggedIn ? (
              <>
                <Button 
                  as={Link} 
                  to="/login" 
                  className="btn-custom me-2"
                >
                  Login
                </Button>
                <Button 
                  as={Link} 
                  to="/register" 
                  className="btn-custom-outline"
                >
                  Register
                </Button>
              </>
            ) : (
              <Button 
                variant="outline-light" 
                onClick={handleLogout}
                className="btn-custom-outline"
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
