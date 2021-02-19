import React from "react";

import styled from "styled-components";

import Hero from "../components/Hero";
import StoreComponent from "../components/StoreComponent";
import Top5 from "../components/Top5";


const LandingPage = () => {
    return (
        <Main>
            <Hero />
            <StoreComponent />
            <Top5 />
        </Main>
    );
};

export default LandingPage;

const Main = styled.div`
    
`;
