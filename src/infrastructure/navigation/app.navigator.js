import React from 'react';
import { Platform } from 'react-native';

import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/mock/restaurants.context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON_IOS = {
  Restaurants: 'ios-restaurant-sharp',
  Map: 'ios-map-sharp',
  Settings: 'ios-settings-sharp',
};

const TAB_ICON_ADR = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName =
    Platform.OS === 'ios' ? TAB_ICON_IOS[route.name] : TAB_ICON_ADR[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
