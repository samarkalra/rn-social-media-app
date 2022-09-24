import { FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import posts from '../../../assets/data/posts.json';
import { Post } from '../../components/FeedPost/type';
import { FeedPost } from '../../components/FeedPost';

const Feeds = () => {
  const keyExtractor: ((item: Post, index: number) => string) | undefined = (
    post
  ) => post.id;
  const renderItem: ListRenderItem<Post> | null | undefined = ({ item }) => (
    <FeedPost post={item} />
  );
  return (
    <FlatList
      data={posts as Post[]}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default Feeds;
