import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../components/GlobalStyles";

const wrapper = {
    margin: "2rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: `5px solid ${themeVars.midnightGreen}`,
    height: "calc(100vh - 355px)",
};

const margin = {
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "center",
};

const Confirmation = () => {
    const stripeState = useSelector((state) => state.stripeReducer);
    const { id, billing_details } = stripeState && stripeState.details;
    const { address, email, name } = billing_details;
    const { city, state, country, line1, postal_code } = address;

    return (
        <div style={wrapper}>
            <h3
                style={{ marginTop: "10px", textAlign: "center" }}
            >{`Thank you for your order,`}</h3>
            <br />
            <h3
                style={{
                    color: `${themeVars.pink}`,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "10px",
                }}
            >
                {name}
            </h3>
            <p style={{ marginTop: "10px", textAlign: "center" }}>{`Your order confirmation id is: `}</p>
            <br/>
            <p style={{
                            color: `${themeVars.pink}`,
                            fontWeight: "bold",
                            textAlign: 'center'
                        }}>{id}</p>
            <p style={{ marginTop: "10px", textAlign: "center" }}>{`Your confirmation Email address is:`}</p>
            <br/>
            <p style={{
                            color: `${themeVars.pink}`,
                            fontWeight: "bold",
                            textAlign: 'center'
                        }}>{email}</p>
            <div style={margin}>
                <p style={margin}>Here are your shipping details:</p>
                <div style={margin}>
                    <span
                        style={{
                            color: `${themeVars.pink}`,
                            fontWeight: "bold",
                        }}
                    >{`${line1},`}</span>
                    <br />
                    <span
                        style={{
                            color: `${themeVars.pink}`,
                            fontWeight: "bold",
                        }}
                    >{`${city}, ${state}, ${country}`}</span>

                    <br />
                    <span
                        style={{
                            color: `${themeVars.pink}`,
                            fontWeight: "bold",
                        }}
                    >{`${postal_code}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
