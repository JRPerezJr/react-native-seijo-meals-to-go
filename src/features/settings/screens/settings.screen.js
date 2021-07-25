import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <>
      <StyledSafeAreaView>
        <Text>Hello from Settings</Text>
        <Button title="logout" onPress={() => onLogout()} />
      </StyledSafeAreaView>
    </>
  );
};
