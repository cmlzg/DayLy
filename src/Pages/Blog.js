import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Blog() {
  const [posts, setPosts] = useState(() => {
    // Retrieve posts from local storage when the component mounts
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [
      {
        id: 1,
        title: 'My First Blog Post',
        content: 'This is the content of my very first blog post. Welcome to our blog!',
        author: 'Blog Admin',
        date: '2024-12-11'
      }
    ];
  });

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: null
  });

  // Save posts to local storage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewPost(prevState => ({
        ...prevState,
        image: URL.createObjectURL(e.target.files[0])
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!newPost.title || !newPost.content) {
      alert('Please fill in all required fields');
      return;
    }

    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      author: 'Current User',
      date: new Date().toISOString().split('T')[0]
    };

    setPosts([...posts, post]);

    // Reset form
    setNewPost({
      title: '',
      content: '',
      image: null
    });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
        <h2 className="mb-4" style={{ color: 'black' }}>Blog Posts</h2>
          {posts.map(post => (
            <Card key={post.id} className="mb-3">
              {post.image && (
                <Card.Img 
                  variant="top" 
                  src={post.image} 
                  alt={post.title} 
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.author} - {post.date}
                </Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={4}>
        <h3 style={{ color: 'black' }}>Create New Post</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5}
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image (Optional)</Form.Label>
              <Form.Control 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
              />
              {newPost.image && (
                <img 
                  src={newPost.image} 
                  alt="Preview" 
                  className="img-fluid mt-2" 
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit" 
                className="w-100" 
                style={{ backgroundColor: '#8bc34a', borderColor: '#8bc34a' }}
              >
              Publish Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;