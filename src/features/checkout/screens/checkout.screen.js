import React, { useContext } from 'react';

import { CartContext } from '../../../services/cart/cart.context';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { CreditCardInput } from '../components/credit-card.component';
import { ScrollView } from 'react-native';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';
import { StyledText } from '../../../components/typography/text.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer.component';
import { List } from 'react-native-paper';

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <StyledSafeAreaView>
        <CartIconContainer>
          <CartIcon />
          <StyledText>Your cart is empty!</StyledText>
        </CartIconContainer>
      </StyledSafeAreaView>
    );
  }
  return (
    <StyledSafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <StyledText>Your Order</StyledText>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - $${price / 100}`} />;
            })}
          </List.Section>
          <StyledText>Total: ${sum / 100}</StyledText>
        </Spacer>
      </ScrollView>
      <CreditCardInput />
    </StyledSafeAreaView>
  );
};
