import React from 'react'
import { View, Text } from 'react-native'
import Header from './components/Header/index'
import Body from './components/Body/index'
import Footer from './components/Footer/index'
import styles from './styles'

const Post = (props) => {
    const {imageUri,userName,postImage,likesCount,caption,postedAt}=props.post
    return (
        <View style={styles.post_container}>
            <Header imageUri={imageUri} userName={userName}/>
            <Body imageUri={postImage}/>
            <Footer likesCount={likesCount} caption={caption} postedAt={postedAt}/>
        </View>
    )
}

export default Post
