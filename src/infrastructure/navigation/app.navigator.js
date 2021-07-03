import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen/restaurants.screen';
import { MapScreen } from '../../features/restaurants/screens/map-screen/map-screen';
import { SettingsScreen } from '../../features/restaurants/screens/settings-screen/settings-screen';

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
