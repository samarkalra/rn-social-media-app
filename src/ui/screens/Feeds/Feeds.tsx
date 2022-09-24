import { FlatList, Image, ListRenderItem, Pressable, Text } from 'react-native';
import React from 'react';
import posts from '../../../assets/data/posts.json';
import { Post } from '../../components/FeedPost/type';
import { FeedPost } from '../../components/FeedPost';
import { useNavigation } from '@react-navigation/native';
import ImagePickerIcon from '../../../assets/images/image-picker.png';
import styles from './styles';
import { NavigationProp } from '../../../core/navigation/types';

const Feeds = () => {
  const navigation = useNavigation<NavigationProp<'Feeds'>>();

  const keyExtractor: ((item: Post, index: number) => string) | undefined = (
    post
  ) => post.id;
  const renderItem: ListRenderItem<Post> | null | undefined = ({ item }) => (
    <FeedPost post={item} />
  );

  const createPost = () => navigation.navigate('CreatePost');

  return (
    <FlatList
      data={posts as Post[]}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          {/* <Image source={{ uri: img }} style={styles.profileImage} /> */}
          <Text style={styles.name}>Whats on your mind?</Text>
          <Image source={ImagePickerIcon} style={styles.icon} />
        </Pressable>
      )}
    />
  );
};

export default Feeds;
