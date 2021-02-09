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

                    <Svg src={Band} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element>
                    <Title>Arm</Title>

                    <Svg src={Bodybuilding} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element>
                    <Title>Head</Title>

                    <Svg src={Manhair} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element>
                    <Title>Waist</Title>

                    <Svg src={Waist} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.caribbeanGreen}` }}>
                <Element>
                    <Title>Hand</Title>

                    <Svg src={Hand} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.yellow}` }}>
                <Element>
                    <Title>Feet</Title>

                    <Svg src={RunningShoes} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.blue}` }}>
                <Element>
                    <Title>Neck</Title>

                    <Svg src={Neck} alt="gif of smart watch" />
                </Element>
            </BoyPart>
            <BoyPart style={{ backgroundColor: `${themeVars.pink}` }}>
                <Element>
                    <Title>Torso</Title>

                    <Svg src={Torso} alt="gif of smart watch" />
                </Element>
            </BoyPart>
        </Main>
    );
};

// `${themeVars.blue}`;

export default StoreComponent;

const Main = styled.div`
    position: relative;
    top: -25px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -25px;
`;

const BoyPart = styled.div`
    border: 0;
    margin: 0;
    padding: 0;
    position: relative;
    min-width: 50%;
    &:after {
        content: "";
        display: block;
        padding-bottom: 69.5%;
    }
`;

const Svg = styled.img`
    position: absolute;
    width: 60%;
    padding: 9%;
`;

const Element = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    background-color: white;
`;

const Title = styled.p`
    text-align: center;
    color: ${themeVars.black};
    font-size: 20px;
    font-weight: 700;
`;
