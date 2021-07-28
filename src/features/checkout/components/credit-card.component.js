import React from 'react';

import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export const CreditCardInput = ({
  name,
  address1,
  address2,
  city,
  state,
  zipCode,
  country,
}) => {
  const onChange = async formData => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes('incomplete');
    console.log(isIncomplete);
    const expiry = values.expiry.split('/');
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
      address_line1: address1,
      address_line2: address2,
      address_city: city,
      address_state: state,
      address_zip: zipCode,
      address_country: country,
    };
    const info = await cardTokenRequest(card);
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
