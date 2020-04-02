import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
import Home from "./pages/Home";
//apollo
import { GraphQLClient, ClientContext } from "graphql-hooks";
import memCache from "graphql-hooks-memcache";
const client = new GraphQLClient({
  cache: memCache(),
  url: "/graphql"
});

const App = () => {
  return (
    <ClientContext.Provider value={client}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Fragment>
      </Router>
    </ClientContext.Provider>
  );
};

export default App;
