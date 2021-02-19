import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getHamburgerStoreState } from "../reducers/hamburger-reducer";
import { getCartStoreState } from "../reducers/cart-toggle-reducer";

import LandingPage from "../pages/LandingPage";
import Career from "../pages/Career";
import Error from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import BigProduct from "./BigProduct";
import Store from "../pages/Store";
import About from "../pages/About";
import Products from "../pages/Products";
import Form from '../pages/Form'
import Confirmation from '../pages/Confirmation'

import GlobalStyles from "./GlobalStyles";
const hideOverflow = { display: 'none' };

function App() {
    const hamburgerState = useSelector(getHamburgerStoreState).hamburgerReducer
        .hamburgerStatus;
    const cartState = useSelector(getCartStoreState).cartToggle.cartStatus;

    return (
        <>
            <GlobalStyles />
            <Router>
                <Header />
                <div
                    style={
                        hamburgerState || cartState === true
                            ? hideOverflow
                            : null
                    }
                >
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
                        <Route exact path="/form">
                            <Form/>
                        </Route>
                        <Route exact path="/confirmation">
                            <Confirmation/>
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
