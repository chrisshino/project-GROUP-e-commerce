import React from 'react';
import styled from 'styled-components';
import { themeVars } from './GlobalStyles';

const CompanyName = styled.div`
    font-family: 'Oswald', sans-serif;
    font-weight: bold;

    .yellow {
        color: #FFD116;
        font-family: 'Oswald', sans-serif;
    }
`;

export const LogoBlack = () => {
    return (
        <CompanyName style={{color: `${themeVars.black}`, fontSize: '36px'}}>WEAR<span className='yellow'>LAB</span></CompanyName>
    );
}

export const LogoBlackDesktop = () => {
    return (
        <CompanyName style={{color: `${themeVars.black}`, fontSize: '45px'}}>WEAR<span className='yellow'>LAB</span></CompanyName>
    );
}

export const LogoWhite = () => {
    return (
        <CompanyName style={{color: `${themeVars.white}`, fontSize: '28px'}}>WEAR<span className='yellow'>LAB</span></CompanyName>
    );
}