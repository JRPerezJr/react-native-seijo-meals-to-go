import { ImageBackground, SafeAreaView, View } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components';
import { colors } from '../../../infrastructure/theme/colors';

export const SettingsBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/home-screen.jpg'),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const TransparentSafeArea = styled(SafeAreaView)`
  background-color: transparent;
`;

export const SettingsList = styled(List.Item).attrs({
  titleStyle: { color: colors.text.inverse },
  descriptionStyle: { color: colors.text.inverse },
})`
  padding: ${props => props.theme.space[3]};
  /* background-color: rgb(0, 0, 255); */
  background: rgba(0, 0, 0, 0.5);
`;

export const AvatarContainer = styled(View)`
  align-items: center;
`;
