import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { getStoreState } from "../../reducers/total-reducer";

export const CheckoutForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const totalState = useSelector(getStoreState).totalReducer;
    const totalCost = totalState.totalCost;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
                address: {
                    city: city,
                    country: country,
                    line1: streetAddress,
                    line2: null,
                    postal_code: postalCode,
                    state: province,
                },
                email: email,
                name: firstName.concat(" ").concat(lastName),
                phone: null,
            },
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe/charge",
                    {
                        amount: Number(totalCost) * 100,
                        id: id
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
            console.log(error.message);
        }
    };


    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <h1>Personal Information</h1>
            <div style={{display: "flex"}}>
                <input 
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    onChange={(ev) => {
                        setFirstName(ev.target.value);
                    }}
                />
                <input 
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    onChange={(ev) => {
                        setLastName(ev.target.value);
                    }}
                />
            </div>
            <input 
                type="email"
                id="email"
                placeholder="Email"
                onChange={(ev) => {
                    setEmail(ev.target.value);
                }}
            />
            <h1>Shipping Address</h1>
            <input 
                type="text"
                id="streetAddress"
                placeholder="Your address"
                onChange={(ev) => {
                    setStreetAddress(ev.target.value);
                }}
            />
            <div style={{display: "flex"}}>
                <input 
                    type="text"
                    id="city"
                    placeholder="City"
                    onChange={(ev) => {
                        setCity(ev.target.value);
                    }}
                />
                <input 
                    type="text"
                    id="province"
                    placeholder="Province"
                    onChange={(ev) => {
                        setProvince(ev.target.value);
                    }}
                />
            </div>
            <div style={{display: "flex"}}>   
                <input 
                    type="text"
                    id="postalCode"
                    placeholder="Postal code"
                    onChange={(ev) => {
                        setPostalCode(ev.target.value);
                    }}
                />
                <input 
                    type="text"
                    id="country"
                    placeholder="Country"
                    onChange={(ev) => {
                        setCountry(ev.target.value);
                    }}
                />
            </div>
            
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button>Place order</button>
        </form>
    );
};
