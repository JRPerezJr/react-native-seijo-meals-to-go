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

import { Spacer } from '../../../../components/spacer/spacer.component';
import { StyledText } from '../../../../components/typography/text.component';

import { Star } from '../../../../../assets/star';
import { OpenIcon } from '../../../../../assets/open';
import { Favorite } from '../../../../components/favorites/favorite.component';

export const CardAppComponent = ({ restaurant, ratingArray }) => {
  const {
    address,
    icon,
    isClosedTemporarily,
    isOpenNow,
    name,
    photos,
    placeId,
  } = restaurant.props;

  return (
    <StyledCard elevation={5}>
      <Favorite restaurant={restaurant.props} />
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <Star key={`star-${placeId}-${i}`} />
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
        <StyledParagraph>{address}</StyledParagraph>
      </Card.Content>
    </StyledCard>
  );
};
