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
        </Main>
    );
};

export default StoreComponent;

const Main = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`;

const BodyPart = styled.div`
    border: 0;
    margin: 0;
    padding: 0;
    position: relative;
    min-width: 50vw;
    min-height: 50vw;
    max-width: 50vw;
    max-height: 50vw;
`;

const Element = styled.button`
    width: calc(50vw - 40px);
    height: calc(50vw - 40px);
    margin: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    outline: none;
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
