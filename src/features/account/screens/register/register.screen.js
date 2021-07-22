import React, { useState, useContext } from 'react';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  StyledTitle,
} from '../../components/account.styles';

import { StyledText } from '../../../../components/typography/text.component';
import { Spacer } from '../../../../components/spacer/spacer.component';

import { AuthenticationContext } from '../../../../services/authentication/authentication.context';

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, validationError } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <StyledTitle>Seijo Meals To Go</StyledTitle>
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
        <Spacer size="large">
          <AuthInput
            label=" Confirm Password"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            secure
            onChangeText={p => setConfirmPassword(p)}
          />
        </Spacer>
        {validationError && (
          <Spacer size="large">
            <ErrorContainer>
              <StyledText variant="error">{validationError}</StyledText>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="email"
            onPress={() => onRegister(email, password, confirmPassword)}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
