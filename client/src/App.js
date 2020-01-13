import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

// pages
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import DetailsPage from "./pages/details/DetailsPage";
import Bad404Page from "./pages/bad_404/Bad404Page";

// shared components
import NavBar from "./shared_components/NavBar/NavBar";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  // setting up app level state, working on moving some of the state from HomePage up into the App level.

  state = {
    // searchTerm tracks the last successful search term
    searchedTerm: "",
    // searchHistory stores an array of successful search terms
    searchHistory: [],
    // storedSearchResults stores the search results of the last successful search
    storedSearchResults: []
  };

  // === STATE UPDATER FUNCTIONS

  // handleSearchedTerm passes the successful searchTerm up to the App-level state
  handleSearchedTerm = value => {
    this.setState({ searchedTerm: value });
  };

  // updateSearchHistory takes each successful search term and appends it to an historical array of search terms
  updateSearchHistory = newItem => {
    this.setState(
      { searchHistory: [...this.state.searchHistory, newItem] },
      () => {
        console.log(this.state.searchHistory);
      }
    );
  };

  // updateStoredSearchResult stores the array of the last set of search results for retrieval.
  updateStoredSearchResults = array => {
    this.setState({ storedSearchResults: array });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <HomePage
                    {...props}
                    // passing down updaters
                    handleSearchedTerm={this.handleSearchedTerm}
                    updateSearchHistory={this.updateSearchHistory}
                    updateStoredSearchResults={this.updateStoredSearchResults}
                    // passing down state values
                    searchedTerm={this.state.searchedTerm}
                    storedSearchResults={this.state.storedSearchResults}
                  />
                )}
              />
              <Route
                exact
                path="/about"
                render={props => (
                  <AboutPage {...props} updated_date={"2019-10-12"} />
                )}
              />
              <Route exact path="/details/:parkcode" component={DetailsPage} />
              <Route default component={Bad404Page} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
