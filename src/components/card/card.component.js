import React from 'react';
import { Card } from 'react-native-paper';

import {
  StyledCardCover,
  StyledCardStyle,
  StyledTitle,
  StyledParagraph,
} from './card.styles';

import { Star } from '../../../assets/star';
export const CardAppComponent = ({ restaurantData }) => {
  const { address, name, photos } = restaurantData.props;
  return (
    <StyledCardStyle elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <Star />
        <StyledParagraph>{address}</StyledParagraph>
      </Card.Content>
    </StyledCardStyle>
  );
};
