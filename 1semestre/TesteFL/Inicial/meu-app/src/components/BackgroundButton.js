import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BackgroundButton = () => {
 const [hovered, setHovered] = useState(false);

 const handleMouseOver = () => {
    setHovered(true);
 };

 const handleMouseOut = () => {
    setHovered(false);
 };

 return (
    <Container fluid className="p-0" style={{ backgroundImage: `url(${imagePath})`, height: '100vh' }}>
      <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
        <Col xs={6} sm={4} md={2} className="p-0">
          <Button
            variant="light"
            style={{
              backgroundImage: `url(${imagePath1})`,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              ...(hovered && { transform: 'scale(50)', zIndex: 1000 }),
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {hovered ? <div>{newText1}</div> : <div>{buttonText1}</div>}
          </Button>
        </Col>
        <Col xs={6} sm={4} md={2} className="p-0">
          <Button
            variant="light"
            style={{
              backgroundImage: `url(${imagePath2})`,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              ...(hovered && { transform: 'scale(50)', zIndex: 1000 }),
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {hovered ? <div>{newText2}</div> : <div>{buttonText2}</div>}
          </Button>
        </Col>
      </Row>
    </Container>
 );
};

export default BackgroundButton;