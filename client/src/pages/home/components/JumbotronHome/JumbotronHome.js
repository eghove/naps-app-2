import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function JumbotronHome(props) {
  return (
    <Row>
      <Col md={12}>
        <Jumbotron>
          <h1>{props.heading}</h1>
          <p>
            {props.hero}
          </p>
        </Jumbotron>

      </Col>
    </Row>
  )
}

export default JumbotronHome;