import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { themeVars } from "../components/GlobalStyles";
import SmallProduct from "../components/SmallProduct";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import { useParams } from "react-router";
import ReactPaginate from "react-paginate";

import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "../components/Responsive";

import BodyParts from "../components/BodyParts";

const Store = () => {
    const { bodypart } = useParams();

    const [allProducts, setAllProducts] = useState([]);
    const [Loaded, setLoaded] = useState(false);
    const [pageCount, setPageCount] = useState();
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(`/products/${bodypart}`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data.data);
                setPageCount(Math.ceil(data.data.length / 10));
                setPosts(
                    data.data
                        .slice(0, 10)
                        .map((item, i) => (
                            <SmallProduct key={i} item={item} i={i} />
                        ))
                );
                setLoaded(true);
            });
    }, [bodypart]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * 10;
        setPosts(
            allProducts
                .slice(offset, offset + 10)
                .map((item, i) => <SmallProduct key={i} item={item} i={i} />)
        );
    };

    return (
        <Main>
            <BodyParts />
            <TextWrapper2>
                <Para2>Products for your {bodypart}</Para2>
            </TextWrapper2>
            {Loaded ? (
                <>
                    <Wrapper>{posts}</Wrapper>
                    {pageCount > 1 ? (
                        <>
                            <ReactPaginate
                                previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                            <br />
                        </>
                    ) : (
                        <></>
                    )}
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
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 20px 0;
    }

    ${onTabletMediaQuery} {
        width: 80%;
    }

    ${onMobileMediaQuery} {
        width: 92%;
    }
`;
