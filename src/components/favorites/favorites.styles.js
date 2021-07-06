import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const AntDesignIcon = styled(AntDesign).attrs({
  size: 24,
})``;
