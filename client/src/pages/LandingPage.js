import React from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import StoreComponent from "../components/StoreComponent";

const LandingPage = () => {
    return (
        <Main>
            <Hero />
            <StoreComponent />
        </Main>
    );
};

export default LandingPage;

const Main = styled.div`
    /* height: calc(100% -105px); */
`;
