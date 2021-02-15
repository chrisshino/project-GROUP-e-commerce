import React from "react";

import styled from "styled-components";

import Hero from "../components/Hero";
import StoreComponent from "../components/StoreComponent";
import Top5 from "../components/Top5";
import StripeContainer from "../components/stripe/StripeContainer";

const LandingPage = () => {
    return (
        <Main>
            <Hero />
            <StoreComponent />
            <Top5 />
            <StripeContainer />
        </Main>
    );
};

export default LandingPage;

const Main = styled.div`
    /* height: calc(100% -105px); */
`;
