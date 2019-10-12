import React from 'react';
// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// custom components
import JumbotronHome from './components/JumbotronHome/JumbotronHome';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsDisplay, { ResultsDisplayItem } from './components/ResultsDisplay/ResultsDisplay';

// API utility
import api from '../../utils/api';
// import local styling
import './homepage.css';



class HomePage extends React.Component {

  // ====SETTING STATE====
  state = {
    // keeps track of what the user types in the search bar
    currentSearchTerm: '',
    // keeps track of the search term once user presses search
    searchedTerm: '',
    // array that keeps the search results
    searchResults: []
  }

  // ====HOME PAGE FUNCTIONS====

  updateCurrentSearchTerm = (event) => {
    let value = event.target.value;
    // TO DO: Some sort of parser to make sure the search term can be used by API

    // set the state to the current term
    this.setState({ currentSearchTerm: value },
      () => { console.log(this.state.currentSearchTerm); });
  }

  updateSearchedTerm = (event) => {
    event.preventDefault();

    // TO DO: More logic checks to make sure
    if (this.state.currentSearchTerm !== '') {
      this.setState({
        searchedTerm: this.state.currentSearchTerm,
        // clear out search results 
        searchResults: []
      },
        () => {
          // console.log(this.state.searchedTerm);
          api.keywordSearch(this.state.searchedTerm)
            .then(results => this.setState({ searchResults: results.data.data }, () => console.log(this.state.searchResults)))
            // .then(results=> console.log(results.data.data))
            .catch(error => console.log(error));
        });
    }
    else return;
  }

  render() {
    return (
      <Row className="homePage-container">
        <Col xs={12}>
          <JumbotronHome
            heading={"Welcome to NaPS App 2.0!"}
            hero={"Use the search bar below to learn more about the National Parks of the United States."}
          />
          <SearchBar
            placeholder={"Search for a National Park using keywords! (Try 'Grand')"}
            updateCurrentSearch={this.updateCurrentSearchTerm}
            updateSearchedTerm={this.updateSearchedTerm}

          />

          <ResultsDisplay>
            {this.state.searchResults.map(parks => {
              return (
                <ResultsDisplayItem
                  park_name={parks.fullName}
                  park_description={parks.description}
                  park_code={parks.parkCode}


                />


              )
            })}
          </ResultsDisplay>

        </Col>
      </Row>
    )
  }

}

export default HomePage;