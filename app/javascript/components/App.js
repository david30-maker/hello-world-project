import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/greeting">Random Greeting</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/greeting">
            <Greeting />
          </Route>
          <Route path="/">
            <h1>Welcome to the Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
