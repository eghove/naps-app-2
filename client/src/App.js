import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// pages
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import Bad404Page from './pages/bad_404/Bad404Page';

// shared components
import NavBar from './shared_components/NavBar/NavBar';

// API utility
import api from './utils/api.js';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {
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
      this.setState({ searchedTerm: this.state.currentSearchTerm },
        () => {
          // console.log(this.state.searchedTerm);
          api.keywordSearch(this.state.searchedTerm)
            .then(results => this.setState({ searchResults: results.data.data }, ()=> console.log(this.state.searchResults)))
            // .then(results=> console.log(results.data.data))
            .catch(error => console.log(error));
        });
    }
    else return;
  }







  render() {
    return (
      <div className="App">
        <Container>
          <NavBar></NavBar>

          <Router>
            <Switch>
              <Route exact path="/"
                render={props => <HomePage updateCurrentSearch={this.updateCurrentSearchTerm} updateSearchedTerm={this.updateSearchedTerm} searchResults={this.state.searchResults} />} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/details/:parkcode" component={DetailsPage} />
              <Route default component={Bad404Page} />
            </Switch>
          </Router>

        </Container>

      </div>
    )


  }


}

export default App;
