import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { themeVars } from "./GlobalStyles";

import Band from "../assets/body-parts/band.svg";
import Bodybuilding from "../assets/body-parts/bodybuilding.svg";
import Manhair from "../assets/body-parts/man-hair.svg";
import Waist from "../assets/body-parts/waist.svg";
import Neck from "../assets/body-parts/neck.svg";
import Hand from "../assets/body-parts/waving-hand.svg";
import RunningShoes from "../assets/body-parts/running-shoes.svg";
import Torso from "../assets/body-parts/female.svg";

import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "../components/Responsive";

const Main = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const BodyPart = styled.div`
    margin: 10px;
`;

const Element = styled(NavLink)`
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 65px;
    height: 65px;

    &:hover {
        cursor: pointer;
    }
`;

const AllProducts = styled(NavLink)`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${themeVars.black};
    font-size: 15px;
    font-weight: bold;
    border-top: 5px solid ${themeVars.caribbeanGreen};
    border-right: 5px solid ${themeVars.yellow};
    border-bottom: 5px solid ${themeVars.blue};
    border-left: 5px solid ${themeVars.pink};
    width: 65px;
    height: 65px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.p`
    text-align: center;
    color: ${themeVars.black};
    font-size: 12px;
    font-weight: 700;
`;

const Svg = styled.img`
    width: 65%;
    margin: 0;
`;

const BodyParts = () => {
    return (
        <Main>
            <BodyPart>
                <Element
                    exact
                    to="/products/Wrist"
                    style={{ border: `5px solid ${themeVars.caribbeanGreen}` }}
                    activeStyle={{
                        border: `5px dashed ${themeVars.caribbeanGreen}`,
                    }}
                >
                    <Title>Wrist</Title>
                    <Svg src={Band} alt="Wrist products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Arms"
                    style={{ border: `5px solid ${themeVars.yellow}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.yellow}` }}
                >
                    <Title>Arms</Title>
                    <Svg src={Bodybuilding} alt="Arms  products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Head"
                    style={{ border: `5px solid ${themeVars.blue}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.blue}` }}
                >
                    <Title>Head</Title>
                    <Svg src={Manhair} alt="Head products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Waist"
                    style={{ border: `5px solid ${themeVars.pink}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.pink}` }}
                >
                    <Title>Waist</Title>
                    <Svg src={Waist} alt="Waist products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Hands"
                    style={{ border: `5px solid ${themeVars.caribbeanGreen}` }}
                    activeStyle={{
                        border: `5px dashed ${themeVars.caribbeanGreen}`,
                    }}
                >
                    <Title>Hands</Title>
                    <Svg src={Hand} alt="Hands products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Feet"
                    style={{ border: `5px solid ${themeVars.yellow}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.yellow}` }}
                >
                    <Title>Feet</Title>
                    <Svg src={RunningShoes} alt="Feet products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Neck"
                    style={{ border: `5px solid ${themeVars.blue}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.blue}` }}
                >
                    <Title>Neck</Title>
                    <Svg src={Neck} alt="Neck products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <Element
                    exact
                    to="/products/Torso"
                    style={{ border: `5px solid ${themeVars.pink}` }}
                    activeStyle={{ border: `5px dashed ${themeVars.pink}` }}
                >
                    <Title>Torso</Title>
                    <Svg src={Torso} alt="Torso products" />
                </Element>
            </BodyPart>
            <BodyPart>
                <AllProducts
                    exact
                    to="/products/all"
                    activeStyle={{
                        borderTop: `5px dashed ${themeVars.caribbeanGreen}`,
                        borderRight: `5px dashed ${themeVars.yellow}`,
                        borderBottom: `5px dashed ${themeVars.blue}`,
                        borderLeft: `5px dashed ${themeVars.pink}`,
                    }}
                >
                    SHOW ALL
                </AllProducts>
            </BodyPart>
        </Main>
    );
};

export default BodyParts;
