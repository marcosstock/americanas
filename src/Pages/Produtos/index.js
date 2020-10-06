import React from 'react';

import {Card, Button,Container,Row, Col  } from 'react-bootstrap';
import top2 from '../../imagens/top2.webp';
import mouse from '../../imagens/mouse.webp';
import motorola from '../../imagens/motorola.webp';
import rayban from '../../imagens/rayban.webp';
import samsung from '../../imagens/samsung.webp';
export default function Produtos() {
  return (
    
    <Card.Body>
    <Card.Text>
    <img src={top2} alt=""/>
    </Card.Text>
    
    
    <Container>
    <Row md={4}>
    <Col>
    <Card style={{ width: '18rem' }}>
    
    
    <Card.Body>
    <Card.Title>
    <h1>MOTOROLA</h1>
    </Card.Title>
    <Card.Text>
    <img src={motorola} alt=""/>
    </Card.Text>
    <h1>OFERTA R$50,00</h1>
    </Card.Body>
    
    <Card.Body>
    <Card.Title>
    <h1>MOUSE</h1>
    </Card.Title>
    <Card.Text>
    <img src={mouse} alt=""/>
    </Card.Text>
    <h1>OFERTA R$50,00</h1>
    </Card.Body>
    
    
    <Card.Body>
    <Card.Title>
    <h1>SAMSUNG</h1>
    </Card.Title>
    <Card.Text>
    <img src={samsung} alt=""/>
    </Card.Text>
    <h1>OFERTA R$50,00</h1>
    </Card.Body>
    
    <Card.Body>
    <Card.Title>
    <h1>RAY-BAN</h1>
    </Card.Title>
    <Card.Text>
    <img src={rayban} alt=""/>
    </Card.Text>
    <h1>OFERTA R$50,00</h1>
    </Card.Body>
    
    
    
    </Col>
    </Row>
    </Container>
    
    
    </Card.Body>
    
    );
  }