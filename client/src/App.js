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
    searchedTerm: "",
    searchResults: []
  };

  handleSearchedTerm = value => {
    this.setState({ searchedTerm: value });
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
                    handleSearchedTerm={this.handleSearchedTerm}
                    searchedTerm={this.state.searchedTerm}
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
