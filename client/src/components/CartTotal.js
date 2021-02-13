import React from "react";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 1px solid gray;
    width: 85%;
    padding: 1rem;
    color: ${themeVars.midnightGreen};
    display: flex;
    flex-direction: column;
`;

const subTotalStyle = {
    display: "flex",
    justifyContent: "space-between",
};

const totalStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: `${themeVars.pink}`,
    marginTop: "10px",
};

const CartTotal = ({ items }) => {
    // console.log(items);
    const totalCost = items.reduce((total,item) => {
        return total + Math.round(Number(item.price.replace("$","")) * item.quantity * 100) / 100
    }, 0).toFixed(2)
    const tax = (totalCost * 0.13).toFixed(2)
    const shipping = (totalCost * 0.05).toFixed(2)

    const fullTotal = (Number(totalCost) + Number(tax) + Number(shipping)).toFixed(2)

    
    if (items.length > 0) {
        return (
            <Wrapper>
                <div style={subTotalStyle}>
                    <div>Subtotal</div>
                    <div>${totalCost}</div>
                </div>
                <div style={subTotalStyle}>
                    <div>Tax</div>
                    <div>${tax}</div>
                </div>
                <div style={subTotalStyle}>
                    <div>Shipping</div>
                    <div>${shipping}</div>
                </div>
                <div style={totalStyle}>
                    <div>Total</div>
                    <div>${fullTotal}</div>
                </div>
            </Wrapper>
        );
    } else {
        return <div>Add some items to the cart...</div>;
    }
};

export default CartTotal;
