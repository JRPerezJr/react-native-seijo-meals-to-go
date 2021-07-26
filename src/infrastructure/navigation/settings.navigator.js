import React from 'react';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { FavoritesScreen } from '../../features/settings/screens/favorites-screens/favorites.screens';
import { CameraScreen } from '../../features/settings/screens/camera/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
