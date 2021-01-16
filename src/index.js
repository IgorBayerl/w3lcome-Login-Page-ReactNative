import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View , Dimensions,Image, TextInput, ImageBackground , Keyboard} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'

const { interpolate, Extrapolate, } = Animated;
const { width , height } = Dimensions.get('window')


export default function LoginApp() {
    
    const animatedValue = React.useRef(new Animated.Value(1)).current

    const animationDuration = 800

    function onSignInPressed(){
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: animationDuration,
        easing : Easing.inOut(Easing.ease)
      }).start()
    }

    function onBackButtonPressed(){
      Keyboard.dismiss()
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: animationDuration,
        easing : Easing.inOut(Easing.ease)
      }).start()
    }

    function onRegisterPressed(){
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: 1000,
        easing : Easing.inOut(Easing.ease)
      }).start()
    }
    
    const buttonY = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2  ],
      outputRange: [150, 50 , 150],
      extrapolate: Extrapolate.CLAMP
    });
    const buttonOpacity = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2],
      outputRange: [ 0 , 1 , 0],
      extrapolate: Extrapolate.CLAMP
    });

    const bgY = interpolate(animatedValue, {
      inputRange:  [0 , 1 , 2],
      outputRange: [-height / 4 , 0 , -height / 4 ],
      extrapolate: Extrapolate.CLAMP
    });
    const bgY2 = interpolate(animatedValue, {
      inputRange:  [0 , 1 ,  2  ],
      outputRange: [80, 0 , -80 ],
      extrapolate: Extrapolate.CLAMP
    });

    const textInputZindex = interpolate(animatedValue, {
      inputRange:  [ 0 ,  1 , 2 ],
      outputRange: [ 1 , -1 , 1 ],
      extrapolate: Extrapolate.CLAMP
    });
    const textInputY = interpolate(animatedValue, {
      inputRange:  [ 0  ,  1  , 2 ],
      outputRange: [ 30 , 100 , 0 ],
      extrapolate: Extrapolate.CLAMP
    });
    const textInputOpacity = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2],
      outputRange: [ 1 , 0 , 1],
      extrapolate: Extrapolate.CLAMP
    });
    const rotateCross = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2],
      outputRange: [ '180deg' , '360deg' , '180deg'],
      extrapolate: Extrapolate.CLAMP
    });
    /////// Confirm Password Button ///////
    const textInputRegisterOpacity = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2 ],
      outputRange: [ 0 , 0 , 1 ],
      extrapolate: Extrapolate.CLAMP
    });
    const textInputRegisterHeight = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2 ],
      outputRange: [ 0 , 0 , 50],
      extrapolate: Extrapolate.CLAMP
    });
    const textInputRegisterMargin = interpolate(animatedValue, {
      inputRange:  [ 0 , 1 , 2 ],
      outputRange: [ 0 , 0 , 10],
      extrapolate: Extrapolate.CLAMP
    });
    ///////////////////////////////////////
    
    return (
      <View style={styles.masterContainer}>
        <Animated.View
          style={{
              position:'relative',
              ...StyleSheet.absoluteFill,
              transform: [{ translateY: bgY }]
          }}
        > 

          <ImageBackground
            source={require('./assets/bgpng1.png')}
            style={{  height: height, width: width , position: 'relative'}}
          >
            <Animated.Image
              source={require('./assets/bgpng2.png')}
              style={{  height: height, width: width, position: 'absolute', transform: [{ translateY: bgY2 }]}}
            />
            <Image
              source={require('./assets/welcome.png')}
              style={{ position: 'absolute', width: width ,height: height}}
              resizeMode={'contain'}
            />
          </ImageBackground>

        </Animated.View>
        <View style={{ height: height / 2, justifyContent: 'center' }}>
          <Animated.View
            style={{
            ...styles.button2,
            opacity: buttonOpacity,
            width: '90%',
            marginHorizontal:20,
            transform: [{ translateY: buttonY }]
            }}
          >
            <RectButton style={styles.button2 } onPress={() => onSignInPressed()} >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color:'grey', marginRight: 12 }}> SIGN IN </Text>
              <FontAwesome name="sign-in" size={24} color="grey" />
            </RectButton>
          </Animated.View>
          <View style={{...styles.socialContainer}}>
            <Animated.View
              style={{
                  ...styles.socialSigninButton,
                  opacity: buttonOpacity,
                  transform: [{ translateY: buttonY }]
              }}
            >
              <RectButton style={{...styles.button2, backgroundColor: '#2E71DC'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  <FontAwesome name="facebook-f" size={24} color="white" />
                </Text>
              </RectButton>
            </Animated.View>
            <Animated.View
              style={{
                  ...styles.socialSigninButton,
                  backgroundColor: '#fff',
                  opacity: buttonOpacity,
                  transform: [{ translateY: buttonY }]
              }}
            >
              <RectButton style={styles.button2}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>
                  <FontAwesome name="google" size={24} color="grey" />
                </Text>
              </RectButton>
            </Animated.View>
            <Animated.View
              style={{
                  ...styles.registerButton,
                  opacity: buttonOpacity,
                  transform: [{ translateY: buttonY }]
              }}
            >
              <RectButton style={styles.button2} onPress={() => onRegisterPressed()}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>
                    REGISTER
                </Text>
              </RectButton>
            </Animated.View>
          </View>
          <Animated.View 
            style={{
                zIndex: textInputZindex ,
                opacity: textInputOpacity , 
                transform: [{translateY:textInputY}],
                height: height/2, 
                ...StyleSheet.absoluteFill,
                top:null,
                justifyContent:'center'
            }}
          >
            <Animated.View 
            style={{
                opacity: textInputOpacity , 
                transform: [{translateY:textInputY}],
                height: height/2, 
                ...StyleSheet.absoluteFill,
                top:null,
                justifyContent:'center'
            }}
          >
            <RectButton style={styles.closeButton} onPress={() => onBackButtonPressed()} >
              <Animated.Text style={{fontSize:15, transform:[
                    {rotate:rotateCross }
                ]}}>
                    X
              </Animated.Text>
            </RectButton>
          </Animated.View>
            <TextInput 
              name='Email'
              placeholder='Email'
              style={styles.textInput}
              placeholderTextColor = 'black'
              autoCapitalize='none'
              autoCompleteType='email'
            />
            <TextInput 
              name='Password'
              secureTextEntry={true}
              password={true}
              placeholder='Password'
              style={styles.textInput}
              placeholderTextColor = 'black'
              autoCapitalize='none'
              autoCompleteType='password'
            />
            <Animated.View
              style={{
              opacity: textInputRegisterOpacity, 
              marginBottom: textInputRegisterMargin , 
              height: textInputRegisterHeight
              }}
            >
              <TextInput 
                name='ConfirmPassword'
                secureTextEntry={true}
                password={true}
                placeholder='Confirm Password'
                style={{...styles.textInput}}
                placeholderTextColor = 'black'
                autoCapitalize='none'
                autoCompleteType='password'
              />
            </Animated.View>
            <Animated.View style={styles.buttonContainer}>
              <RectButton style={{...styles.button2, zIndex:-1} } onPress={() => onBackButtonPressed()}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color:'grey', marginRight: 12 }}> SIGN IN </Text>
                <FontAwesome name="sign-in" size={24} color="grey" />
              </RectButton>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );   
}