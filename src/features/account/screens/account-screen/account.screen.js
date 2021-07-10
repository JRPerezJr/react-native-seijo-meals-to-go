import React from 'react';
import { Button } from 'react-native-paper';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from '../../components/account.styles';

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Button icon="lock-open-outline" mode="contained">
          Login
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
