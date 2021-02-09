import React from "react";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 1rem;
    font-family: Helvetica;
    background-color: #5f5566;
    border-bottom: 1px solid white;
`;

const UpBar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background: linear-gradient(to bottom, #5f5566 0%, #33202a 100%);
    padding: 1rem;
    font-family: Helvetica;
    font-size: 0.8rem;
    cursor: pointer;
`;

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <FooterWrapper>
                <div>Logo</div>
                <div>Copyright</div>
            </FooterWrapper>
            <UpBar onClick={scrollToTop}>
                <FiChevronUp style={{ fontSize: "1.5rem" }}></FiChevronUp>
                Back to top
            </UpBar>
        </>
    );
};

export default Footer;
