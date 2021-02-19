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

const cartStyle = {
    backgroundColor: `${themeVars.white}`,
    opacity: "0.99",
    color: `${themeVars.blue}`,
    width: "100%",
    // minHeight: "100vh",
    height: "100%",
    borderTop: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    boxSizing: "border-box",
    fontSize: "1rem",
    marginTop: "1.5rem",
    position: "absolute",
    top: "70px",
    overflow: "scroll",
    // paddingTop: '1rem'
    paddingTop: "10%",
};

const itemWrapper = {
    width: "90%",
    padding: "20px",
    boxSizing: "border-box",
    // margin: "1rem",
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
        <div style={cartStyle}>
            {inventoryArray.map((item, i) => {
                return (
                    <div style={itemWrapper} key={i}>
                        <CartSmallProduct item={item} />
                    </div>
                );
            })}
            <CartTotal items={inventoryArray} />
            <CheckoutButton 
            style={{opacity: disabled ? `50%` : `100%`}}
            disabled={disabled} onClick={toCheckoutFunc}>
                Checkout
            </CheckoutButton>
        </div>
    );
};

export default Cart;
