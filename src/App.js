import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Projects } from "./Projects";
import { About } from "./About";
import { Homepage } from "./Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Router>
            <React.Fragment>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route exact path="/" component={Homepage} />
            </React.Fragment>
          </Router>
          </main>
      </div>
      
    );
  }
}

export default App;
