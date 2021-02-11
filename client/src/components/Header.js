import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

import { FiMenu, FiShoppingCart } from "react-icons/fi";

import { LogoBlack } from "./Logo";

const Wrapper = styled.div`
    width: 100%;
    height: 93px;
    display: flex;
    flex-direction: column;
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

const Logo = styled.a`
    text-decoration: none;
`;

const Header = () => {
    return (
        <Wrapper>
            <div style={firstRowStyle}>
                <Logo href="/">
                    <LogoBlack />
                </Logo>
                <div>
                    <HeaderBtn>
                        <FiShoppingCart style={cartStyle} />
                    </HeaderBtn>
                    <HeaderBtn>
                        <FiMenu style={menuStyle} />
                    </HeaderBtn>
                </div>
            </div>
            <Catchline>Tech. Lifestyle. Fitness.</Catchline>
        </Wrapper>
    );
};

export default Header;
