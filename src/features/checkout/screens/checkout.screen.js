import React from 'react';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { CreditCardInput } from '../components/credit-card.component';

export const CheckoutScreen = () => {
  return (
    <StyledSafeAreaView>
      <CreditCardInput />
    </StyledSafeAreaView>
  );
};
