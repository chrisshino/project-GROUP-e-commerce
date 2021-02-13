import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { themeVars } from "../components/GlobalStyles";
import SmallProduct from "../components/SmallProduct";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import { useParams } from "react-router";

const Store = () => {
    const { bodypart } = useParams();

    const [items, setItems] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`/products/${bodypart}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoaded(true);
            });
    }, [bodypart]);

    return (
        <Main>
            <TextWrapper2>
                <Para2>Products for your {bodypart}</Para2>
            </TextWrapper2>
            {Loaded ? (
                <>
                    {items.data.map((item, i) => {
                        return <SmallProduct key={i} item={item} i={i} />;
                    })}
                </>
            ) : (
                <>
                    <Center>
                        <Loading />
                    </Center>
                </>
            )}
        </Main>
    );
};

export default Store;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const commonWrapperCSS = css`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Para2 = styled.p`
    color: ${themeVars.white};
    font-size: 20px;
    font-weight: 700;
`;

const TextWrapper2 = styled.div`
    ${commonWrapperCSS};
    height: 56px;
    background-color: ${themeVars.midnightGreen};
    align-items: center;
    padding: 0;
`;

const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
