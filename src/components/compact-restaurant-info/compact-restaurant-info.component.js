import React from 'react';
import { StyledText } from '../typography/text.component';
import { CompactImage, Item } from './compact-restaurant-info.component.styles';

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <StyledText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </StyledText>
    </Item>
  );
};
