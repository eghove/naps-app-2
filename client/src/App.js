import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import DetailsPage from './pages/details/DetailsPage';
import Bad404Page from './pages/bad_404/Bad404Page';
// import api from './utils/api.js';

// api.test();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/details/:parkcode" component={DetailsPage} />
          <Route default component={Bad404Page} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
