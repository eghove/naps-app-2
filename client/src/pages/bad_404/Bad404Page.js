import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './bad404Page.css';


function Bad404Page() {
  return (
    <Row className="bad404Page-container">
      <Col md={{ span: 10, offset: 1 }} className={"text-left text-holder"}>
        <h2>Page Not Found</h2>
        <p>
          Regrettably, this page was not found. Please <a href="/">click here to navigate back Home.</a>
        </p>
      </Col>
    </Row>
  )
}

export default Bad404Page;