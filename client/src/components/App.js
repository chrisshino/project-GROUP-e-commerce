import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreState } from "../reducers/hamburger-reducer";

import LandingPage from "../pages/LandingPage";
import Career from "../pages/Career";
import Error from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import BigProduct from "./BigProduct";
import Store from "../pages/Store";
import About from "../pages/About";
import Products from "../pages/Products";

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
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <Route path="/products/:bodypart">
                            <Store />
                        </Route>
                        <Route path="/product/:id">
                            <BigProduct />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/career">
                            <Career />
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
