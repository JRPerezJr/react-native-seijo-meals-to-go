import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen/restaurants.screen';

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
