import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


function BasicParkInfo(props) {
  return(
 
     <Row>
       <Col md={12}>
         <Jumbotron>
           <h2>{props.heading}</h2>
           <p>{props.description}</p>
         </Jumbotron>
       </Col>
     </Row>

  )
}

export default BasicParkInfo;