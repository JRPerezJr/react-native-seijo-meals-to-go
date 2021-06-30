import styled from 'styled-components';
import { Card } from 'react-native-paper';

export const CardStyle = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;
