import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export default StyleSheet.create({
    masterContainer:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    socialContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#f5f5f5',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    socialSigninButton: {
        backgroundColor: '#f5f5f5',
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    registerButton: {
        backgroundColor: '#f5f5f5',
        height: 70,
        width: 170,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    button2: {
        backgroundColor: '#f5f5f5',
        height: 70,
        width:'100%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    closeButton:{
        height:40,
        width:40,
        backgroundColor:'#f5f5f5',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top:0,
        left: width /2-20,
    },
    textInput:{
        height: 50,
        borderRadius:25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 20,
        marginVertical: 5,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderColor: 'rgba(0,0,0,0.1)'
    }
});