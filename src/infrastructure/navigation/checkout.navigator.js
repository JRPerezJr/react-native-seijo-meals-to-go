import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CheckoutScreen } from '../../features/checkout/screens/checkout.screen';

import { CheckoutSuccess } from '../../features/checkout/screens/checkout-success';
import { CheckoutError } from '../../features/checkout/screens/checkout-error';

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccess}
      />
      <CheckoutStack.Screen name="CheckoutError" component={CheckoutError} />
    </CheckoutStack.Navigator>
  );
};
