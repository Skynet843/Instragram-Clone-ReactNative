import React from 'react';
import {View, Text, Image,Dimensions} from 'react-native';
import styles from './styles';


const RemoteImage = ({uri, desiredWidth}) => {
    const [desiredHeight, setDesiredHeight] = React.useState(0)

    Image.getSize(uri, (width, height) => {
        setDesiredHeight(desiredWidth / width * height)
    })

    return (
        <Image
            source={{uri}}
            style={{
                borderWidth: 1,
                width: desiredWidth,
                height: desiredHeight
            }}
        />
    )
}

const Body = ({imageUri}) => {
  const fullWidth=Dimensions.get('window').width
  return (
    <View style={styles.post_image_container}>
      <RemoteImage uri={imageUri} desiredWidth={fullWidth}/>
     </View>
  );
};

export default Body;
