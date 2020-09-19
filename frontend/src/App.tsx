import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Books } from "./pages/Books";
import { Users } from "./pages/Users";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
