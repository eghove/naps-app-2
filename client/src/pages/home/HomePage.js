import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JumbotronHome from './components/JumbotronHome/JumbotronHome';
import SearchBar from './components/SearchBar/SearchBar';



function HomePage() {
  return (
    <Row className="homePage-container">
      <Col xs={12}>
        <JumbotronHome
          heading={"Welcome to NaPS App 2.0!"}
          hero={"Use the search bar below to learn more about the National Parks of the United States."}
        />
        <SearchBar
          placeholder={"Search for a National Park using keywords or by state!"}
        
        />

      </Col>
    </Row>


    // Search Bar
    // Results Display
  )
}

export default HomePage;