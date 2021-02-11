import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { toggleHamburger } from "../actions";
import { useDispatch } from "react-redux";


const hamburgerStyle = {
    backgroundColor: `${themeVars.white}`,
    opacity: "0.99",
    color: `${themeVars.blue}`,
    width: "100%",
    height: "100vh",
    marginTop: "1rem",
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

const bodyPartWrapper = {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
};

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

const Hamburger = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const handleAbout = () => {
        dispatch(toggleHamburger(false));
        history.push("/");
    };
    const handleCareer = () => {
      dispatch(toggleHamburger(false));
      history.push("/");
  };

    return (
        <div style={hamburgerStyle}>
            <div style={{ color: `${themeVars.midnightGreen}`  }}>Item Category</div>
            <div style={bodyPartWrapper}>
                <BodyPartDiv style={{backgroundColor:`${themeVars.caribbeanGreen}`}}>Wrist</BodyPartDiv>
                <BodyPartDiv>Arm</BodyPartDiv>
                <BodyPartDiv>Head</BodyPartDiv>
                <BodyPartDiv style={{backgroundColor:`${themeVars.caribbeanGreen}`}}>Waist</BodyPartDiv>
                <BodyPartDiv style={{backgroundColor:`${themeVars.caribbeanGreen}`}}>Hand</BodyPartDiv>
                <BodyPartDiv>Feet</BodyPartDiv>
                <BodyPartDiv>Neck</BodyPartDiv>
                <BodyPartDiv style={{backgroundColor:`${themeVars.caribbeanGreen}`}}>Torso</BodyPartDiv>
            </div>

            <div style={innerDivStyle} onClick={handleAbout}>
                Career
            </div>

            <div style={innerDivStyle} onClick={handleCareer}>About Us</div>
        </div>
    );
};

export default Hamburger;