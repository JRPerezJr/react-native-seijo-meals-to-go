import React, { useContext } from 'react';

import { List } from 'react-native-paper';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SettingsList } from './settings.screen.styles';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <StyledSafeAreaView>
      <List.Section>
        <SettingsList
          title="Favorites"
          description="View your favorites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsList
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </StyledSafeAreaView>
  );
};
