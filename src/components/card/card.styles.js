import styled from 'styled-components';
import { Card, Title } from 'react-native-paper';

export const StyledCardStyle = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const StyledCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const StyledTitle = styled(Title)`
  font-family: ${props => props.theme.fonts.body};
`;
