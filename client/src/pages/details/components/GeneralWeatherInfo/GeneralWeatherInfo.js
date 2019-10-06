import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GeneralWeatherInfo(props) {
  return (
    <Row>
      <Col md={12}>
        <h3>General Weather Information</h3>
        <p>{props.weatherInfo}</p>
      </Col>
    </Row>
  )

}
export default GeneralWeatherInfo