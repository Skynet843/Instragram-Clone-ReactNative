import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    user_name:{
        fontWeight:'bold',
        fontSize:15,
        color:'#4f4f4f'
    },
    left_container:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    icon_container:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    }
})

export default styles