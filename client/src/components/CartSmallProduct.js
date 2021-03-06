import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
    subtractFromCart,
    closeCart,
} from "../actions";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "./Responsive";

const CartSmallProduct = ({ item, i }) => {
    // const [zeroStock, setZeroStock] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();
    let zeroStock = false;
    let disabled = false;

    if (item.numInStock <= 0) {
        disabled = true;
        zeroStock = true;
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
        <Item key={i}>
            <CloseButton
                onClick={() => {
                    deleteOnClick(item);
                }}
            >
                X
            </CloseButton>
            <Img src={item.imageSrc} alt="Product image" />

            <ItemDetails>
                <ItemName
                    onClick={() => {
                        dispatch(closeCart());
                        history.push(`/product/${item._id}`);
                        window.scrollTo(0, 0);
                    }}
                >
                    {item.name}
                </ItemName>
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
                    </Stock>
                    {zeroStock ? <p>Max</p> : <></>}
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

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const CloseButton = styled.button`
    position: absolute;
    border: none;
    background: none;
    outline: none;
    color: ${themeVars.blue};

    &:active {
        transform: scale(1.07);
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: ${themeVars.yellow};
    }

    ${onDesktopMediaQuery} {
        font-size: 18px;
        top: -5px;
        left: -25px;
    }

    ${onTabletMediaQuery} {
        font-size: 18px;
        top: 0;
        left: -10px;
    }

    ${onMobileMediaQuery} {
        font-size: 15px;
        top: 0;
        left: -10px;
    }
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

    &:hover {
        cursor: pointer
    }

    ${onDesktopMediaQuery} {
        font-size: 18px;
    }

    ${onTabletMediaQuery} {
        font-size: 1rem;
    }

    ${onMobileMediaQuery} {
        font-size: 1rem;
    }
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
    font-weight: 700;

    ${onDesktopMediaQuery} {
        font-size: 18px;
    }

    ${onTabletMediaQuery} {
        font-size: 1rem;
    }

    ${onMobileMediaQuery} {
        font-size: 1rem;
    }
`;
