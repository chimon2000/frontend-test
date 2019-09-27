import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/restuaraunts/:id">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

const client = new ApolloClient({
  uri: "/graphql",
  request: operation => {
    console.assert(
      !!process.env.YELP_API_KEY,
      "missing env configuration: YELP_API_KEY"
    );
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`,
        "Accept-Language": "en_US"
      }
    });
  }
});
