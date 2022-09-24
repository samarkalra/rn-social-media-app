import { View, Text, Image, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { User } from '../../components/FeedPost/type';
import AppStyles from '../../../constants/styles';

const user: User = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const [postText, setPostText] = useState('');

  const onPostTextChange = (text: string) => {
    setPostText(text);
  };

  const onSubmit = () => {
    console.log(postText);
    setPostText('');
  };

  return (
    <View style={[AppStyles.whiteScreen, styles.screen]}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <TextInput
        placeholder="What is on your mind?"
        multiline
        onChangeText={onPostTextChange}
      />

      <View style={styles.buttonView}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreatePostScreen;
