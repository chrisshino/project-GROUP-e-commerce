import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
import { LogoWhite } from "./Logo";
import { themeVars } from "./GlobalStyles";
import {
    onDesktopMediaQuery,
    onMobileMediaQuery,
    onTabletMediaQuery,
} from "./Responsive";

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${themeVars.white};
    padding: 1rem;
    background-color: ${themeVars.black};
    border-bottom: 1px solid white;

    ${onDesktopMediaQuery} {
        height: 120px;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${onDesktopMediaQuery} {
        &:hover {
            cursor: pointer;
        }
    }
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

    ${onDesktopMediaQuery} {
        display: none;
    }
`;

const StyledBtn = styled.button`
    color: ${themeVars.white};
    font-size: 18px;
    text-decoration: none;
    background: none;
    border: none;
    outline: none;

    ${onDesktopMediaQuery} {
        margin: 0 45px;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    ${onTabletMediaQuery} {
        &:active {
            transform: scale(1.07);
        }
    }

    ${onMobileMediaQuery} {
        &:active {
            transform: scale(1.07);
        }
    }
`;

const StyledBtn1 = styled.button`
    ${onDesktopMediaQuery} {
        color: ${themeVars.white};
        font-size: 18px;
        text-decoration: none;
        background: none;
        border: none;
        outline: none;
        margin: 0 45px;

        &:hover {
            text-decoration: underline;
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
                <LogoWrapper
                    onClick={() => {
                        history.push("/");
                        window.scrollTo(0, 0);
                    }}
                >
                    <LogoWhite />
                    <CopyRight>All rights reserved. ©2021</CopyRight>
                </LogoWrapper>
                <div>
                    <StyledBtn1
                        onClick={() => {
                            history.push("/");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Home
                    </StyledBtn1>
                    <StyledBtn1
                        onClick={() => {
                            history.push("/products/all");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Products
                    </StyledBtn1>
                    <StyledBtn
                        onClick={() => {
                            history.push("/about");
                            window.scrollTo(0, 0);
                        }}
                    >
                        About Us
                    </StyledBtn>
                    <StyledBtn1
                        onClick={() => {
                            history.push("/career");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Career
                    </StyledBtn1>
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
