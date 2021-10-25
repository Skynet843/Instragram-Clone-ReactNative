import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../Post/index';
import Stories from '../../components/Stories/index';
import styles from './styles';

const posts = [
  {
    imageUri: 'https://randomuser.me/api/portraits/women/50.jpg',
    userName: 'Jimmy',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    caption: 'Beutifull City #instragram',
    likesCount: 1242,
    postedAt: '6 minutes ago',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/44.jpg',
    userName: 'Scary',
    postImage:
      'https://images.unsplash.com/photo-1555993539-1732b0258235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    caption: 'Beutifull City #instragram',
    likesCount: 1242,
    postedAt: '6 minutes ago',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/women/17.jpg',
    userName: 'Sam',
    postImage:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    caption: 'Beutifull City #instragram',
    likesCount: 1242,
    postedAt: '6 minutes ago',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Lisa',
    postImage:
      'https://images.unsplash.com/photo-1479819893311-9c362f79976e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
    caption: 'Beutifull City #instragram',
    likesCount: 1242,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <Post post={item} />
      )}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
