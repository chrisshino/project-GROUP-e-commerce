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

const CartWrapper = styled.div`
    background-color: ${themeVars.white};
    opacity: 0.99;
    color: ${themeVars.blue};
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
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
`;

const itemWrapper = {
    width: "90%",
    padding: "20px",
    boxSizing: "border-box",
    border: "none",
};

const CheckoutButton = styled.button`
    background: ${themeVars.midnightGreen};
    outline: none;
    border: none;
    color: white;
    padding: 10px 30px;
    font-size: 25px;
    border-radius: 15px;
    margin-bottom: 50px;

    &:active {
        transform: scale(1.05);
    }

    &.true {
        opacity: 0.4;
    }

    ${onDesktopMediaQuery} {
            &:hover {
                &.false {
                cursor: pointer;
                transform: scale(1.05);
            }    
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

    if (totalCostState.totalCost === '0.00') {
        disabled = true;
    }

    return (
        <CartWrapper>
            {inventoryArray.map((item, i) => {
                return (
                    <div style={itemWrapper} key={i}>
                        <CartSmallProduct item={item} />
                    </div>
                );
            })}
            <CartTotal items={inventoryArray} />
            <CheckoutButton 
            className={disabled}
            // style={{opacity: disabled ? `50%` : `100%`}}
            disabled={disabled} onClick={toCheckoutFunc}>
                Checkout
            </CheckoutButton>
        </CartWrapper>
    );
};

export default Cart;
