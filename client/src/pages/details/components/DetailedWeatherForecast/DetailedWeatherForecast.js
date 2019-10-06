import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function DetailedWeatherForecast({ children }) {
  return (
    <Row>
      <Col md={10}>
        <h3>Detailed Weather Forecast</h3>
        <ListGroup>{children}</ListGroup>

      </Col>
    </Row>
  )
}
export default DetailedWeatherForecast;

export function WeatherForecastItem({name, temperature, forecast}) {
  return (
    <ListGroup.Item>
      <Row>
        <Col md={12}>
          <h4>{name}</h4>
          <p>Temperature: {temperature} degrees F</p>
          <p>Forecast: {forecast}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}