import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "mapbox-gl/dist/mapbox-gl.css";

import { Home } from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Restaurant from "./pages/restaurant/Restaurant";

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/restaurants/:id">
            <Restaurant />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect from="*" to="/" />
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
