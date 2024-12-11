import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Web Development ',
      excerpt: 'A beginner\'s guide to understanding the basics of web development and creating your first website.',
      author: 'Raemart Millare',
      date: 'December 12, 2024'
    },
    {
      id: 2,
      title: 'ReactJs',
      excerpt: 'Introduction to ReactJs.',
      author: 'Carlex Lazaga',
      date: 'December 1, 2024'
    }
  ];

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '10px'
  };

  const headerStyle = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  };

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center" style={{ fontWeight: '700', color: '#000000' }}>Welcome to Our Blog</h1>
          <p className="text-center lead" style={{ fontSize: '1.2rem', color: '#000000' }}>
            Discover insightful articles, tutorials, and stories from our community.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
        <h2 style={{ color: 'black' }}>Featured Posts</h2>
          {featuredPosts.map(post => (
            <Card key={post.id} className="mb-4" style={cardStyle}>
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', color: '#007bff' }}>{post.title}</Card.Title>
                <Card.Text style={{ fontSize: '1rem', color: '#5a5a5a' }}>{post.excerpt}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    By {post.author} on {post.date}
                  </small>
                  <Button variant="primary" size="sm">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={4}>
          <Card className="mb-4" style={cardStyle}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.3rem', color: '#000000' }}>About This Blog</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#000000' }}>
                We\'re passionate about sharing knowledge, insights, 
                and stories that inspire and inform our readers.
              </Card.Text>
              <Button 
                variant="outline-primary" 
                href="/about" 
                className="custom-outline-btn"
              >Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.3rem', color: '#000000' }}>Stay Connected</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#000000' }}>
                Subscribe to our newsletter for the latest updates and articles.
              </Card.Text>
              <div className="d-grid">
                <Button variant="success">Subscribe</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
