import React from "react";
import styled from "styled-components";
import { themeVars } from "../components/GlobalStyles";

import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "../components/Responsive";

import passionPhoto from "../assets/ian-schneider-TamMbr4okv4-unsplash.jpg";
import officePhoto from "../assets/andrea-davis-OBV5XREI-ig-unsplash.jpg";
import workAreaPhoto from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";

const Heading = styled.h1`
    width: 100%;
    background: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    text-align: center;
    
    ${onDesktopMediaQuery} {
        height: 80px;
        font-size: 25px;
        line-height: 80px;
    }

    ${onTabletMediaQuery} {
        height: 60px;
        font-size: 22px;
        line-height: 60px;
    }
    
    ${onMobileMediaQuery} {
        height: 56px;
        font-size: 20px;
        line-height: 56px;
    }
`;

const Row1 = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
    }
`;

const Row2 = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
    }
`;

const PhotoContainer = styled.div`
    ${onDesktopMediaQuery} {
        width: 33.3%;
    }

    ${onTabletMediaQuery} {
        height: 350px;
        width: 100vw;
    }

    ${onMobileMediaQuery} {
        height: 250px;
        width: 100vw;
    }
`;

const Photo = styled.img`
    height: 100%;
    width: 100%;
`;

const ParaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${onDesktopMediaQuery} {
        width: 33.3%;
    }

    ${onTabletMediaQuery} {
        height: 320px;
        width: 100vw;
    }

    ${onMobileMediaQuery} {
        height: 240px;
        width: 100vw;
    }
`;

const ParaContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${onDesktopMediaQuery} {
        width: 33.3%;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const Para = styled.p`
    text-align: center;
    margin: 15px 0;

    .company {
        font-family: "Oswald", sans-serif;
        font-weight: bold;
    }
    .yellow {
        font-family: "Oswald", sans-serif;
        color: ${themeVars.yellow};
    }

    .email {
        color: ${themeVars.caribbeanGreen};
        text-decoration: none;
        border-bottom: 1px solid ${themeVars.caribbeanGreen};
    }

    ${onDesktopMediaQuery} {
        font-size: 24px;
    }

    ${onTabletMediaQuery} {
        font-size: 24px;
    }

    ${onMobileMediaQuery} {
        font-size: 22px;
    }
`;

const Para1 = styled.p`
    text-align: center;
    margin: 15px 0;

    .email {
        color: ${themeVars.caribbeanGreen};
        text-decoration: none;
        border-bottom: 1px solid ${themeVars.caribbeanGreen};
    }

    ${onDesktopMediaQuery} {
        display: none;
    }

    ${onTabletMediaQuery} {
        font-size: 24px;
    }

    ${onMobileMediaQuery} {
        font-size: 22px;
    }
`;

const Para2 = styled.p`
    ${onDesktopMediaQuery} {
        font-size: 25px;
        text-align: center;
        margin: 15px 0;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;


const Career = () => {
    return (
        <>
            <Heading>Join our team</Heading>
            <Row1>
                <PhotoContainer>
                    <Photo src={passionPhoto} alt="passion led us here; credit: photo by Ian Schneider on Unsplash" />
                </PhotoContainer>
                <ParaContainer>
                    <Para>At <span className="company">WEAR<span className="yellow">LAB</span></span>, we are always<br/>striving to be better!</Para>
                    <Para1>Looking for an opportunity<br/>to grow?</Para1>
                </ParaContainer>
                <PhotoContainer>
                    <Photo src={officePhoto} alt="open-plan office; credit: photo by Andrea Davis on Unsplash" />
                </PhotoContainer>
            </Row1>
            <Row2>
                <ParaContainer>
                    <Para2>Looking for an opportunity<br/>to grow?</Para2>
                    <Para1>Send us your resume at<br/><a className="email" href="mailto:career@wearlab.ca">career@wearlab.ca</a></Para1>
                    <Para1>We look forward to hearing<br/>from you!</Para1>
                </ParaContainer>
                <PhotoContainer>
                    <Photo src={workAreaPhoto} alt="working together with PCs; credit: photo by Scott Graham on Unsplash" />
                </PhotoContainer>
                <ParaContainer1>
                    <Para>Send us your resume at<br/><a className="email" href="mailto:career@wearlab.ca">career@wearlab.ca</a></Para>
                    <Para>We look forward to hearing<br/>from you!</Para>
                </ParaContainer1>
            </Row2>
        </>
    );
}

export default Career;