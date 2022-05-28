import { AppNavigator } from './navigation/AppNavigator';
import { defaultTheme } from './theme/defaultTheme';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
