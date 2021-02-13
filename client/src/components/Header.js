import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getStoreState } from "../reducers/hamburger-reducer";
import { themeVars } from "./GlobalStyles";
import { toggleHamburger } from "../actions";
import { useDispatch } from "react-redux";
import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import { FiMenu, FiShoppingCart, FiXCircle } from "react-icons/fi";
import Hamburger from "./Hamburger";

import { LogoBlack } from "./Logo";

const Wrapper = styled.div`
    width: 100%;
    height: 93px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
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

const Catchline = styled.div`
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 0 18px;
`;

const firstRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    top: "5px",
    marginLeft: "10px",
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

const Logo = styled(Link)`
    text-decoration: none;
`;

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector(getStoreState).hamburgerReducer.hamburgerStatus;

    const transitions = useTransition(state, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <Wrapper>
            <div style={firstRowStyle}>
                <Logo exact to="/">
                    <LogoBlack />
                </Logo>

                <div>
                    <HeaderBtn>
                        <FiShoppingCart style={cartStyle} />
                    </HeaderBtn>

                    <HeaderBtn onClick={() => dispatch(toggleHamburger())}>
                        {state == false ? (
                            <FiMenu style={menuStyle} />
                        ) : (
                            <FiXCircle style={menuStyle} />
                        )}
                    </HeaderBtn>
                </div>
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
