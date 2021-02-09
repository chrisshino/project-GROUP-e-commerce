import React from 'react'
import styled, { css } from 'styled-components';
import { themeVars } from "./GlobalStyles";

import heroGif from '../assets/hero.gif';

const commonWrapperCSS = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextWrapper1 = styled.div`
  ${commonWrapperCSS};
  height: 28px;
  background-color: ${themeVars.black};
  align-items: center;
`;

const TextWrapper2 = styled.div`
  ${commonWrapperCSS};
  height: 56px;
  background-color: ${themeVars.midnightGreen};
  align-items: flex-end;
  position: relative;
  top: -25px;
`;

const Para1 = styled.p`
  color: ${themeVars.white};
  font-size: 14px;
  font-weight: 300;
`;

const Para2 = styled.p`
  color: ${themeVars.white};
  font-size: 20px;
  font-weight: 700;
  position: relative;
  top: -10px;
`;

const Gif = styled.img`
  width: 100%;
  margin-top: 14px;
`;


const Hero = () => {
  return (
    <>
      <TextWrapper1>
        <Para1>Free shipping on all orders over $50.</Para1>
      </TextWrapper1>
      <Gif src={heroGif} alt='gif of smart watch' />
      <TextWrapper2>
        <Para2>Select by body parts</Para2>
      </TextWrapper2>
    </>
  )
}

export default Hero
