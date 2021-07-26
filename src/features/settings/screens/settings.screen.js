import React, { useContext } from 'react';

import { Avatar, List } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import { StyledText } from '../../../components/typography/text.component';

import { StyledSafeAreaView } from '../../../components/utilities/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { AvatarContainer, SettingsList } from './settings.screen.styles';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <StyledSafeAreaView>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <StyledText variant="label">{user.email}</StyledText>
        </Spacer>
      </AvatarContainer>
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