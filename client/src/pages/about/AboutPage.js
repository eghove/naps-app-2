import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Helmet } from 'react-helmet';

import './aboutPage.css';

function AboutPage(props) {
  return (
    <div className="aboutPage-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About NaPS App 2.0</title>
      </Helmet>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h2>About NaPS App 2.0</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }} className={"text-left text-holder"}>
          <p>
            NaPS App 2.0 is a project by Eric Hove. It is an extension of the original NaPS App built by Eric Hove, Alan Wagner, and Andrew Burns. <a rel="noopener noreferrer" target="_blank" href="https://github.com/eghove/NaPS-App">Click here to learn more about the original NaPS App.</a>
          </p>
          <p>
            NaPS App 2.0 aims to make the public data hosted by the National Parks Service (NPS) and the National Oceanic and Atmospheric Administration (NOAA) accessible to users planning a trip to a National Park in the United States.
          </p>
          <p>
            Additional updates are coming. If you'd like to learn more about Eric Hove, <a rel="noopener noreferrer" target="_blank" href="https://eghove.github.io">click here.</a> If you'd like to view the source code for NaPS App 2.0, <a rel="noopener noreferrer" target="_blank" href="https://github.com/eghove/naps-app-2">click here.</a>
          </p>
          <p>
            NaPS App 2.0 last updated on {props.updated_date}.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutPage;