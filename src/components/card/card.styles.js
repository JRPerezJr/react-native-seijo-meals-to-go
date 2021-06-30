import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Image, View } from 'react-native';

export const StyledCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const StyledCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const StyledTitle = styled(Title)`
  font-family: ${props => props.theme.fonts.heading};
`;

export const StyledParagraph = styled(Paragraph)`
  font-family: ${props => props.theme.fonts.body};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledView = styled(View)`
  padding-left: ${props => props.theme.space[2]};
`;

export const StyledIcon = styled(Image)`
  width: 15px;
  height: 15px;
`;
