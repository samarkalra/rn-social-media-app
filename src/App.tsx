import { View } from 'react-native';
import React from 'react';
import AppStyles from './constants/styles';
import Feeds from './ui/screens/Feeds/Feeds';

const App = () => {
  return (
    <View style={AppStyles.grayScreen}>
      <Feeds />
    </View>
  );
};

export default App;
