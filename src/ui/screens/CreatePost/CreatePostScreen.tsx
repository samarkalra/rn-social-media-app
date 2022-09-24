import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { User } from '../../components/FeedPost/type';
import AppStyles from '../../../constants/styles';
import ImagePickerIcon from '../../../assets/images/image-picker.png';
import { launchImageLibrary } from 'react-native-image-picker';

const user: User = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<string>();

  const onPostTextChange = (text: string) => {
    setPostText(text);
  };

  const pickImage = async () => {
    try {
      const imagePickerResponse = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });
      if (imagePickerResponse.assets?.length) {
        const assets = imagePickerResponse.assets;
        setImage(assets[0].uri);
      } else {
        Alert.alert('', 'No image selected.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = () => {
    console.log({ postText, image });
    setPostText('');
    setImage(undefined);
  };

  return (
    <View style={[AppStyles.whiteScreen, styles.screen]}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>

        <Pressable
          android_ripple={{ borderless: true }}
          onPress={pickImage}
          style={styles.imagePicker}
        >
          <Image source={ImagePickerIcon} style={styles.imagePickerIcon} />
        </Pressable>
      </View>

      <TextInput
        placeholder="What is on your mind?"
        multiline
        onChangeText={onPostTextChange}
      />

      <Image
        source={{ uri: image }}
        style={styles.selectedImage}
        resizeMode="cover"
      />

      <View style={styles.buttonView}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreatePostScreen;
