import React from 'react';

import { colors } from '../../../infrastructure/theme/colors';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';
import { StyledText } from '../../../components/typography/text.component';

export const CheckoutError = ({ route }) => {
  const { error = '' } = route.params;
  return (
    <StyledSafeAreaView>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <StyledText variant="label">{error}</StyledText>
      </CartIconContainer>
    </StyledSafeAreaView>
  );
};
