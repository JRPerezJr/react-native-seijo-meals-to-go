import { ImageBackground, View } from 'react-native';
import styled from 'styled-components';

export const AccountBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/home-screen.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(225, 255, 255, 0.1);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(225, 255, 255, 0.7);
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
`;
