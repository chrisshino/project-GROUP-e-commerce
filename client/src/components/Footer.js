import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
import { LogoWhite } from "./Logo";
import { themeVars } from "./GlobalStyles";

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${themeVars.white};
    padding: 1rem;
    background-color: ${themeVars.black};
    border-bottom: 1px solid white;
`;

const UpBar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background: linear-gradient(
        to bottom,
        ${themeVars.black} 0%,
        ${themeVars.midnightGreen} 100%
    );
    padding: 1rem;
    font-size: 0.8rem;
    cursor: pointer;
`;

const StyledLink = styled.button`
    color: ${themeVars.white};
    font-size: 18px;
    text-decoration: none;
    background: none;
    border: none;
    outline: none;

    &:active {
        transform: scale(1.07);
    }
`;

const CopyRight = styled.div`
    font-size: 10px;
    color: ${themeVars.white};
    position: relative;
    top: -5px;
`;

const Footer = () => {
    let history = useHistory();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("working");
    };
    return (
        <>
            <FooterWrapper>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <LogoWhite />
                    <CopyRight>All rights reserved. ©2021</CopyRight>
                </div>
                <div>
                    <StyledLink 
                        onClick={() => {
                            history.push("/about");
                            window.scrollTo(0,0);
                        }}
                    >
                        About Us
                    </StyledLink>
                </div>
            </FooterWrapper>
            <UpBar onClick={scrollToTop}>
                <FiChevronUp style={{ fontSize: "1.5rem" }}></FiChevronUp>
                Back to top
            </UpBar>
        </>
    );
};

export default Footer;
