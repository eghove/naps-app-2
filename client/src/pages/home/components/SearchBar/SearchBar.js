import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchBar(props) {
  return (
    <Row className="searchBarHolder">
      <Col xs={10}>
        <Form onSubmit={props.updateSearchedTerm}>
          {/* alsos need to set this up so if the user presses return, it instigates the search as well */}
          <FormControl type="text" placeholder={props.placeholder} onChange={props.updateCurrentSearch}/>
        </Form>
      </Col>
      <Col xs={2}>
        <Button variant="success" onClick={props.updateSearchedTerm}>Search</Button>
      </Col>


    </Row>
  )

}

export default SearchBar;