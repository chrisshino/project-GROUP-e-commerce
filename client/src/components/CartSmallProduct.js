import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, subtractFromCart } from "../actions";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartSmallProduct = ({ item, i }) => {
    const [zeroStock, setZeroStock] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();

    let disabled = false;

    if (item.numInStock <= 0) {
        disabled = true;
        setZeroStock(true);
    }

    let priceByQty =
        Math.round(Number(item.price.replace("$", "")) * item.quantity * 100) /
        100;

    const addOnClick = (item) => {
        dispatch(addToCart(item));
    };

    const minusOnClick = (item) => {
        dispatch(subtractFromCart(item));
    };

    const deleteOnClick = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <Item
            key={i}
            onClick={() => {
                history.push(`/product/${item._id}`);
                window.scrollTo(0, 0);
            }}
        >
            <CloseButton
                onClick={() => {
                    deleteOnClick(item);
                }}
            >
                X
            </CloseButton>
            <Img src={item.imageSrc} alt="Product image" />

            <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemFooter>
                    <Stock>
                        Qty:
                        <PlusMinusButton
                            disabled={disabled}
                            onClick={() => {
                                addOnClick(item);
                            }}
                        >
                            <FiPlus />
                        </PlusMinusButton>
                        {item.quantity}
                        <PlusMinusButton
                            onClick={() => {
                                minusOnClick(item);
                            }}
                        >
                            <FiMinus />
                        </PlusMinusButton>
                        {zeroStock ? <p>nostock</p> : <p>still</p>}
                    </Stock>
                    <Price>${priceByQty}</Price>
                </ItemFooter>
            </ItemDetails>
        </Item>
    );
};

export default CartSmallProduct;

const PlusMinusButton = styled.button`
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 5px;
    border: none;
    width: 25px;
    height: 25px;
    color: ${themeVars.midnightGreen};

    &:active {
        transform: scale(1.07);
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    left: -10px;
    border: none;
    background: none;
    outline: none;
    color: ${themeVars.blue};
    font-size: 15px;
`;

const Item = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    text-decoration: none;
    &:visited {
        color: ${themeVars.midnightGreen};
    }
`;

const Img = styled.img`
    width: 65px;
    height: 65px;
`;

const ItemDetails = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2%;
`;

const ItemName = styled.h5`
    color: ${themeVars.midnightGreen};
    font-size: 1rem;
`;

const ItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

const Stock = styled.p`
    color: grey;
    padding-right: 10px;
    font-size: 14px;
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-size: 1rem;
    font-weight: 700;
`;
