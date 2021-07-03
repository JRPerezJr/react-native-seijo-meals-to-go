import React from 'react';
import { Platform } from 'react-native';

import { StyledText } from '../typography/text.component';
import {
  CompactImage,
  CompactWebView,
  Item,
} from './compact-restaurant-info.component.styles';

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <StyledText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </StyledText>
    </Item>
  );
};
