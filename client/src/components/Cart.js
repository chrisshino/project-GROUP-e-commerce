import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { getStoreState } from "../reducers/cart-reducer";
import CartSmallProduct from "./CartSmallProduct";
import CartTotal from "./CartTotal";

const cartStyle = {
    backgroundColor: `${themeVars.white}`,
    opacity: "0.99",
    color: `${themeVars.blue}`,
    width: "100%",
    height: "100vh",
    borderTop: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    boxSizing: "border-box",
    fontSize: "1rem",
    marginTop: "1rem",
};

const itemWrapper = {
    width: "90%",
    padding: "20px",
    boxSizing: "border-box",
    // margin: "1rem",
    border: "none"

};

const Cart = () => {
    const storeInventoryState = useSelector(getStoreState).cartReducer;
    const inventoryArray = Object.values(storeInventoryState);
 
    return (
        <div style={cartStyle}>
            {inventoryArray.map((item) => {
                return (
                    <div style={itemWrapper}>
                        <CartSmallProduct item={item} />
                    </div>
                );
            })}
            <CartTotal items={inventoryArray} />
        </div>
    );
};

export default Cart;
