import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../components/GlobalStyles";
import {
    onMobileMediaQuery,
    onTabletMediaQuery,
    onDesktopMediaQuery,
} from "../components/Responsive";

const BigWrapper = styled.div`
    display: flex;
    justify-content: center;

    ${onDesktopMediaQuery} {
        height: 80vh;
        align-items: center;
    }

    ${onTabletMediaQuery} {
        height: 80vh;
        align-items: flex-start;
    }

    ${onMobileMediaQuery} {
        height: 70vh;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 3px solid ${themeVars.midnightGreen};

    ${onDesktopMediaQuery} {
        width: 800px;
        padding: 2rem 1rem;
    }

    ${onTabletMediaQuery} {
        margin-top: 100px;
        width: 70%;
        padding: 1rem;
    }

    ${onMobileMediaQuery} {
        margin-top: 0;
        width: 90%;
        padding: 1rem;
    }
`;

const Heading = styled.h3`
    margin: 15px 0 10px;
    text-align: center;

    span {
        color: ${themeVars.pink};
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }

    ${onDesktopMediaQuery} {
        font-size: 22px;
    }

    ${onTabletMediaQuery} {
        font-size: 20px;
    }

    ${onMobileMediaQuery} {
        font-size: 20px;
    }
`;

const Para = styled.p`
    margin: 15px 0;
    text-align: center;

    span {
        color: ${themeVars.pink};
        font-weight: bold;
        text-align: center;
    }

    ${onDesktopMediaQuery} {
        font-size: 18px;
    }

    ${onTabletMediaQuery} {
        font-size: 15px;
    }

    ${onMobileMediaQuery} {
        font-size: 15px;
    }
`;

const Confirmation = () => {
    const stripeState = useSelector((state) => state.stripeReducer);
    const { id, billing_details } = stripeState && stripeState.details;
    const { address, email, name } = billing_details;
    const { city, state, country, line1, postal_code } = address;

    return (
        <BigWrapper>
            <Wrapper>
                <Heading>{`Thank you for your order,`}<br/><span>{name}</span></Heading>
                <Para>{`Your order confirmation ID is: `}<br/><span>{id}</span></Para>
                <Para>{`A confirmation email was sent to:`}<br/><span>{email}</span></Para>
                <Para>{`Here are your shipping details:`}<br/><span>{`${line1},`}<br/>{`${city}, ${state}, ${country}`}<br/>{postal_code}</span></Para>
            </Wrapper>
        </BigWrapper>
    );
};

export default Confirmation;
