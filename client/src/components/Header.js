import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { getStoreState } from "../reducers/hamburger-reducer";
import { themeVars } from "./GlobalStyles";
import { toggleHamburger, closeHamburger } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import { FiMenu, FiShoppingCart, FiXCircle } from "react-icons/fi";
import Hamburger from "./Hamburger";

import { LogoBlack, LogoBlackDesktop } from "./Logo";

import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "./Responsive";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

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

//This botton is for the Cart link in the desktop version.
const StyledButton = styled.button`
    color: ${themeVars.blue};
    font-size: 25px;
    text-decoration: none;
    border: none;
    background: none;
    outline: none;
    margin: 0 25px;

    &:hover {
        cursor: pointer;
    }
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

const cartStyle = {
    fontSize: "35px",
    color: `${themeVars.blue}`,
    position: "relative",
    top: "5px",
};

const menuStyle = {
    fontSize: "35px",
    color: `${themeVars.blue}`,
    position: "relative",
    top: "8px",
};

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector(getStoreState).hamburgerReducer.hamburgerStatus;

    const transitions = useTransition(state, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    let history = useHistory();
    const handleLandingPage = () => {
        dispatch(closeHamburger());
        history.push("/");
    }

    return (
        <Wrapper>
            <div style={firstRowStyle}>
                <Logo onClick={handleLandingPage}>
                    <LogoBlack />
                </Logo>
                <LogoDesktop exact to="/">
                    <LogoBlackDesktop />
                </LogoDesktop>
                <BtnContainer>
                    <HeaderBtn>
                        <FiShoppingCart style={cartStyle} />
                    </HeaderBtn>

                    <HeaderBtn onClick={() => dispatch(toggleHamburger())}>
                        {state === false ? (
                            <FiMenu style={menuStyle} />
                        ) : (
                            <FiXCircle style={menuStyle} />
                        )}
                    </HeaderBtn>
                </BtnContainer>
                <LinkContainer>
                    <StyledNavLink exact to="/" activeStyle={{color: `${themeVars.pink}`}}>Home</StyledNavLink>
                    <StyledNavLink exact to="/products" activeStyle={{color: `${themeVars.pink}`}}>Products</StyledNavLink>
                    <StyledNavLink exact to="/about" activeStyle={{color: `${themeVars.pink}`}}>About</StyledNavLink>
                    <StyledNavLink exact to="/career" activeStyle={{color: `${themeVars.pink}`}}>Career</StyledNavLink>
                    <StyledButton>Cart (0)</StyledButton>
                </LinkContainer>
            </div>
            <Catchline>Tech. Lifestyle. Fitness.</Catchline>
            {transitions.map(({ item, key, props }) =>
                item ? (
                    <animated.div style={props}>
                        <Hamburger />
                    </animated.div>
                ) : (
                    <animated.div style={props}></animated.div>
                )
            )}
        </Wrapper>
    );
};

export default Header;
