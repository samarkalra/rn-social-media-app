import { View } from 'react-native';
import React from 'react';
import AppStyles from './constants/styles';
import CreatePostScreen from './ui/screens/CreatePost/CreatePostScreen';

const App = () => {
  return (
    <View style={AppStyles.grayScreen}>
      <CreatePostScreen />
    </View>
  );
};

export default App;
