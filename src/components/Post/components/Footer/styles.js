import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    footer_container:{
        marginLeft:5
    },
    likes_count:{
        fontWeight:'bold',
        marginTop:4
    },
    caption:{
        marginTop:4,
        fontWeight:'bold'
    },
    posted_at:{
        color:'#8c8c8c',
        marginTop:4,
        fontSize:12
    },
    icon_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:4,
        paddingHorizontal:5
    },
    left_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:100
    },
    right_container:{
        flexDirection:'row'
    }
})

export default styles