import React from 'react';

import { Spacer } from '../../../../components/spacer/spacer.component';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton onPress={() => navigation.navigate('Register')}>
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
