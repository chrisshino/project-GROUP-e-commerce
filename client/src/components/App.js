import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreState } from "../reducers/hamburger-reducer";
import LandingPage from "../pages/LandingPage";
import Error from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";


import GlobalStyles from "./GlobalStyles";
const hideOverflow = { height: "100vh", overflow: "hidden" };

function App() {

    const state = useSelector(getStoreState).hamburgerReducer.hamburgerStatus;

    return (
        <>
            <div style={state === true ? hideOverflow : null}>
                <GlobalStyles />
                <Router>
                  <Header />
                  <Switch>
                   <Route exact path="/">
                    <LandingPage />
                   </Route>
                   <Route exact path="/about">
                    <About />
                   </Route>
                   <Route exact path="/error">
                    <Error />
                   </Route>
                  </Switch>
                  <Footer />
                 </Router>
            </div>
        </>
    );
}

export default App;
