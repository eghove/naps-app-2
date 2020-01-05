import React from "react";
import { Helmet } from "react-helmet";
// bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// custom components
import JumbotronHome from "./components/JumbotronHome/JumbotronHome";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultsDisplay, {
  ResultsDisplayItem
} from "./components/ResultsDisplay/ResultsDisplay";
import NoResults from "./components/NoResults/NoResults";
import LoadingSpinner from "../../shared_components/LoadingSpinner/LoadingSpinner";

// API utility
import api from "../../utils/api";

// import local styling
import "./homepage.css";

class HomePage extends React.Component {
  // ====SETTING STATE====
  state = {
    // keeps track of what the user types in the search bar
    currentSearchTerm: "",
    // array that keeps the search results
    searchResults: [],
    // variable that keeps track of search status [searching, no_results, some_results],
    searchStatus: null,
    // variable to track if there was a past search in local storage
    pastSearch: false
  };

  // ====HOME PAGE FUNCTIONS====

  updateCurrentSearchTerm = event => {
    let value = event.target.value;

    // parser to make the search term something API can use
    value = value.replace(/ +/g, "+");

    // set the state to the current term
    this.setState({ currentSearchTerm: value }, () => {});
  };

  updateSearchedTerm = event => {
    event.preventDefault();

    // logic checks
    if (
      this.state.currentSearchTerm !== "" &&
      this.state.currentSearchTerm !== "+"
    ) {
      // calls the app level updater
      this.props.masterSearchedTerm(this.state.currentSearchTerm);
      this.setState(
        {
          // clear out search results
          searchResults: [],
          // clear the pastSearch heading
          pastSearch: false
        },
        () => {
          // set the searchStatus
          this.setState({ searchStatus: "searching" });
          api
            .keywordSearch(this.props.searchedTerm)
            .then(results => {
              if (results.data.total === "0") {
                this.setState({ searchStatus: "no_results" });
              } else {
                this.setState({ searchResults: results.data.data }, () => {
                  this.setState({
                    searchStatus: "some_results",
                    pastSearch: false
                  });
                  this.storeSearchResults(results.data.data);
                });
              }
            })
            .catch(error => console.log(error));
        }
      );
    } else return;
  };

  // LOCAL STORAGE FUNCTIONS
  storeSearchResults = data => {
    localStorage.clear();
    // console.log(data);
    localStorage.setItem("park_search_results", JSON.stringify(data));
  };

  // get stored search results
  getStoredSearchResults = () => {
    let storedResults = localStorage.getItem("park_search_results");
    storedResults = JSON.parse(storedResults);
    this.setState({ searchResults: storedResults }, () => {
      if (this.state.searchResults !== null) {
        // if something comes back for the stored search results, set the state so it's displayed
        this.setState({ searchStatus: "some_results", pastSearch: true });
      }
    });
  };

  componentDidMount() {
    this.getStoredSearchResults();
  }

  render() {
    return (
      <Row className="homePage-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>NaPS App 2.0 Home</title>
        </Helmet>
        <Col xs={12}>
          <JumbotronHome
            heading={"Welcome to NaPS App 2.0!"}
            hero={
              "Use the search bar below to learn more about the National Parks of the United States."
            }
          />
          <SearchBar
            placeholder={
              "Search for a National Park using keywords! (Try 'Grand')"
            }
            updateCurrentSearch={this.updateCurrentSearchTerm}
            updateSearchedTerm={this.updateSearchedTerm}
          />

          {this.state.searchStatus === "searching" ? (
            <Row>
              <Col className={"spinnerHolder"} md={12}>
                <LoadingSpinner></LoadingSpinner>
              </Col>
            </Row>
          ) : null}

          {this.state.searchStatus === "no_results" ? (
            <NoResults
              customClass={"noResults"}
              badSearchHeading={"No Parks Found"}
              badSearchText={
                "You may wish to try fewer or different search terms."
              }
            />
          ) : null}

          {this.state.pastSearch === true ? (
            <Row>
              <Col md={12}>
                <div className={"text-holder"}>
                  <h2>Prior search results:</h2>
                </div>
              </Col>
            </Row>
          ) : null}

          {this.state.searchStatus === "some_results" ? (
            <ResultsDisplay>
              {this.state.searchResults.map(parks => {
                return (
                  <ResultsDisplayItem
                    key={parks.parkCode}
                    park_name={parks.fullName}
                    park_description={parks.description}
                    park_code={parks.parkCode}
                  />
                );
              })}
            </ResultsDisplay>
          ) : null}
        </Col>
      </Row>
    );
  }
}

export default HomePage;
