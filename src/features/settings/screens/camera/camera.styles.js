import { Camera } from 'expo-camera';
import { View } from 'react-native';
import styled from 'styled-components';

export const CameraContainer = styled(View)`
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const InnerSnap = styled(View)`
  width: 100%;
  height: 100%;
  z-index: 999;
`;
