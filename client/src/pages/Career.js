import React from "react";
import styled from "styled-components";
import { themeVars } from "../components/GlobalStyles";

import passionPhoto from "../assets/ian-schneider-TamMbr4okv4-unsplash.jpg";
import officePhoto from "../assets/andrea-davis-OBV5XREI-ig-unsplash.jpg";
import workAreaPhoto from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";

const Heading = styled.div`
    height: 56px;
    width: 100%;
    background: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    font-size: 20px;
    text-align: center;
    line-height: 56px;
`;

const PhotoContainer = styled.div`
    height: 250px;
    width: 100vw;
`;

const Photo = styled.img`
    height: 100%;
    width: 100%;
`;

const ParaContainer = styled.div`
    height: 240px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Para = styled.p`
    font-size: 22px;
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
`;


const Career = () => {
    return (
        <>
            <Heading>Join our team</Heading>
            <PhotoContainer>
                <Photo src={passionPhoto} alt="passion led us here; credit: photo by Ian Schneider on Unsplash" />
            </PhotoContainer>
            <ParaContainer>
                <Para>At <span className="company">WEAR<span className="yellow">LAB</span></span>, we are always<br/>striving to be better!</Para>
                <Para>Looking for an opportunity<br/>to grow?</Para>
            </ParaContainer>
            <PhotoContainer>
                <Photo src={officePhoto} alt="open-plan office; credit: photo by Andrea Davis on Unsplash" />
            </PhotoContainer>
            <ParaContainer>
                <Para>Send us your resume at<br/><a className="email" href="mailto:career@wearlab.ca">career@wearlab.ca</a></Para>
                <Para>We look forward to hearing<br/>from you!</Para>
            </ParaContainer>
            <PhotoContainer>
                <Photo src={workAreaPhoto} alt="working together with PCs; credit: photo by Scott Graham on Unsplash" />
            </PhotoContainer>
        </>
    );
}

export default Career;