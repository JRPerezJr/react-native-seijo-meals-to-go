import React from 'react';
import { Card } from 'react-native-paper';

import {
  StyledCardCover,
  StyledCard,
  StyledTitle,
  StyledParagraph,
  Rating,
  Section,
  SectionEnd,
  StyledIcon,
} from './card.styles';

import { Spacer } from '../../components/spacer/spacer.component';
import { StyledText } from '../typography/text.component';

import { Star } from '../../../assets/star';
import { OpenIcon } from '../../../assets/open';

export const CardAppComponent = ({ restaurantData }) => {
  const {
    vicinity,
    icon,
    isClosedTemporarily,
    isOpenNow,
    name,
    photos,
    rating,
  } = restaurantData.props;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard elevation={5}>
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
              <StyledText variant="error">CLOSED TEMPORARILY</StyledText>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenIcon />}
            </Spacer>
            <Spacer position="left" size="large">
              <StyledIcon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <StyledParagraph>{vicinity}</StyledParagraph>
      </Card.Content>
    </StyledCard>
  );
};
