import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../Constant/color'
import { Image } from 'react-native'
import Button from '../Component/Button'


const Welcome = ({ navigation }) => {
  
  return (
    <LinearGradient colors={['#000', '#000']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/logo2.png')}
            style={{
              borderRadius: 20,
              position: 'absolute',
              top: 80,
              
            }}
            />
          </View>
          

          {/* <Image source={require('../assets/hero1.jpg')} style={{
            height: 100, 
            width: 100, 
            borderRadius: 20,
            position: 'absolute', 
            top: 10,
            transform: [
              {rotate: '-15deg'},
              {translateX: 20},
              {translateY: 50}
            ]
           }} />

          <Image source={require('../assets/hero2.jpg')} style={{
            height: 100, 
            width: 100, 
            borderRadius: 20,
            position: 'absolute', 
            top: -30,
            left: 100,
            transform: [
              {rotate: '-5deg'},
              {translateX: 50},
              {translateY: 50}
            ]
           }} />

          <Image source={require('../assets/hero3.jpg')} style={{
            height: 100, 
            width: 100, 
            borderRadius: 20,
            position: 'absolute', 
            top: 130,
            left: -50,
            transform: [
              {rotate: '15deg'},
              {translateX: 50},
              {translateY: 50}
            ]
           }} />

          <Image source={require('../assets/hero2.jpg')} style={{
            height: 200, 
            width: 200, 
            borderRadius: 20,
            position: 'absolute', 
            top: 180,
            left: 100,
            transform: [
              {rotate: '-15deg'},
              {translateX: 50},
              {translateY: 50}
            ]
           }} /> */}


           {/* Content */}
          
          <View style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%'
          }}>
              <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: COLORS.white
              }}
              >Let's Get</Text>
              <Text
              style={{
                fontSize: 46,
                fontWeight: '800',
                color: COLORS.white
              }}
              >started</Text>

              <View style={{ marginVertical: 22}}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.white,
                  marginVertical: 4
                }}>Connect with each other with chatting</Text>
                
                <Text  style={{
                  fontSize: 16,
                  color: COLORS.white,
                  marginVertical: 4
                }}>
                Calling, Enjoy safe and private texting
                </Text>

                <Button
                filled
                 title='Join now' 
                 color={COLORS.primary}
                 style={{ marginTop: 18, width: '100%'}}
                 onPress = {()=> navigation.navigate('SignUp')}
                />
              </View>
          </View>




        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  
})

export default Welcome