import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

import chris from "../assets/chris.png";
import zayd from "../assets/zayd.png";
import aya from "../assets/aya.jpg";
import github from "../assets/GitHub-Mark-120px-plus.png";

const Heading = styled.h1`
    height: 56px;
    width: 100%;
    background: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    font-size: 20px;
    text-align: center;
    line-height: 56px;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const Photo = styled.img`
    width: 50%;
    border-radius: 50%;
`;

const SelfIntro = styled.p`
    width: 90%;
    text-align: center;
    margin-top: 15px;
`;

const Name = styled.h3`
    font-size: 26px;
    margin: 10px 0 15px 0;
`;

const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinkedInLink = styled.a`
    font-family: "PT Sans", sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: ${themeVars.black};
    text-decoration: none;
    border: 1px solid ${themeVars.black};
    border-radius: 5px;
    padding: 0 5px;
    height: 22px;
    margin-right: 15px;

    &:active {
        transform: scale(1.1);
    }
`;

const GitHubIcon = styled.img`
    width: 25px;

    &:active {
        transform: scale(1.1);
    }
`;

const About = () => {
    return (
        <>
        <Heading>Meet our team</Heading>
        <ProfileContainer>
            <Photo style={{border: `5px solid ${themeVars.yellow}`}} src={chris} alt="photo of Chris Shino" />
            <PersonalInfoContainer>
                <Name style={{color: `${themeVars.blue}`}}>Chris Shino</Name>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <LinkedInLink href="https://www.linkedin.com/in/chrisshino/">in</LinkedInLink>
                    <a href="https://github.com/chrisshino"><GitHubIcon src={github} alt="GitHub icon" /></a>
                </div>
            </PersonalInfoContainer>
            <SelfIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SelfIntro>
        </ProfileContainer>
        <ProfileContainer>
            <Photo style={{border: `5px solid ${themeVars.blue}`}} src={zayd} alt="photo of Zayd Ben Osmane" />
            <PersonalInfoContainer>
                <Name style={{color: `${themeVars.yellow}`}}>Zayd Ben Osmane</Name>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <LinkedInLink href="https://www.linkedin.com/in/zaydbenosmane/">in</LinkedInLink>
                    <a href="https://github.com/ZaydOSM"><GitHubIcon src={github} alt="GitHub icon" /></a>
                </div>
            </PersonalInfoContainer>
            <SelfIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SelfIntro>
        </ProfileContainer>
        <ProfileContainer>
            <Photo style={{border: `5px solid ${themeVars.yellow}`}} src={aya} alt="photo of Aya Sato" />
            <PersonalInfoContainer>
                <Name style={{color: `${themeVars.blue}`}}>Aya Sato</Name>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <LinkedInLink href="https://www.linkedin.com/in/aya-sato/">in</LinkedInLink>
                    <a href="https://github.com/Aya-Sato"><GitHubIcon src={github} alt="GitHub icon" /></a>
                </div>
            </PersonalInfoContainer>
            <SelfIntro style={{marginBottom: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SelfIntro>
        </ProfileContainer>
        </>
    );
}

export default About;