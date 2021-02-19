import React from "react";
import { useSelector } from "react-redux";

const Confirmation = () => {
    const stripeState = useSelector((state) => state.stripeReducer);
    const { id, billing_details } = stripeState && stripeState.details;
    const { address, email, name } = billing_details;
    const { city, state, country, line1, postal_code } = address;

    return (
        <div>
            <h3>{`Thank you for your order, ${name}!`}</h3>
            <p>{`Your order confirmation id is ${id}.`}</p>
            <p>{`You should be receiving a confirmation email at ${email}.`}</p>
            <div>
                <p>Here are your shipping details:</p>
                <div>
                    {`${line1}, ${city}`}
                    <br />
                    {`${state}, ${country}`}
                    <br />
                    {`${postal_code}`}
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
