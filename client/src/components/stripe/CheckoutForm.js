import React, { useState } from "react";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { getStoreState } from "../../reducers/total-reducer";
import { addBillingDetails, toggleAlert } from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "../Responsive";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

export const CheckoutForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("CA");

    const setToInitialState = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setStreetAddress("");
        setCity("");
        setProvince("");
        setPostalCode("");
        setCountry("CA");
    };

    const authState = useSelector((state) => state.authReducer.authState);
    
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const inventoryArray = Object.values(
        useSelector(getStoreState).cartReducer
    );
    const totalState = useSelector(getStoreState).totalReducer;
    const totalCost = totalState.totalCost;
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (authState === false) {
            return (
                dispatch(toggleAlert()),
                window.scrollTo({ top: 0, behavior: "smooth" })               
            )
        } 

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
                dispatch(addBillingDetails(paymentMethod));
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe/charge",
                    {
                        amount: Number(totalCost) * 100,
                        id: id,
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                    inventoryArray.forEach((item) =>
                        fetch(`/change/${item._id}`, {
                            method: "PATCH",
                            body: JSON.stringify(item),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        }).then((res) => console.log(res))
                    );
                    history.push("/confirmation");
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
            console.log(error.message);
        }
    };
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
                <Heading>Personal Information</Heading>
                <FirebaseAuthConsumer>
                    {({ user }) => {
                        const userInfo = user ? user.providerData[0] : "";

                        return (
                            <>
                                <Row style={{ display: "flex" }}>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        placeholder="First name"
                                        onChange={(ev) => {
                                            setFirstName(ev.target.value);
                                        }}
                                        value={
                                            userInfo
                                                ? userInfo.displayName.split(
                                                      " "
                                                  )[0]
                                                : firstName
                                        }
                                        required
                                    />
                                    <Input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last name"
                                        onChange={(ev) => {
                                            setLastName(ev.target.value);
                                        }}
                                        value={
                                            userInfo
                                                ? userInfo.displayName.split(
                                                      " "
                                                  )[1]
                                                : lastName
                                        }
                                        required
                                    />
                                </Row>
                                <Input1
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={(ev) => {
                                        setEmail(ev.target.value);
                                    }}
                                    value={userInfo ? userInfo.email : email}
                                    required
                                />
                            </>
                        );
                    }}
                </FirebaseAuthConsumer>
                <Heading>Shipping Address</Heading>
                <Input1
                    type="text"
                    id="streetAddress"
                    placeholder="Your address"
                    onChange={(ev) => {
                        setStreetAddress(ev.target.value);
                    }}
                    value={streetAddress}
                    required
                />
                <Row style={{ display: "flex" }}>
                    <Input
                        type="text"
                        id="city"
                        placeholder="City"
                        onChange={(ev) => {
                            setCity(ev.target.value);
                        }}
                        value={city}
                        required
                    />
                    <Input
                        type="text"
                        id="province"
                        placeholder="Province"
                        onChange={(ev) => {
                            setProvince(ev.target.value);
                        }}
                        value={province}
                        required
                    />
                </Row>
                <Row style={{ display: "flex" }}>
                    <Input
                        type="text"
                        id="postalCode"
                        placeholder="Postal code"
                        onChange={(ev) => {
                            setPostalCode(ev.target.value);
                        }}
                        value={postalCode}
                        required
                    />
                    <Select
                        name="country"
                        id="country"
                        onChange={(ev) => {
                            setCountry(ev.target.value);
                        }}
                        value={country}
                    >
                        <option value="CA">Canada</option>
                        <option value="US">United States</option>
                        <option value="JP">Japan</option>
                        <option value="GB">United Kingdom</option>
                        <option value="FR">France</option>
                    </Select>
                </Row>
                <CardElementWrapper>
                    <Heading style={{ textAlign: "center" }}>
                        Credit Card Information
                    </Heading>
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
                </CardElementWrapper>
                <ButtonsWrapper>
                    <Clearbtn onClick={setToInitialState}>Clear form</Clearbtn>

                    <OrderBtn>Place order</OrderBtn>
                </ButtonsWrapper>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${onDesktopMediaQuery} {
        margin-bottom: 100px;
    }

    ${onTabletMediaQuery} {
        width: 70%;
    }

    ${onMobileMediaQuery} {
        width: 90%;
    }
`;

const Heading = styled.h2`
    font-size: 22px;
    color: ${themeVars.midnightGreen};
    padding: 30px 0 15px 0;
`;

const Row = styled.div`
    ${onTabletMediaQuery} {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    ${onMobileMediaQuery} {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

const Input = styled.input`
    font-size: 17px;
    padding: 5px 0 5px 15px;
    margin: 5px 0;
    border: 1px solid ${themeVars.caribbeanGreen};

    ${onDesktopMediaQuery} {
        width: 220px;
        margin: 5px;
    }

    ${onTabletMediaQuery} {
        width: 300px;
    }

    ${onMobileMediaQuery} {
        width: 250px;
    }
`;

const Input1 = styled.input`
    font-size: 17px;
    padding: 5px 0 5px 15px;
    margin: 5px 0;
    border: 1px solid ${themeVars.caribbeanGreen};

    ${onDesktopMediaQuery} {
        width: 468px;
        margin: 5px;
    }

    ${onTabletMediaQuery} {
        width: 300px;
    }

    ${onMobileMediaQuery} {
        width: 250px;
    }
`;

const Select = styled.select`
    font-size: 17px;
    padding: 5px 0 5px 10px;
    margin: 5px 0;
    border: 1px solid ${themeVars.caribbeanGreen};
    color: gray;

    ${onDesktopMediaQuery} {
        width: 235px;
        margin: 5px;
    }

    ${onTabletMediaQuery} {
        width: 317px;
    }

    ${onMobileMediaQuery} {
        width: 267px;
    }
`;

const ButtonsWrapper = styled.div`
    ${onDesktopMediaQuery} {
        display: flex;
        margin-top: 15px;
    }

    ${onTabletMediaQuery} {
        display: flex;
        flex-direction: column;
    }

    ${onMobileMediaQuery} {
        display: flex;
        flex-direction: column;
    }
`;

const Clearbtn = styled.button`
    width: 140px;
    border: 2px solid ${themeVars.midnightGreen};
    background: ${themeVars.white};
    outline: none;
    color: ${themeVars.midnightGreen};
    font-size: 17px;
    padding: 10px 0;
    border-radius: 10px;

    ${onDesktopMediaQuery} {
        margin: 0 10px;

        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }

    ${onTabletMediaQuery} {
        margin-bottom: 20px;

        &:active {
            transform: scale(1.05);
        }
    }

    ${onMobileMediaQuery} {
        margin-bottom: 15px;

        &:active {
            transform: scale(1.05);
        }
    }
`;

const OrderBtn = styled.button`
    width: 140px;
    border: 2px solid ${themeVars.midnightGreen};
    background: ${themeVars.midnightGreen};
    outline: none;
    color: white;
    font-size: 17px;
    padding: 10px 0;
    border-radius: 10px;

    ${onDesktopMediaQuery} {
        margin: 0 10px;

        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
    }

    ${onTabletMediaQuery} {
        margin-bottom: 70px;

        &:active {
            transform: scale(1.05);
        }
    }

    ${onMobileMediaQuery} {
        margin-bottom: 30px;

        &:active {
            transform: scale(1.05);
        }
    }
`;

const CardElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100px;
    margin-bottom: 30px;
`;
