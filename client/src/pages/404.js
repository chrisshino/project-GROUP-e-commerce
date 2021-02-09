import React from "react";
import styled from "styled-components";
import { FiFrown } from "react-icons/fi";

const ErrorPage = () => {
    return (
        <Main>
            <FiFrown size={90} />
            <h1>404</h1>
            <h4>Page not found</h4>
        </Main>
    );
};

export default ErrorPage;

const Main = styled.div`
    height: 76vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
