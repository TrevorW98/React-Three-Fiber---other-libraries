import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import ExampleOne from './Components/Example1/example1';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example1">Example One</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/">
            {Home}
          </Route>
          <Route path="/example1">
            {ExampleOne}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

