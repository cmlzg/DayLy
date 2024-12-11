import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import '../Styles/Login.css'; 
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      
      setError('');
      setSuccess(`Welcome back, ${user.firstName}! Redirecting to the homepage...`);
      localStorage.setItem('loggedIn', 'true'); 
      localStorage.setItem('currentUser', JSON.stringify(user)); 

      
      setTimeout(() => {
        navigate('/home'); 
      }, 2000);
    } else {
      setError('Invalid email or password. Please try again.');
      setSuccess(''); 
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f7f7f7' }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="card shadow-sm p-5">
            
          <h2 className="text-center mb-4" style={{ color: 'black' }}>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? <a href="/register">Register here</a>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

