import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BigProduct = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`/product/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res.data[0]);
                setLoaded(true);
            });
    }, []);
    console.log(product);

    return (
        <Item key={product._id} to={`/product/${id}`}>
            <Img src={product.imageSrc} alt="Product image" />
            <ItemDetails>
                <ItemName>{product.name}</ItemName>
                <Price>{product.price}</Price>
                <ItemFooter>
                    <Stock>stock: {product.numInStock} </Stock>
                    <Add>Add</Add>
                </ItemFooter>
            </ItemDetails>
        </Item>
    );
};

export default BigProduct;

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
