import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Content = (props) => {
    return (
      <Row>
        <Col sm={4}>
          <Card style={{ width: '80%' }}>
            <h2>{props.name}</h2>
            <Card.Img variant="top" src={props.imageUrl} />
            <Card.Body>
              <h3>{props.title}</h3>
              <div>
                <span>${props.price}</span>
              </div>
              <Button>Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
}

export default Content;
