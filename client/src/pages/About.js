import React from "react";
import styled from "styled-components";
import { themeVars } from "../components/GlobalStyles";
import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "../components/Responsive";

import chris from "../assets/chris.png";
import zayd from "../assets/zayd.png";
import aya from "../assets/aya.jpg";
import github from "../assets/GitHub-Mark-120px-plus.png";

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

const Wrapper = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${onDesktopMediaQuery} {
        margin: 50px 30px;
    }

    ${onTabletMediaQuery} {
        margin-top: 50px;
    }

    ${onMobileMediaQuery} {
        margin-top: 30px;
    }
`;

const Photo = styled.img`
    border-radius: 50%;

    ${onDesktopMediaQuery} {
        width: 200px;
    }

    ${onTabletMediaQuery} {
        width: 32%;
    }

    ${onMobileMediaQuery} {
        width: 50%;
    }
`;

const SelfIntro = styled.p`
    margin-top: 15px;

    ${onDesktopMediaQuery} {
        width: 90%;
    }

    ${onTabletMediaQuery} {
        width: 80%;
    }

    ${onMobileMediaQuery} {
        width: 90%;
    }
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

    ${onDesktopMediaQuery} {
        &:hover {
            transform: scale(1.1);
        }
    }

    ${onTabletMediaQuery} {
        &:active {
            transform: scale(1.1);
        }
    }

    ${onMobileMediaQuery} {
        &:active {
            transform: scale(1.1);
        }
    }
`;

const GitHubIcon = styled.img`
    width: 25px;

    ${onDesktopMediaQuery} {
        &:hover {
            transform: scale(1.1);
        }
    }

    ${onTabletMediaQuery} {
        &:active {
            transform: scale(1.1);
        }
    }

    ${onMobileMediaQuery} {
        &:active {
            transform: scale(1.1);
        }
    }
`;

const About = () => {
    return (
        <>
        <Heading>Meet our team</Heading>
        <Wrapper>
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
        </Wrapper>
        </>
    );
}

export default About;