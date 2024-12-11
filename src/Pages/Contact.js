import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // If all validations pass
    console.log('Form submitted', formData);
    setSubmitted(true);
    setError('');

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container className="mt-5">
  <Row className="mb-5">
    <Col>
      <h1 className="text-center text-black">Contact Us</h1>
      <p className="lead text-center text-black">
        Have a question, suggestion, or just want to say hello? 
        We'd love to hear from you!
      </p>
    </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md={8}>
          {submitted && (
            <Alert variant="success">
              Thank you for your message! We'll get back to you soon.
            </Alert>
          )}

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 custom-send-message-button"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <h3 className="text-black">Our Contact Information</h3>
            <p className="text-black">
              Email: contact@daylyblog.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 420 Sesame Street, Angeles City, Pampanga State 420
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;