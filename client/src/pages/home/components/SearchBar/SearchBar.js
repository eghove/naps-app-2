import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar(props) {
  return (
    <Row>
      <Col xs={10}>
        <Form>
          <FormControl type="text" placeholder={props.placeholder} />

        </Form>
      </Col>
      <Col xs={2}>
        <Button inline variant="outline-success">Search</Button>
      </Col>


    </Row>
  )

}

export default SearchBar;