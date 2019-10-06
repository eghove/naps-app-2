import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function GeneralWeatherInfo(props) {
  return (
    <Row className="generalInfoRow">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>General Weather Information</h3>
            </Card.Title>
            <Card.Text>
              <p>{props.weatherInfo}</p>
            </Card.Text>
          </Card.Body>
        </Card>


      </Col>
    </Row>
  )

}
export default GeneralWeatherInfo