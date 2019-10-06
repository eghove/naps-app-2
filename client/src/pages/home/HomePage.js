import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// custom components
import JumbotronHome from './components/JumbotronHome/JumbotronHome';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsDisplay, { ResultsDisplayItem } from './components/ResultsDisplay/ResultsDisplay';

let test = [{
  parkName: "Test Name",
  parkDesc: "Test Description"
}]


function HomePage(props) {
  return (
    <Row className="homePage-container">
      <Col xs={12}>
        <JumbotronHome
          heading={"Welcome to NaPS App 2.0!"}
          hero={"Use the search bar below to learn more about the National Parks of the United States."}
        />
        <SearchBar
          placeholder={"Search for a National Park using keywords! (Try 'Grand')"}
          updateCurrentSearch={props.updateCurrentSearch}
          updateSearchedTerm={props.updateSearchedTerm}
        
        />
        <ResultsDisplay>
          {props.searchResults.map(parks=>{
            return (
              <ResultsDisplayItem
                park_name={parks.fullName}
                park_description={parks.description}
              
              
              />

              
            )
          })}
        </ResultsDisplay>

      </Col>
    </Row>
  )
}

export default HomePage;