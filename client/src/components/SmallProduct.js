import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { Link } from "react-router-dom";

const SmallProduct = ({ item, i }) => {
    return (
        <Item key={i} to={`/product/${item._id}`}>
            <Img src={item.imageSrc} alt="Product image" />
            <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <Price>{item.price}</Price>
                <ItemFooter>
                    <Stock>stock: {item.numInStock} </Stock>
                    <Add>Add</Add>
                </ItemFooter>
            </ItemDetails>
        </Item>
    );
};

export default SmallProduct;

const Item = styled(Link)`
    width: 90%;
    display: flex;
    margin: 5% auto;
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

const ItemName = styled.h5``;
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

const Add = styled.button`
    border: none;
    background-color: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    font-weight: 700;
    border-radius: 20px;
    height: 2em;
    width: 4em;
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-weight: 700;
`;
