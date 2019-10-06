import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

function DetailedWeatherForecast({ children }) {
  return (
    <Row className="weatherForecastHolder">
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title><h3>Upcoming Weather Forecast</h3></Card.Title>
            <Card.Text>
              <CardGroup>
                {children}
              </CardGroup>
            </Card.Text>
          </Card.Body>


        </Card>

      </Col>
    </Row>
  )
}
export default DetailedWeatherForecast;

export function WeatherForecastItem({ name, temperature, forecast }) {
  return (
    // <ListGroup.Item>
    //   <Row>
    //     <Col md={12}>
    //       <h4>{name}</h4>
    //       <p>Temperature: {temperature} degrees F</p>
    //       <p>Forecast: {forecast}</p>
    //     </Col>
    //   </Row>
    // </ListGroup.Item>

    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Temperature: {temperature}&deg; F</p>
          <p><b>Forecast:</b> {forecast}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}