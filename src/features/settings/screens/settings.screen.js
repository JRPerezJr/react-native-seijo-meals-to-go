import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Avatar, List } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import { StyledText } from '../../../components/typography/text.component';

import { colors } from '../../../infrastructure/theme/colors';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
  AvatarContainer,
  SettingsBackground,
  SettingsList,
  TransparentSafeArea,
} from './settings.screen.styles';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async currentUser => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor={colors.brand.primary}
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <StyledText variant="profile">{user.email}</StyledText>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsList
            title="Favorites"
            description="View your favorites"
            left={props => <List.Icon {...props} color="red" icon="heart" />}
            onPress={() => navigation.navigate('Favorites')}
          />
          <Spacer />
          <SettingsList
            title="Payments"
            left={props => <List.Icon {...props} color="white" icon="cart" />}
            onPress={onLogout}
          />
          <Spacer />
          <SettingsList
            title="Past Orders"
            left={props => (
              <List.Icon {...props} color="white" icon="history" />
            )}
            onPress={onLogout}
          />
          <Spacer />
          <SettingsList
            title="Logout"
            left={props => <List.Icon {...props} color="white" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
