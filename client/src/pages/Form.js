import React from 'react';
import StripeContainer from '../components/stripe/StripeContainer';
import Auth from '../components/Auth'

const Form = () => {
  return (
    <div>
      <Auth/>
      <StripeContainer/>
    </div>
  );
}

export default Form;
