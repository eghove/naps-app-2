import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { withFirebase } from './shared_components/Firebase';

// pages
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import Bad404Page from './pages/bad_404/Bad404Page';


// shared components
import NavBar from './shared_components/NavBar/NavBar';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUpPage from './pages/signup/signupPage';
import SignInPage from './pages/signin/signinPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }
  
  render() {
    return (
      <div className="App">
        <Container>
          <NavBar authUser={this.state.authUser}></NavBar>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/signin" component={SignInPage} />
              <Route
                exact path="/about"
                render={(props) => <AboutPage {...props}
                  updated_date={"2019-10-12"} />}
              />
              <Route exact path="/details/:parkcode" component={DetailsPage} />
              <Route default component={Bad404Page} />
            </Switch>
          </Router>

        </Container>

      </div>
    )


  }


}

export default withFirebase(App);
