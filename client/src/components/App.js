import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Error from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import BigProduct from "./BigProduct";

import GlobalStyles from "./GlobalStyles";

function App() {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/error">
                        <Error />
                    </Route>
                    <Route path="/product/:id">
                        <BigProduct />
                    </Route>
                    <Route exact path="/about">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
