import React, { useState, useEffect, useContext, useRef } from 'react';

import { View, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';

import { StyledText } from '../../../../components/typography/text.component';
import { StyledSafeAreaView } from '../../../../components/utilities/safe-area.component';

import { CameraContainer, InnerSnap, ProfileCamera } from './camera.styles';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { AntDesignIcon } from '../../../../components/favorites/favorites.styles';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <StyledText>No access to camera</StyledText>;
  }

  return (
    <StyledSafeAreaView>
      <CameraContainer>
        <Spacer size="large">
          <AntDesignIcon
            name="sync"
            size={24}
            color="black"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
        </Spacer>
      </CameraContainer>
      <ProfileCamera
        ref={camera => (cameraRef.current = camera)}
        type={type}
        ratio={'16:9'}
      >
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </ProfileCamera>
    </StyledSafeAreaView>
  );
};
