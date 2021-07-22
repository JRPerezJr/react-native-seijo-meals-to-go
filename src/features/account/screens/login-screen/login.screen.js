import React, { useState, useContext } from 'react';

import { ActivityIndicator, Colors } from 'react-native-paper';

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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, validationError, isLoading } = useContext(
    AuthenticationContext
  );

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
        {validationError && (
          <Spacer size="large">
            <ErrorContainer>
              <StyledText variant="error">{validationError}</StyledText>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
