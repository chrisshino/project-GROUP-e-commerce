import React from "react";
import { useSelector } from "react-redux";
import { themeVars } from "./GlobalStyles";
import { getStoreState } from "../reducers/cart-reducer";
import CartSmallProduct from "./CartSmallProduct";
import CartTotal from "./CartTotal";

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
    paddingTop: '10%'
};

const itemWrapper = {
    width: "90%",
    padding: "20px",
    boxSizing: "border-box",
    // margin: "1rem",
    border: "none",
};

const Cart = () => {
    const storeInventoryState = useSelector(getStoreState).cartReducer;
    const inventoryArray = Object.values(storeInventoryState);

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
        </div>
    );
};

export default Cart;
