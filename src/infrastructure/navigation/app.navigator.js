import React from 'react';
import { Platform } from 'react-native';

import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/mock/restaurants.context';
import { CartContextProvider } from '../../services/cart/cart.context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsNavigator } from './settings.navigator';
import { CheckoutNavigator } from './checkout.navigator';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TAB_ICON_IOS = {
  Checkout: 'ios-cart-sharp',
  Map: 'ios-map-sharp',
  Restaurants: 'ios-restaurant-sharp',
  Settings: 'ios-settings-sharp',
};

const TAB_ICON_ADR = {
  Checkout: 'md-cart-sharp',
  Map: 'md-map',
  Restaurants: 'md-restaurant',
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
          <CartContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: colors.brand.primary,
                inactiveTintColor: colors.brand.muted,
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
