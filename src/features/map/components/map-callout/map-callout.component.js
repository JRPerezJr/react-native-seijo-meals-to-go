import React from 'react';

import { CompactRestaurantInfo } from '../../../../components/compact-restaurant-info/compact-restaurant-info.component';

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
