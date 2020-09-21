import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage";
import { UsersPage } from "./pages/UsersPage";

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
            <BooksPage />
          </Route>
          <Route path="/users">
            <UsersPage />
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
