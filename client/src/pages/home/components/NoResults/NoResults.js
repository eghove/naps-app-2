import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function NoResults(props) {
  return (
    <Row className={props.customClass}>
      <Col md={12}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{props.badSearchHeading}</h2>
            <p>{props.badSearchText}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default NoResults;