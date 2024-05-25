import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/color'
import CustomInput from '../Components/CustomInput'
import Button from '../Component/Button'
import CustomDatePicker from '../Components/CustomDatePicker'

const Slide1 = ({navigation}) => {


  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, paddingHorizontal: 10 }}>

      <View style={{ marginVertical: 8, marginBottom: 30 }}>
        <Text style={{fontSize: 20, fontWeight: 'bold' }}>Comment vous appelez-vous ?</Text>
        <Text style={{marginTop: 10}}>Entrez le nom complet que vous utilisez au quotidien.</Text>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/familly.jpg')} style={{width: 180, height: 180}}/>
      </View>
      

      <CustomInput placeholder='Noms de famille' />
      <CustomInput placeholder='Prénoms' />
      {/* <CustomDatePicker/> */}
      

      

      <Button 
        title = {"Suivant"}
        filled
        textColor= {COLORS.white}
        style={{ borderColor: COLORS.secondary, marginTop: 12 }}
        color = {COLORS.secondary}
        onPress={()=>navigation.navigate('Slide2')}
      />
      





        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 22
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black}}> vous avez déjà un compte ? </Text>

          <Pressable onPress={()=> navigation.navigate('Login') }>
            <Text style={{ color: COLORS.secondary, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'
            
            }}>se connecter</Text>
          </Pressable>
        </View>
      
    </SafeAreaView>
  )
}

export default Slide1