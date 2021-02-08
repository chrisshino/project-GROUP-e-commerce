import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Error from "../pages/Error";
import Header from "./Header";
import Footer from "./Footer";

import GlobalStyles from "./GlobalStyles";

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
