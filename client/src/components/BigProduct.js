import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as Loading } from "../assets/Spinner-1s-200px.svg";
import { useSelector } from "react-redux";
import { addToCart } from "../actions";
import { getStoreState } from "../reducers/cart-reducer";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "./Responsive";

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
            <TextWrapper1>
                <Para1>Free shipping on all orders over $50.</Para1>
            </TextWrapper1>
            {Loaded ? (
                <Wrapper>
                    <Item>
                        <Img src={product.imageSrc} alt="Product image" />
                        <ItemDetails>
                            <ItemName>{product.name}</ItemName>
                            <Company>
                                <P>
                                    Made in: <Span>{company.country}</Span>
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
                            </Company>
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
                </Wrapper>
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

const Wrapper = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: center;
        padding: 80px 0;
        background: #F0F0F0;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;

    ${onDesktopMediaQuery} {
        width: 70%;
        justify-content: center;
        border-top: 15px solid ${themeVars.caribbeanGreen};
        border-right: 15px solid ${themeVars.yellow};
        border-bottom: 15px solid ${themeVars.blue};
        border-left: 15px solid ${themeVars.pink};
        background-color: ${themeVars.white};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    ${onTabletMediaQuery} {
        width: 75%;
        height: 575px;
        flex-direction: column;
        margin: 30px auto 100px auto;
        text-decoration: none;
    }

    ${onMobileMediaQuery} {
        width: 90%;
        height: 575px;
        flex-direction: column;
        margin: 30px auto 50px auto;
        text-decoration: none;
    }
    
    &:visited {
        color: ${themeVars.midnightGreen};
    }
`;

const Img = styled.img`
    ${onDesktopMediaQuery} {
        width: 250px;
        height: 250px;
        margin: 0 70px 0 50px;
    }

    ${onTabletMediaQuery} {
        width: 250px;
        height: 250px;
        padding: 40px;
    }

    ${onMobileMediaQuery} {
        width: 50vw;
        height: 50vw;
        padding: 20px;
    }
`;

const ItemDetails = styled.div`
    ${onDesktopMediaQuery} {
        height: 450px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 50px;
    }
    
    ${onTabletMediaQuery} {
        height: 20vw;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-left: 2%;
    }

    ${onMobileMediaQuery} {
        height: 30vw;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 2%;
    }
`;

const Company = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${onDesktopMediaQuery} {
        font-size: 20px;
        padding: 30px 0;
    }

    ${onTabletMediaQuery} {
        padding: 30px 0;
        font-size: 18px;
    }

    ${onMobileMediaQuery} {
        padding: 30px 0;
        font-size: 18px;
    }
`;

const P = styled.p`
    ${onTabletMediaQuery} {
        padding: 5px;
    }

    ${onMobileMediaQuery} {
        padding: 5px;
    }
`;

const ItemName = styled.h5`
    ${onDesktopMediaQuery} {
        text-align: left;
        font-size: 25px;
    }

    ${onTabletMediaQuery} {
        text-align: center;
        font-size: 20px;
        width: 65%;
    }

    ${onMobileMediaQuery} {
        text-align: center;
        font-size: 1.5em;
    }
`;

const ItemFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Stock = styled.p`
    color: grey;

    ${onDesktopMediaQuery} {
        font-size: 18px;
        padding-right: 20px;
    }

    ${onTabletMediaQuery} {
        font-size: 18px;
        padding-right: 15px;
    }

    ${onMobileMediaQuery} {
        font-size: 12px;
        padding-right: 10px;
    }
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
    outline: none;
    background-color: ${themeVars.midnightGreen};
    color: ${themeVars.white};
    font-weight: 900;

    ${onDesktopMediaQuery} {
        height: 2em;
        width: 5em;
        font-size: 20px;
        border-radius: 18px;

        &:hover {
            cursor: pointer;
            transform: scale(1.08);
            transition: .2s transform;
        }

        &.true {
            transform: none;
            opacity: 0.4;
        }
    }

    ${onTabletMediaQuery} {
        height: 2em;
        width: 6em;
        font-size: 18px;
        border-radius: 20px;

        &:active {
            transform: scale(1.1);
        }
        &.true {
            opacity: 0.4;
        }
    }

    ${onMobileMediaQuery} {
        height: 2em;
        width: 6em;
        font-size: 15px;
        border-radius: 20px;

        &:active {
            transform: scale(1.1);
        }
        &.true {
            opacity: 0.4;
        }
    }
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-weight: 900;

    ${onDesktopMediaQuery} {
        font-size: 30px;
        margin-left: 20px;
    }

    ${onTabletMediaQuery} {
        font-size: 28px;
    }

    ${onMobileMediaQuery} {
        font-size: 20px;
    }
`;

const Align = styled.div`
    display: flex;

    ${onDesktopMediaQuery} {
        justify-content: space-between;
        width: 100%;
    }

    ${onTabletMediaQuery} {
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;
        width: 80%;
    }

    ${onMobileMediaQuery} {
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;
        width: 100%;
    }
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

const TextWrapper1 = styled.div`
    ${onDesktopMediaQuery} {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${themeVars.black};
        height: 80px;
    }

    ${onTabletMediaQuery} {
        display: none;
    }

    ${onMobileMediaQuery} {
        display: none;
    }
`;

const Para1 = styled.p`
    color: ${themeVars.white};
    font-weight: 300;
    font-size: 20px;
`;