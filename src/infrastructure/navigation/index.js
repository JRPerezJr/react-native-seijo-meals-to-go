import React, { useContext } from 'react';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
