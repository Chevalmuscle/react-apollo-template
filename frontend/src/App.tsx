import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BooksPage } from "./pages/BooksPage";
import { UsersPage } from "./pages/UsersPage";
import { ComponentsPage } from "./pages/ComponentsPage";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }
`;

const theme = {
  colors: {
    dark: "black",
    light: "white",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/components">components</Link>
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
            <Route path="/components">
              <ComponentsPage />
            </Route>
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
    </ThemeProvider>
  );
}

export default App;
