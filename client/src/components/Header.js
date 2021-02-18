import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { getHamburgerStoreState } from "../reducers/hamburger-reducer";
import { getStoreState } from "../reducers/cart-reducer";
import { getCartStoreState } from "../reducers/cart-toggle-reducer";
import { themeVars } from "./GlobalStyles";

import { toggleCart } from "../actions";
import { toggleHamburger, closeHamburger, closeCart } from "../actions";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import { FiMenu, FiShoppingCart, FiXCircle } from "react-icons/fi";
import Hamburger from "./Hamburger";
import Cart from "./Cart";

import { LogoBlack, LogoBlackDesktop } from "./Logo";

import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "./Responsive";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    z-index: 10;
    background-color: white;

    ${onDesktopMediaQuery} {
        height: 120px;
        justify-content: center;
    }

    ${onTabletMediaQuery} {
        height: 93px;
    }

    ${onMobileMediaQuery} {
        height: 93px;
    }
`;

// Button container and buttons for the mobile and tablet versions.
const BtnContainer = styled.div`
    ${onDesktopMediaQuery} {
        display: none;
    }
`;

const HeaderBtn = styled.button`
    background: none;
    border: none;
    outline: none;
    margin-right: 10px;

    &:active {
        transform: scale(1.1);
    }
`;

// Link container and links for the desktop version.
const LinkContainer = styled.div`
    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    color: ${themeVars.blue};
    font-size: 25px;
    text-decoration: none;
    margin: 0 25px;
`;

const Catchline = styled.div`
    font-weight: 700;
    margin: 0 0 0 25px;

    ${onDesktopMediaQuery} {
        font-size: 16px;
        position: relative;
        top: -10px;
    }

    ${onTabletMediaQuery} {
        font-size: 12px;
    }

    ${onMobileMediaQuery} {
        font-size: 12px;
    }
`;

//Logo for the mobile and tablet versions.
const Logo = styled.button`
    text-decoration: none;
    background: none;
    border: none;
    outline: none;

    ${onDesktopMediaQuery} {
        display: none;
    }
`;

//Logo for the desktop version.
const LogoDesktop = styled(Link)`
    ${onDesktopMediaQuery} {
        text-decoration: none;
        position: relative;
        top: -10px;
        left: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

//Inline styles below:
const firstRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    top: "5px",
    marginLeft: "15px",
};

const cartStyleInactive = {
    fontSize: "35px",
    color: `${themeVars.blue}`,
    position: "relative",
    top: "5px",
};

const cartStyleActive = {
    fontSize: "35px",
    color: `${themeVars.blue}`,
    position: "relative",
    top: "8px",
};

const menuStyle = {
    fontSize: "35px",
    color: `${themeVars.blue}`,
    position: "relative",
    top: "8px",
};

const quantityCircle = {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    background: `${themeVars.pink}`,
    color: `${themeVars.white}`,
    lineHeight: "20px",
    position: "absolute",
    top: "3px",
    right: "-5px",
};

const Header = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(getStoreState).cartReducer;
    const cartQuantity = Object.keys(cartState).length;
    const hamburgerToggleState = useSelector(getHamburgerStoreState)
        .hamburgerReducer.hamburgerStatus;
    const cartToggleState = useSelector(getCartStoreState).cartToggle
        .cartStatus;
    const hamburgerTransitions = useTransition(hamburgerToggleState, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {mass:1, tension:500, friction:22}
    });

    const cartTransitions = useTransition(cartToggleState, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {mass:1, tension:500, friction:22}
    });

    let history = useHistory();
    const handleLandingPage = () => {
        dispatch(closeHamburger());
        dispatch(closeCart());
        history.push("/");
    };
    
    const cartOnClickFunc = () => {
        if (cartToggleState === false) {
            dispatch(closeHamburger());
            dispatch(toggleCart());
        } else {
            dispatch(toggleCart());
        }
    };

    const hamburgerOnClickFunc = () => {
        if (hamburgerToggleState === false) {
            dispatch(toggleHamburger())
            dispatch(closeCart())
        } else {
            dispatch(toggleHamburger())
        }
    }

    return (
        <>
            <Wrapper
                style={{
                    position: cartToggleState ? "fixed" : "",
                    overflow: cartToggleState ? "hidden" : "",
                }}
            >
                <div style={firstRowStyle}>
                    <Logo onClick={handleLandingPage}>
                        <LogoBlack />
                    </Logo>

                    <LogoDesktop exact to="/">
                        <LogoBlackDesktop />
                    </LogoDesktop>
                    <BtnContainer>
                        <HeaderBtn onClick={cartOnClickFunc}>
                            {cartToggleState === false ? (
                                <div style={{position: "relative"}}>
                                    <FiShoppingCart style={cartStyleInactive} />
                                    <div style={quantityCircle}>
                                        {cartQuantity}
                                    </div>
                                </div>
                            ) : (
                                <FiXCircle style={cartStyleActive}></FiXCircle>
                            )}
                        </HeaderBtn>

                        <HeaderBtn onClick={hamburgerOnClickFunc}>
                            {hamburgerToggleState === false ? (
                                <FiMenu style={menuStyle} />
                            ) : (
                                <FiXCircle style={menuStyle} />
                            )}
                        </HeaderBtn>
                    </BtnContainer>
                    <LinkContainer>
                        <StyledNavLink
                            exact
                            to="/"
                            activeStyle={{ color: `${themeVars.pink}` }}
                        >
                            Home
                        </StyledNavLink>
                        <StyledNavLink
                            exact
                            to="/products"
                            activeStyle={{ color: `${themeVars.pink}` }}
                        >
                            Products
                        </StyledNavLink>
                        <StyledNavLink
                            exact
                            to="/about"
                            activeStyle={{ color: `${themeVars.pink}` }}
                        >
                            About
                        </StyledNavLink>
                        <StyledNavLink
                            exact
                            to="/career"
                            activeStyle={{ color: `${themeVars.pink}` }}
                        >
                            Career
                        </StyledNavLink>
                        <StyledNavLink
                            exact
                            to="/cart"
                            activeStyle={{ color: `${themeVars.pink}` }}
                        >
                            Cart (
                            <span style={{ color: `${themeVars.pink}` }}>
                                {cartQuantity}
                            </span>
                            )
                        </StyledNavLink>
                    </LinkContainer>
                </div>
                <Catchline>Tech. Lifestyle. Fitness.</Catchline>
            </Wrapper>
            <div>
                {hamburgerTransitions.map(({ item, key, props }) =>
                    item ? (
                        <animated.div style={props} key={key}>
                            <Hamburger />
                        </animated.div>
                    ) : (
                        <animated.div style={props} key={key}></animated.div>
                    )
                )}
                {cartTransitions.map(({ item, key, props }) =>
                    item ? (
                        <animated.div style={props} key={key}>
                            <Cart />
                        </animated.div>
                    ) : (
                        <animated.div style={props} key={key}></animated.div>
                    )
                )}
            </div>
        </>
    );
};

export default Header;
