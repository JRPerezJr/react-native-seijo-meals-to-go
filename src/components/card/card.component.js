import * as React from 'react';
// import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { CardCover, CardStyle } from './card.styles';

export const CardAppComponent = ({ restaurantData }) => {
  const { address, name, photos } = restaurantData.props;
  return (
    <CardStyle elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </CardStyle>
  );
};
