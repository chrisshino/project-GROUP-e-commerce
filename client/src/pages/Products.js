import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import BodyParts from "../components/BodyParts";
import { themeVars } from "../components/GlobalStyles";
import SmallProduct from "../components/SmallProduct";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import { onDesktopMediaQuery, onTabletMediaQuery, onMobileMediaQuery } from "../components/Responsive";

//This page is for desktop version only
const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch("/products")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setLoaded(true);
            });
    }, []);

    return (
        <Main id="allProducts">
            <BodyParts />
            <TextWrapper2>
                <Para2>List of all products</Para2>
            </TextWrapper2>
            {Loaded ? (
                <Wrapper>
                    {allProducts.data.map((item, i) => {
                        return <SmallProduct key={i} item={item} i={i} />;
                    })}
                </Wrapper>
            ) : (
                <>
                    <Center>
                        <Loading />
                    </Center>
                </>
            )}
        </Main>
    );
}

const Main = styled.div`
    ${onDesktopMediaQuery} {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const commonWrapperCSS = css`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Para2 = styled.p`
    color: ${themeVars.white};
    font-weight: 700;
    font-size: 25px;
`;

const TextWrapper2 = styled.div`
    ${commonWrapperCSS};
    background-color: ${themeVars.midnightGreen};
    align-items: center;
    padding: 0;
    height: 80px;
`;

const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 20px 0;
`;

export default Products;