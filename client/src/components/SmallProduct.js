import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions";

const SmallProduct = ({ item, i }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const addToCartFunc = (item) => {
        dispatch(addToCart(item));
    };
    let warning = "normal";
    let disabled = false;

    if (item.numInStock <= 0) {
        warning = "red";
        disabled = true;
    }

    return (
        <Item 
            key={i} 
            onClick={() => {
                history.push(`/product/${item._id}`);
                window.scrollTo(0,0);
            }}
        >
            <Img src={item.imageSrc} alt="Product image" />
            <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <Price>{item.price}</Price>
                <ItemFooter>
                    <Stock>
                        stock:{" "}
                        <Span className={warning}>{item.numInStock}</Span>
                    </Stock>
                    <Add
                        disabled={disabled}
                        className={disabled}
                        onClick={() => addToCartFunc(item)}
                    >
                        Add
                    </Add>
                </ItemFooter>
            </ItemDetails>
        </Item>
    );
};

export default SmallProduct;

const Item = styled.div`
    width: 90%;
    display: flex;
    margin: 5% auto;
    text-decoration: none;
    &:visited {
        color: ${themeVars.midnightGreen};
    }
`;

const Img = styled.img`
    width: 30vw;
    height: 30vw;
`;

const ItemDetails = styled.div`
    height: 30vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2%;
`;

const ItemName = styled.h5`
    color: ${themeVars.midnightGreen};
`;

const ItemFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Stock = styled.p`
    color: grey;
    padding-right: 10px;
    font-size: 12px;
`;

const Span = styled.span`
    font-weight: 700;
    &.normal {
        color: grey;
    }
    &.red {
        color: ${themeVars.pink};
    }
`;

const Add = styled.button`
    border: none;
    background-color: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    font-weight: 700;
    border-radius: 20px;
    height: 2em;
    width: 4em;
    &:active {
        transform: scale(1.1);
    }
    &.true {
        opacity: 0.4;
    }
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-weight: 700;
`;
