import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import { useSelector } from "react-redux";
import { addToCart } from "../actions";
import { getStoreState } from "../reducers/cart-reducer";

const BigProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const state = useSelector(getStoreState).cartReducer[id];
    const addToCartFunc = (product) => {
        dispatch(addToCart(product));
    };

    const [product, setProduct] = useState([]);
    const [company, setCompany] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!Loaded) {
            fetch(`/product/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res.data[0]);
                });
        }
    }, [Loaded, id]);

    useEffect(() => {
        if (Object.keys(product).length > 0) {
            fetch(`/company/${product.companyId}`)
                .then((res) => res.json())
                .then((res) => {
                    setCompany(res.data[0]);
                    setLoaded(true);
                });
        }
    }, [product, setProduct]);

    let warning = "normal";
    let disabled = false;

    if ((state && state.numInStock <= 0) || product.numInStock <= 0) {
        warning = "red";
        disabled = true;
    }
    return (
        <>
            {Loaded ? (
                <>
                    <Item>
                        <Img src={product.imageSrc} alt="Product image" />
                        <ItemDetails>
                            <ItemName>{product.name}</ItemName>
                            <Compagny>
                                <P>
                                    Country: <Span>{company.country}</Span>
                                </P>
                                <P>
                                    Company:{" "}
                                    <Span>
                                        <A href={company.url}>{company.name}</A>
                                    </Span>
                                </P>
                                <P>
                                    Body Part:{" "}
                                    <Span>{product.body_location}</Span>
                                </P>
                            </Compagny>
                            <Align>
                                <Price>{product.price}</Price>
                                <ItemFooter>
                                    <Stock>
                                        stock:{" "}
                                        <Span className={warning}>
                                            {state
                                                ? state.numInStock
                                                : product.numInStock}
                                        </Span>
                                    </Stock>{" "}
                                    <Add
                                        disabled={disabled}
                                        className={disabled}
                                        onClick={() => addToCartFunc(product)}
                                    >
                                        Add
                                    </Add>
                                </ItemFooter>
                            </Align>
                        </ItemDetails>
                    </Item>
                </>
            ) : (
                <>
                    <Center>
                        <Loading />
                    </Center>
                </>
            )}
        </>
    );
};

export default BigProduct;

const Item = styled.div`
    width: 90%;
    height: 575px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% auto;
    text-decoration: none;
    &:visited {
        color: ${themeVars.midnightGreen};
    }
`;

const Img = styled.img`
    width: 50vw;
    height: 50vw;
    padding: 20px;
`;

const ItemDetails = styled.div`
    height: 30vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2%;
`;

const Compagny = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
`;

const P = styled.p`
    padding: 5px;
`;

const ItemName = styled.h5`
    text-align: center;
    font-size: 1.5em;
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
    font-weight: 900;
    border-radius: 20px;
    height: 2em;
    width: 6em;
    &:active {
        transform: scale(1.1);
    }
    &.true {
        opacity: 0.4;
    }
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-weight: 900;
`;

const Align = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
`;

const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const A = styled.a`
    color: ${themeVars.midnightGreen};
    text-decoration: none;
    &:visited {
        color: ${themeVars.midnightGreen};
    }
`;
