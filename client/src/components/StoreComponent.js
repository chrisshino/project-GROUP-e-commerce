import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";

import Band from "../assets/body-parts/band.svg";
import Bodybuilding from "../assets/body-parts/bodybuilding.svg";
import Manhair from "../assets/body-parts/man-hair.svg";
import Waist from "../assets/body-parts/waist.svg";
import Neck from "../assets/body-parts/neck.svg";
import Hand from "../assets/body-parts/waving-hand.svg";
import RunningShoes from "../assets/body-parts/running-shoes.svg";
import Torso from "../assets/body-parts/female.svg";

import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "./Responsive";

const StoreComponent = () => {
    let history = useHistory();

    return (
        <Main>
            <BodyPart style={{ backgroundColor: `${themeVars.caribbeanGreen}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Wrist");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Wrist</Title>
                    <Svg src={Band} alt="Wrist products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Arms");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Arms</Title>
                    <Svg src={Bodybuilding} alt="Arms  products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Head");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Head</Title>
                    <Svg src={Manhair} alt="Head products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Waist");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Waist</Title>
                    <Svg src={Waist} alt="Waist products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Torso");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Torso</Title>
                    <Svg src={Torso} alt="Torso products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Neck");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Neck</Title>
                    <Svg src={Neck} alt="Neck products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element 
                    onClick={() => {
                        history.push("/products/Feet");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Feet</Title>
                    <Svg src={RunningShoes} alt="Feet products" />
                </Element>
            </BodyPart>
            <BodyPart style={{ backgroundColor: `${themeVars.caribbeanGreen}` }}>
                <Element
                    onClick={() => {
                        history.push("/products/Hands");
                        window.scrollTo(0,0);
                    }}
                >
                    <Title>Hands</Title>
                    <Svg src={Hand} alt="Hands products" />
                </Element>
            </BodyPart>
        </Main>
    );
};

export default StoreComponent;

const Main = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 80vw;
        margin: 20px 10vw;
    }

    ${onTabletMediaQuery} {
        position: relative;
        height: 100%; 
        display: flex;
        flex-wrap: wrap;
    }

    ${onMobileMediaQuery} {
        position: relative;
        height: 100%; 
        display: flex;
        flex-wrap: wrap;
    }
`;

const BodyPart = styled.div`
    border: 0;
    padding: 0;

    ${onDesktopMediaQuery} {
        margin: 25px;
        min-width: 15vw;
        min-height: 15vw;
        max-width: 15vw;
        max-height: 15vw;
    }

    ${onTabletMediaQuery} {
        margin: 0;
        min-width: 25vw;
        min-height: 25vw;
        max-width: 25vw;
        max-height: 25vw;
    }
    
    ${onMobileMediaQuery} {
        margin: 0;
        min-width: 50vw;
        min-height: 50vw;
        max-width: 50vw;
        max-height: 50vw;
    }
`;

const Element = styled.button`
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    outline: none;

    ${onDesktopMediaQuery} {
        width: calc(15vw - 30px);
        height: calc(15vw - 30px);
        margin: 15px;

        &:hover {
            cursor: pointer;
        }
    }

    ${onTabletMediaQuery} {
        width: calc(25vw - 30px);
        height: calc(25vw - 30px);
        margin: 15px;
    }

    ${onMobileMediaQuery} {
        width: calc(50vw - 30px);
        height: calc(50vw - 30px);
        margin: 15px;
    }
`;

const Title = styled.p`
    text-align: center;
    color: ${themeVars.black};
    font-size: 20px;
    font-weight: 700;
`;

const Svg = styled.img`
    width: 80%;
    margin: 0;
`;
