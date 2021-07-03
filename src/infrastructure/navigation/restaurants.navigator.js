import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail-screen/restaurant-detail.screen';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
