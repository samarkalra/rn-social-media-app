import { View } from 'react-native';
import React from 'react';
import AppStyles from './constants/styles';
import AppNavigator from './core/navigation/AppNavigator';

const App = () => {
  return (
    <View style={AppStyles.grayScreen}>
      <AppNavigator />
    </View>
  );
};

export default App;
