import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "./GlobalStyles";
import { onTabletMediaQuery, onMobileMediaQuery, onDesktopMediaQuery } from "./Responsive";
import { addTotal } from "../actions";

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 1px solid gray;
    padding: 1rem;
    color: ${themeVars.midnightGreen};
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    ${onDesktopMediaQuery} {
        margin-top: 30px;
        width: 60%;
    }


    ${onTabletMediaQuery} {
        margin-top: 30px;
        width: 80%;
    }

    ${onMobileMediaQuery} {
        width: 85%;
    }
`;

const CartEmpty = styled.p`
    ${onDesktopMediaQuery} {
        font-size: 22px;
        margin: 50px 0 30px 0;
    }

    ${onTabletMediaQuery} {
        font-size: 20px;
        margin-bottom: 30px;
    }

    ${onMobileMediaQuery} {
        font-size: 18px;
        margin-bottom: 30px;
    }
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
    const dispatch = useDispatch();
    const totalCost = items
        .reduce((total, item) => {
            return (
                total +
                Math.round(
                    Number(item.price.replace("$", "")) * item.quantity * 100
                ) /
                    100
            );
        }, 0)
        .toFixed(2);
  
    const tax = (totalCost * 0.13).toFixed(2);
    let shipping = 0;

    if (totalCost <= 50) {
        shipping = (totalCost * 0.05).toFixed(2);
    }

    const fullTotal = (
        Number(totalCost) +
        Number(tax) +
        Number(shipping)
    ).toFixed(2);

    useEffect(() => {
        dispatch(addTotal(fullTotal));
    }, [fullTotal, dispatch]);

    if (items.length > 0) {
        return (
            <Wrapper>
                <div style={subTotalStyle}>
                    <div>Subtotal</div>
                    <div>${totalCost}</div>
                </div>

                <div style={subTotalStyle}>
                    <div>Shipping</div>
                    <div>${shipping}</div>
                </div>
                <div style={subTotalStyle}>
                    <div>Tax HST 13%</div>
                    <div>${tax}</div>
                </div>
                <div style={totalStyle}>
                    <div>Total</div>
                    <div>${fullTotal}</div>
                </div>
            </Wrapper>
        );
    } else {
        return (
            <CartEmpty>Add some items to the cart...</CartEmpty>

        );
    }
};

export default CartTotal;
