import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function CampgroundsInfo({ children }) {
  return (
    <Row className="campgroundResultsHolder">
      <Col md={12}>
        <h3 className="card">Campgrounds</h3>
        <ListGroup>{children}</ListGroup>

      </Col>
    </Row>
  )
}
export default CampgroundsInfo;

export function CampgroundItem({ name, description, totalsites, tentsites, electrical, potablewater, showers, cellservice }) {
  return (

    <Row className="campgroundResults">
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <hr />

            <Row>
              <Col md={6}>
                <Card.Text className="text-left">
                  <p className="subheader">Description</p>
                  <p>{description}</p>
                </Card.Text>
              </Col>
              <Col md={1}></Col>
              <Col md={5}>
                <Card.Text className="text-left">
                  <p className="subheader">Quick Facts:</p>
                  <ul>
                    <li>Total Sites: {totalsites}</li>
                    <li>Tent Only Sites: {tentsites}</li>
                    <li>Electrical Hookups: {electrical}</li>
                    <li>Potable Water: {potablewater}</li>
                    <li>Showers: {showers}</li>
                    <li>Cellphone Reception: {cellservice}</li>
                  </ul>
                </Card.Text>
              </Col>

            </Row>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export function NoCampgroundsFound() {
  return (
    <Row className="campgroundResultsHolder">
      <Col md={12}>
        <h3 className="card">No Campgrounds Found!</h3>
      </Col>
    </Row>
  )
}