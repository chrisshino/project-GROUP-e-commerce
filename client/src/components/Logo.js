import React from 'react';
import styled from 'styled-components';

const CompanyName = styled.div`
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: black;

    .yellow {
        color: #FFD116;
    }
`;

const Logo = () => {
    return (
        <CompanyName>WEAR<span className='yellow'>LAB</span></CompanyName>
    );
}

export default Logo;