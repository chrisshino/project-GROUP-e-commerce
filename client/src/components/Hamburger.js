import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { toggleHamburger } from "../actions";
import { useDispatch } from "react-redux";
import { onMobileMediaQuery, onTabletMediaQuery } from "./Responsive";


const hamburgerStyle = {
    backgroundColor: `${themeVars.white}`,
    opacity: "0.99",
    color: `${themeVars.blue}`,
    width: "100%",
    height: "100vh",
    borderTop: "1px solid black",
    paddingTop: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    fontSize: "2rem",
    
};

const innerDivStyle = {
    // fontSize: "1rem",
    color: "black",
    marginTop: "10px",
};

const BodyPartWrapper = styled.div`
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        ${onTabletMediaQuery} {
            width: 70%;
        }

        ${onMobileMediaQuery} {
            width: 80%;
        }
`; 

const BodyPartDiv = styled.button`
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    width: 100px;
    background: ${themeVars.blue};
    margin: 10px;
    padding: 20px 40px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.5s;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    border: none;
    outline: none;
    &:active {
        transform: scale(1.1);
    }
`;

const Career = styled.button`
    color: ${themeVars.midnightGreen};
    margin-top: 10px;
    border: none;
    outline: none;
    background: none;
    font-size: 2rem;

    &:active {
        transform: scale(1.1);
    }
`;

const About = styled.button`
    color: ${themeVars.midnightGreen};
    margin-top: 10px;
    border: none;
    outline: none;
    background: none;
    font-size: 2rem;

    &:active {
        transform: scale(1.1);
    }
`;

const Hamburger = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const handleBodyPartsBtnClick = (link) => {
        dispatch(toggleHamburger());
        history.push(link);
    }
    const handleAbout = () => {
        dispatch(toggleHamburger());
        history.push("/about");
    };
    const handleCareer = () => {
        dispatch(toggleHamburger());
        history.push("/career");
    };

    return (
        <div style={hamburgerStyle}>
            <div style={{ color: `${themeVars.midnightGreen}`, marginTop:'1.5rem'  }}>Item Category</div>
            <BodyPartWrapper>
                <BodyPartDiv 
                    style={{backgroundColor:`${themeVars.caribbeanGreen}`}}
                    onClick={() => handleBodyPartsBtnClick("/products/Wrist")}
                >
                    Wrist
                </BodyPartDiv>
                <BodyPartDiv onClick={() => handleBodyPartsBtnClick("/products/Arms")}>Arm</BodyPartDiv>
                <BodyPartDiv onClick={() => handleBodyPartsBtnClick("/products/Head")}>Head</BodyPartDiv>
                <BodyPartDiv 
                    style={{backgroundColor:`${themeVars.caribbeanGreen}`}}
                    onClick={() => handleBodyPartsBtnClick("/products/Waist")}
                >
                    Waist
                </BodyPartDiv>
                <BodyPartDiv 
                    style={{backgroundColor:`${themeVars.caribbeanGreen}`}}
                    onClick={() => handleBodyPartsBtnClick("/products/Hands")}
                >
                    Hand
                </BodyPartDiv>
                <BodyPartDiv onClick={() => handleBodyPartsBtnClick("/products/Feet")}>Feet</BodyPartDiv>
                <BodyPartDiv onClick={() => handleBodyPartsBtnClick("/products/Neck")}>Neck</BodyPartDiv>
                <BodyPartDiv 
                    style={{backgroundColor:`${themeVars.caribbeanGreen}`}}
                    onClick={() => handleBodyPartsBtnClick("/products/Torso")}
                >
                    Torso
                </BodyPartDiv>
            </BodyPartWrapper>
            <Career onClick={handleCareer}>
                Career
            </Career>
            <About onClick={handleAbout}>
                About Us
            </About>
        </div>
    );
};

export default Hamburger;
