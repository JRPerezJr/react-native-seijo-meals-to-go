import * as React from 'react';
// import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import {
  StyledCardCover,
  StyledCardStyle,
  StyledTitle,
  StyledParagraph,
} from './card.styles';

export const CardAppComponent = ({ restaurantData }) => {
  const { address, name, photos } = restaurantData.props;
  return (
    <StyledCardStyle elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <StyledParagraph>{address}</StyledParagraph>
      </Card.Content>
    </StyledCardStyle>
  );
};
