import React from 'react';
import { Card } from 'react-native-paper';

import {
  StyledCardCover,
  StyledCardStyle,
  StyledTitle,
  StyledText,
  StyledParagraph,
  Rating,
  Section,
  SectionEnd,
  StyledView,
  StyledImage,
} from './card.styles';

import { Star } from '../../../assets/star';
import { OpenIcon } from '../../../assets/open';

export const CardAppComponent = ({ restaurantData }) => {
  const {
    address,
    icon,
    isClosedTemporarily,
    isOpenNow,
    name,
    photos,
    rating,
  } = restaurantData.props;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCardStyle elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Star />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <StyledText variant="label">CLOSED TEMPORARILY</StyledText>
            )}
            <StyledView />
            {isOpenNow && <OpenIcon />}
            <StyledView />
            <StyledImage source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <StyledParagraph>{address}</StyledParagraph>
      </Card.Content>
    </StyledCardStyle>
  );
};
