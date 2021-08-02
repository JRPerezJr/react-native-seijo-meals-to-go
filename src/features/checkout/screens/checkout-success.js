import React from 'react';
import { StyledText } from '../../../components/typography/text.component';
import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';

export const CheckoutSuccess = () => {
  return (
    <StyledSafeAreaView>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <StyledText variant="label">Success!</StyledText>
      </CartIconContainer>
    </StyledSafeAreaView>
  );
};
