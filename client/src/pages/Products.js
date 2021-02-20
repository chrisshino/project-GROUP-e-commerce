import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ReactPaginate from "react-paginate";

import BodyParts from "../components/BodyParts";
import { themeVars } from "../components/GlobalStyles";
import SmallProduct from "../components/SmallProduct";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import {
    onDesktopMediaQuery,
    onTabletMediaQuery,
    onMobileMediaQuery,
} from "../components/Responsive";

//This page is for desktop version only
const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [Loaded, setLoaded] = useState(false);
    const [pageCount, setPageCount] = useState();
    const [posts, setPosts] = useState();

    useEffect(() => {
        if (!Loaded) {
            fetch("/products")
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
        }
    });

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
        <Main id="allProducts">
            <BodyParts />
            <TextWrapper2>
                <Para2>List of all products</Para2>
            </TextWrapper2>
            {Loaded ? (
                <>
                    <Wrapper>{posts}</Wrapper>
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
                <>
                    <Center>
                        <Loading />
                    </Center>
                </>
            )}
        </Main>
    );
};

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
