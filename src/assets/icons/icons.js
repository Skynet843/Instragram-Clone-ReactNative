import React from 'react'
import { View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



const VerticalDotBlack = ()=><View><EntypoIcon name="dots-three-vertical" size={20} color="#000" /></View>;
const ChatBubbleBlack= ()=><View ><IoniconsIcon name="chatbubble-outline" size={27} color="#000" /></View>;
const SendBlack = ()=><View ><FeatherIcon name="send" size={27} color="#000" /></View>;
const BookmarkBlack = ()=><View ><FeatherIcon name="bookmark" size={27} color="#000" /></View>;
const HeartOutlineBlack = ()=><View><FontAwesomeIcon name="heart-o" size={27} color="#000" /></View>;
const HeartFillRed = ()=><View><FontAwesomeIcon name="heart" size={27} color="#ff0000" /></View>;



export {VerticalDotBlack,ChatBubbleBlack,SendBlack,BookmarkBlack,HeartOutlineBlack,HeartFillRed};
