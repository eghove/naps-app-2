import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function CampgroundsInfo({ children }) {
  return (
    <Row>
      <Col md={10}>
        <h3>Campgrounds</h3>
        <ListGroup>{children}</ListGroup>

      </Col>
    </Row>
  )
}
export default CampgroundsInfo;

export function CampgroundItem({name, description}) {
  return (
    <ListGroup.Item>
      <Row>
        <Col md={12}>
          <h4>{name}</h4>
          <p>{description}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}