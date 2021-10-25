import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Story from '../Story/index';

const data = [
  {
    imageUri: 'https://randomuser.me/api/portraits/women/50.jpg',
    userName: 'Jimmy'
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/44.jpg',
    userName: 'Scary',
    
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/women/17.jpg',
    userName: 'Sam',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Lisa',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/women/50.jpg',
    userName: 'Jimmy1',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/44.jpg',
    userName: 'Scary1',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/women/17.jpg',
    userName: 'Sam1',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/men/51.jpg',
    userName: 'Lisa1',
  },
];

const Stories = () => {
  return (
    <View style={styles.flatlist_container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <Story item={item} />}
        keyExtractor={item => item.userName}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;
