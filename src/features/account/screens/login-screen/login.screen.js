import React, { useState, useContext } from 'react';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from '../../components/account.styles';

import { StyledText } from '../../../../components/typography/text.component';
import { Spacer } from '../../../../components/spacer/spacer.component';

import { AuthenticationContext } from '../../../../services/authentication/authentication.context';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);
  console.log('Log 2', error);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            secure
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <StyledText variant="error">{error}</StyledText>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
