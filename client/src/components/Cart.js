import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { themeVars } from "./GlobalStyles";
import { getStoreState } from "../reducers/cart-reducer";
import CartSmallProduct from "./CartSmallProduct";
import CartTotal from "./CartTotal";
import { useHistory } from "react-router";
import { closeCart } from "../actions";
import { useDispatch } from "react-redux";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "./Responsive";
import { FiShoppingCart } from "react-icons/fi";

const Wrapper = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        justify-content: center;
        background: #F0F0F0;
    }
`;

const CartContainer = styled.div`
    ${onDesktopMediaQuery} {
        width: 80vw;
        min-height: 60vh;
        border-top: 10px solid ${themeVars.caribbeanGreen};
        border-right: 10px solid ${themeVars.yellow};
        border-bottom: 10px solid ${themeVars.blue};
        border-left: 10px solid ${themeVars.pink};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: ${themeVars.white};
        margin: 50px 0 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${themeVars.blue};
        padding-top: 20px;
    }

    ${onTabletMediaQuery} {
        background-color: ${themeVars.white};
        opacity: 0.99;
        color: ${themeVars.blue};
        width: 100%;
        height: 100%;
        border-top: 1px solid ${themeVars.black};
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        box-sizing: border-box;
        font-size: 1rem;
        margin-top: 1.5rem;
        position: absolute;
        top: 70px;
        overflow: scroll;
        padding-top: 10%;
    }

    ${onMobileMediaQuery} {
        background-color: ${themeVars.white};
        opacity: 0.99;
        color: ${themeVars.blue};
        width: 100%;
        height: 100%;
        border-top: 1px solid ${themeVars.black};
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        box-sizing: border-box;
        font-size: 1rem;
        margin-top: 1.5rem;
        position: absolute;
        top: 70px;
        overflow: scroll;
        padding-top: 10%;
    }
`;

const ItemWrapper = styled.div`
    ${onDesktopMediaQuery} {
        width: 70%;
        padding: 20px;
        margin: 15px 0;
        box-sizing: border-box;
        border: none;
    }

    ${onTabletMediaQuery} {
        width: 80%;
        padding: 20px;
        box-sizing: border-box;
        border: none;
    }

    ${onMobileMediaQuery} {
        width: 90%;
        padding: 20px;
        box-sizing: border-box;
        border: none;
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

const Heading = styled.h2`
    color: ${themeVars.white};
    font-weight: 700;
    font-size: 25px;
`;

const CheckoutButton = styled.button`
    background: ${themeVars.midnightGreen};
    outline: none;
    border: none;
    color: white;
    padding: 10px 30px;
    font-size: 25px;
    border-radius: 15px;
    margin-bottom: 50px;

        &.true {
            transform: none;
            opacity: 0.4;
        }

    ${onDesktopMediaQuery} {
        &:hover {
            cursor: pointer;
            transform: scale(1.08);
            transition: .2s transform;
        }

        &.true {
            transform: none;
        }
    }

    ${onTabletMediaQuery} {
        &:active {
            transform: scale(1.08);
        }
    }

    ${onTabletMediaQuery} {
        &:active {
            transform: scale(1.08);
        }
    }

`;

const Cart = () => {
    const storeInventoryState = useSelector(getStoreState).cartReducer;
    const totalCostState = useSelector(getStoreState).totalReducer;
    const dispatch = useDispatch();
    const inventoryArray = Object.values(storeInventoryState);
    const history = useHistory();
    const toCheckoutFunc = () => {
        dispatch(closeCart());
        history.push("/form");
        window.scrollTo(0, 0);
    };
    let disabled = false;

    if (totalCostState.totalCost === "0.00") {
        disabled = true;
    }

    return (
        <>
            <TextWrapper1>
                <Heading>My cart <FiShoppingCart style={{position: "relative", left: "3px", top: "5px"}}/></Heading>
            </TextWrapper1>
            <Wrapper>
                <CartContainer>
                    {inventoryArray.map((item, i) => {
                        return (
                            <ItemWrapper key={i}>
                                <CartSmallProduct item={item} />
                            </ItemWrapper>
                        );
                    })}
                    <CartTotal items={inventoryArray} />
                    <CheckoutButton
                        disabled={disabled}
                        className={disabled}
                        onClick={toCheckoutFunc}
                    >
                        Checkout
                    </CheckoutButton>
                </CartContainer>
            </Wrapper>
        </>
    );
};

export default Cart;
