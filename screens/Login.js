import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/color'
import { TextInput } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'
import Button from '../Component/Button'
import CustomInput from '../Components/CustomInput'
import ButtonWidthImage from '../Component/ButtonWidthImage'

const Login = ({ navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(true)
    const [isChecked, setIsChecked] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, justifyContent: 'center' }}>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
            <Image 
            source={require('../assets/logo.jpg')}
            style={{
                width: 60,
                height: 60,
                borderRadius: 10
            }}
            />
        </View>

        <View style={{flex: 1, marginHorizontal: 22}}>
            <View style={{ marginVertical: 20}}>
                <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 8,
                textAlign: 'center',
                color: COLORS.black
                }}>
                   Schoolaris
                </Text>

                <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: COLORS.black
                }}>
                    Nous sommes content de vous revoir .
                </Text>
            </View>


            <CustomInput placeholder='Courriel ou e-mail' />
            <CustomInput placeholder='Mot de passe' isPasswordField />

            

            <Button 
            title ='Se connecter'
            filled
            style={{ borderColor: COLORS.secondary }}
            color = {COLORS.secondary}
            textColor= {COLORS.white}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <View style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.gray,
                    marginHorizontal: 10
                }}/>
                <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.gray}}> Continuer avec </Text>
                <View style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.gray,
                    marginHorizontal: 10
                }}/>
            </View>


           <ButtonWidthImage source={require('../assets/google.png')} title='Google' filled bgColor={COLORS.liteGray}/>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 22
            }}>
                <Text style={{ fontSize: 16, color: COLORS.black}}> Vous n'avez pas de compte ?  </Text>

                <Pressable onPress={()=> navigation.navigate('SignUp') }>
                    <Text style={{ color: COLORS.secondary, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'}}>s'inscrire</Text>
                </Pressable>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default Login