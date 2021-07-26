import { View } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components';

export const SettingsList = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`;

export const AvatarContainer = styled(View)`
  align-items: center;
`;
