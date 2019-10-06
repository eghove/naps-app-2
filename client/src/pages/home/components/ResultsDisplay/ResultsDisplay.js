import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';


function ResultsDisplay({ children }) {
  return (
    <Row>
      <Col md={12}>
        <ListGroup>{children}</ListGroup>
      </Col>
    </Row>

  )
}
export default ResultsDisplay;


export function ResultsDisplayItem({ park_name, park_description, park_code }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col md={12}>
          <h2>{park_name}</h2>
          <p>
            {park_description}
          </p>
          <p className="float-right">
            <a href={"/details/" + park_code}>Learn More!</a>
          </p>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}



// the ResultsList component
// export function ResultsList( {children }) {
//   return <ul className = "list-group">{children}</ul>
// }

// export function ResultsListItem({
//   title,
//   authors,
//   description,
//   link
// }) {
//   return (
//     <li className = "list-group-item">
//       <Container>
//         <Row>
//           <Col size = "xs-8 sm-9">
//             <h2>{title}</h2>
//             <h3>Author(s): {authors}</h3>
//             <p>Description: {description}</p>
//             <a rel="noopener noreferrer" target = "_blank" href ={link}>Go to Book!</a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
//   );
// }