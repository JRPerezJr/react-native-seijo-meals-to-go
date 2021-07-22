import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

import { Spacer } from '../../../../components/spacer/spacer.component';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  StyledTitle,
} from '../../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <AnimatedLottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <StyledTitle>Seijo Meals To Go</StyledTitle>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
