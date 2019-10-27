import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';



function ResultsDisplay({ children }) {
  return (
    <Row>
      <Col md={12}>
        <ListGroup>{children}</ListGroup>
      </Col>
    </Row>

  )
}
export default ResultsDisplay;


export function ResultsDisplayItem({ park_name, park_description, park_code }) {
  return (
    <ListGroup.Item>
      <Row >
        <Col md={12}>
          <h2>{park_name}</h2>
          <p>
            {park_description}
          </p>
          <p className="float-right">
            <a href={"/details/" + park_code}>Learn More!</a>
          </p>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}