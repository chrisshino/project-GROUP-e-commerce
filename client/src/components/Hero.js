import React from "react";
import styled, { css } from "styled-components";
import { themeVars } from "./GlobalStyles";
import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "./Responsive";

import heroGif from "../assets/hero.gif";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const commonWrapperCSS = css`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const TextWrapper1 = styled.div`
    ${commonWrapperCSS};
    background-color: ${themeVars.black};
    align-items: center;
    
    ${onDesktopMediaQuery} {
        height: 80px;
    }

    ${onTabletMediaQuery} {
        height: 60px;
    }

    ${onMobileMediaQuery} {
        height: 28px;
    }
`;

const TextWrapper2 = styled.div`
    ${commonWrapperCSS};  
    background-color: ${themeVars.midnightGreen};
    align-items: center;

    ${onDesktopMediaQuery} {
        height: 80px;
    }

    ${onTabletMediaQuery} {
        height: 60px;
        margin-top: -5px;
        padding-top: 5px;
    }
    
    ${onMobileMediaQuery} {
        height: 56px;
        margin-top: -10px;
        padding-top: 10px;
    }
`;

const Para1 = styled.p`
    color: ${themeVars.white};
    font-weight: 300;

    ${onDesktopMediaQuery} {
        font-size: 20px;
    }

    ${onTabletMediaQuery} {
        font-size: 18px;
    }

    ${onMobileMediaQuery} {
        font-size: 14px;
    }
`;

const Para2 = styled.p`
    color: ${themeVars.white};
    font-weight: 700;

    ${onDesktopMediaQuery} {
        font-size: 25px;
    }

    ${onTabletMediaQuery} {
        font-size: 22px;
    }

    ${onMobileMediaQuery} {
        font-size: 20px;
    }
`;

const GifContainer = styled.div`
    width: 100%;

    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
        background-color: #F5DCBD;
    }

    ${onTabletMediaQuery} {
        margin-top: 16px;
    }

    ${onMobileMediaQuery} {
        margin-top: 14px;
    }
`;

const Gif = styled.img`
    width: 100%;

    ${onDesktopMediaQuery} {
        width: 50%;
        position: relative;
    }
`;

const SellingText = styled.div`
    ${onDesktopMediaQuery} {
        height: 400px;
        width: 400px;
        background-color: ${themeVars.white};
        border-radius: 50%;
        border: 5px solid ${themeVars.pink};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const Slogan = styled.p`
    font-size: 30px;
    color: ${themeVars.midnightGreen};
    padding: 25px 0 15px 0;

    .vision {
        color: ${themeVars.blue};
    }

    .future {
        color: ${themeVars.caribbeanGreen};
    }
`;

const Top5 = styled.p`
    font-size: 20px;
    color: ${themeVars.midnightGreen};
    margin-bottom: 20px;
`;

const ScrollToTop5 = styled.a`
    color: ${themeVars.black};

    &:hover {
        color: ${themeVars.yellow};
        cursor: pointer;
    }
`;

const Hero = () => {
    return (
        <>
            <TextWrapper1>
                <Para1>Free shipping on all orders over $50.</Para1>
            </TextWrapper1>
            <GifContainer>
                <Gif src={heroGif} alt="gif of smart watch" />
                <SellingText>
                    <Slogan>Your <span className="vision">vision</span>. Our <span className="future">future</span>.</Slogan>
                    <Top5>See our recommendations</Top5>
                    <ScrollToTop5 href="#top5"><FaRegArrowAltCircleRight style={{fontSize: '50px'}}/></ScrollToTop5>
                </SellingText>
            </GifContainer>
            <TextWrapper2>
                <Para2>Select by body parts</Para2>
            </TextWrapper2>
        </>
    );
};

export default Hero;
