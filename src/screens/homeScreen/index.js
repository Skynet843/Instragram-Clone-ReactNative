import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import Feed from '../../components/Feed/index'

const Posts = [
  {
    imageUri: 'https://randomuser.me/api/portraits/women/50.jpg',
    userName: 'Jimmy',
    postImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    caption: 'Beutifull City #instragram',
    likesCount:1242,
    postedAt: '6 minutes ago'
  },
];

const index = () => {
  return (
    <View style={styles.container}>
      <Feed/>
    </View>
  );
};

export default index;
