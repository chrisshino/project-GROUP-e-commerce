import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../actions";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "./Responsive";

const SmallProduct = ({ item, i }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const addToCartFunc = (item, ev) => {
        ev.stopPropagation();

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
                window.scrollTo(0, 0);
            }}
        >
            <ImgWrapper>
                <Img src={item.imageSrc} alt="Product image" loading="lazy" />
            </ImgWrapper>
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
                        onClick={(ev) => addToCartFunc(item, ev)}
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
    display: flex;
    text-decoration: none;

    &:visited {
        color: ${themeVars.midnightGreen};
    }

    ${onDesktopMediaQuery} {
        width: 15%;
        flex-direction: column;
        align-items: center;
        padding: 35px 30px;

        &:hover {
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border-radius: 10px;
        }
    }

    ${onTabletMediaQuery} {
        width: 100%;
        margin: 50px auto;
    }

    ${onMobileMediaQuery} {
        width: 100%;
        margin: 30px auto;
    }
`;

const ImgWrapper = styled.div`
    ${onDesktopMediaQuery} {
        width: 120px;
        height: 120px;
        margin-bottom: 20px;
    }

    ${onTabletMediaQuery} {
        width: 120px;
        height: 120px;
    }

    ${onMobileMediaQuery} {
        width: 110px;
        height: 110px;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;

    ${onTabletMediaQuery} {
        width: 100%;
        padding-left: 2%;
    }

    ${onMobileMediaQuery} {
        height: 30vw;
        width: 100%;
        justify-content: space-between;
        padding-left: 2%;
    }
`;

const ItemName = styled.h5`
    color: ${themeVars.midnightGreen};

    ${onDesktopMediaQuery} {
        font-size: 15px;
        height: 90px;
    }

    ${onTabletMediaQuery} {
        font-size: 18px;
        margin: 10px 0 15px 20px;
    }

    ${onMobileMediaQuery} {
        font-size: 14px;
        margin: 5px 0 10px 15px;
    }
`;

const ItemFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${onDesktopMediaQuery} {
        padding-right: 15px;
    }

    ${onTabletMediaQuery} {
        margin-top: 12px;
    }
`;

const Stock = styled.p`
    color: grey;
    padding-right: 10px;

    ${onDesktopMediaQuery} {
        font-size: 14px;
    }

    ${onTabletMediaQuery} {
        font-size: 14px;
    }

    ${onMobileMediaQuery} {
        font-size: 12px;
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

    ${onDesktopMediaQuery} {
        &:hover {
            cursor: pointer;
        }
    }
`;

const Price = styled.p`
    color: ${themeVars.midnightGreen};
    font-weight: 700;

    ${onDesktopMediaQuery} {
        margin: 15px 0;
        font-size: 18px;
    }

    ${onTabletMediaQuery} {
        margin-left: 20px;
    }

    ${onMobileMediaQuery} {
        margin-left: 15px;
    }
`;
