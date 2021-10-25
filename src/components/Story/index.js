import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../ProfilePicture/index'
import styles from './styles'

const Story = (props) => {
    const {imageUri,userName}=props.item
    return (
        <View style={styles.story_container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.user_name}>{userName}</Text>
        </View>
    )
}

export default Story
