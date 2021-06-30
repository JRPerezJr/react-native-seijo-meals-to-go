import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen/restaurants.screen';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
