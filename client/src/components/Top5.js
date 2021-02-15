import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { themeVars } from "./GlobalStyles";
import SmallProduct from "./SmallProduct";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";

import { onMobileMediaQuery, onTabletMediaQuery, onDesktopMediaQuery } from "./Responsive";

const Top5 = () => {
    const [top5, setTop5] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch("/products/top5")
            .then((res) => res.json())
            .then((data) => {
                setTop5(data);
                setLoaded(true);
            });
    }, []);

    return (
        <Main id="top5">
            <TextWrapper2>
                <Para2>Recommended for you</Para2>
            </TextWrapper2>
            {Loaded ? (
                <Wrapper>
                    {top5.data.map((item, i) => {
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
};

export default Top5;

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
    font-weight: 700;

    ${onDesktopMediaQuery} {
        font-size: 25px;
    }

    ${onTabletMediaQuery} {
        font-size: 22px;
    }

    ${onMobileMediaQuery} {
        font-size: 20px;
    }
`;

const TextWrapper2 = styled.div`
    ${commonWrapperCSS};
    background-color: ${themeVars.midnightGreen};
    align-items: center;
    padding: 0;

    ${onDesktopMediaQuery} {
        height: 80px;
    }

    ${onTabletMediaQuery} {
        height: 60px;
    }
    
    ${onMobileMediaQuery} {
        height: 56px;
        margin-top: -10px;
        padding-top: 10px;
    }
`;

const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: center;
    }

    ${onTabletMediaQuery} {
        width: 80%;
    }

    ${onMobileMediaQuery} {
        width: 92%;
    }
`;