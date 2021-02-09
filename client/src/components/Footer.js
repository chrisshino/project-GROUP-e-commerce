import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
import { LogoWhite } from './Logo';
import { themeVars } from "./GlobalStyles";

const FooterWrapper = styled.div`
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
    background: linear-gradient(to bottom, ${themeVars.black} 0%, ${themeVars.midnightGreen} 100%);
    padding: 1rem;
    font-size: 0.8rem;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    color: ${themeVars.white};
    font-size: 18px;
    text-decoration: none;
`;

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <FooterWrapper>
                <LogoWhite />
                <StyledLink>About Us</StyledLink>   {/* Needs to add link later */}
            </FooterWrapper>
            <UpBar onClick={scrollToTop}>
                <FiChevronUp style={{ fontSize: "1.5rem" }}></FiChevronUp>
                Back to top
            </UpBar>
        </>
    );
};

export default Footer;
