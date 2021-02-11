import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

import Band from "../assets/body-parts/band.svg";
import Bodybuilding from "../assets/body-parts/bodybuilding.svg";
import Manhair from "../assets/body-parts/man-hair.svg";
import Waist from "../assets/body-parts/waist.svg";
import Neck from "../assets/body-parts/neck.svg";
import Hand from "../assets/body-parts/waving-hand.svg";
import RunningShoes from "../assets/body-parts/running-shoes.svg";
import Torso from "../assets/body-parts/female.svg";

const StoreComponent = () => {
    return (
        <Main>
            <BoyPart style={{ backgroundColor: `${themeVars.caribbeanGreen}` }}>
                <Element>
                    <Title>Wrist</Title>
                    <Svg src={Band} alt="Wrist products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element>
                    <Title>Arm</Title>
                    <Svg src={Bodybuilding} alt="Arm  products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element>
                    <Title>Head</Title>
                    <Svg src={Manhair} alt="Head products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element>
                    <Title>Waist</Title>
                    <Svg src={Waist} alt="Waist products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.caribbeanGreen}` }}>
                <Element>
                    <Title>Hand</Title>
                    <Svg src={Hand} alt="Hand products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element>
                    <Title>Feet</Title>
                    <Svg src={RunningShoes} alt="Feet products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element>
                    <Title>Neck</Title>
                    <Svg src={Neck} alt="Neck products" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element>
                    <Title>Torso</Title>
                    <Svg src={Torso} alt="Torso products" />
                </Element>
            </BoyPart>
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

const BoyPart = styled.div`
    border: 0;
    margin: 0;
    padding: 0;
    position: relative;
    min-width: 50vw;
    min-height: 50vw;
    max-width: 50vw;
    max-height: 50vw;
`;

const Element = styled.div`
    width: calc(50vw - 40px);
    height: calc(50vw - 40px);
    margin: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
