import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  const teamMembers = [
    {
      name: 'Raemart Millare',
      role: 'Front End Developer & UI/UX Designer',
      bio: 'Designs user-friendly interfaces and ensures seamless user experiences.',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/468652051_9129709090413105_3266834896116395473_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFSdWmwuu1eyAQ90OfH6BC3Q4JDcR1SHZFDgkNxHVIdkTWvfrCdPpr8-0xXH3qhYE949TQYABH5by1L-60btXb3&_nc_ohc=kkVmEe68UYAQ7kNvgFyMM1C&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=AYoAK-uHr_GrYGW2sXkCPRr&oh=00_AYD9UaV1cXRpmW7WTo6fe4MRl0ZekkDF3oQB4Gmf0u-S4g&oe=675F3513'
    },
    {
      name: 'Carlex Lazaga',
      role: 'Front & Back-End Developer',
      bio: 'Builds responsive and dynamic web applications.',
      image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/345621084_629718899052983_8495262566551005408_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGdR5gcjfFAy7iBauT35Uec0eQgSSNTiuvR5CBJI1OK66oi13Lz2cM3EDIx7k8zmQ-6j6weabqPO1vVe4Wmp9at&_nc_ohc=idKuHNyoxBAQ7kNvgEYx51P&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFrH1NktY6yL3RO0m6nz15tltjwuHblwZU0e6ZM8lgkMw&oe=6780B499'
    }
  ];

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
    margin: '0 auto'
  };

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center text-black">About Our Blog</h1>
          <p className="lead text-center text-black">
            We are a community of passionate developers and storytellers 
            dedicated to sharing knowledge and inspiring others.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
        <h2 className="mb-4 text-black">Our Story</h2>
          <p className="text-black">
            Established in 2024, our blog was born out of a simple yet powerful vision: to build a platform where knowledge flows freely and creativity thrives without limits.
          </p>
          <p className="text-black">
            We cover a wide range of topics, from technology and personal growth to web development, offering our readers valuable insights and inspiration.
          </p>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="text-black">Our Vision</Card.Title>
              <Card.Text className="text-black">
                To empower individuals through knowledge sharing, 
                foster a learning community, and inspire innovative thinking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Meet Our Team</h2>
        </Col>
      </Row>

      <Row>
        {teamMembers.map((member, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="text-center h-100">
              <Card.Img 
                variant="top" 
                src={member.image} 
                alt={member.name} 
                style={imageStyle} 
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {member.role}
                </Card.Subtitle>
                <Card.Text>{member.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
