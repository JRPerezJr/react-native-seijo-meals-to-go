import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { ThemeProvider } from 'styled-components';

import { theme } from './src/infrastructure/theme';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen/restaurants.screen';
import { MapScreen } from './src/features/restaurants/screens/map-screen/map-screen';
import { SettingsScreen } from './src/features/restaurants/screens/settings-screen/settings-screen';
import { RestaurantsContextProvider } from './src/services/restaurants/mock/restaurants.context';

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
