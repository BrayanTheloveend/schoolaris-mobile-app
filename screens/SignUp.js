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

const SignUp = ({ navigation }) => {

    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isChecked, setIsChecked] = useState(false)


  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white }}>
        <View style={{flex: 1, marginHorizontal: 22}}>
            <View style={{ marginVertical: 22}}>
                <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 10,
                color: COLORS.black
                }}>
                    Créer un compte
                </Text>

                <Text style={{
                    fontSize: 16,
                    color: COLORS.black
                }}>
                   Veuillez remplir les champs ci-dessous.
                </Text>
            </View>


          

            <CustomInput placeholder='Courriel ou e-mail'/>
            <CustomInput placeholder='Numéro de Telephone'/>
            <CustomInput placeholder='Mot de passe' isPasswordField/>

            

            <View style={{
                flexDirection: 'row',
                marginVertical: 4
            }}>

                <Checkbox
                    style={{ marginRight: 8 }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked && COLORS.secondary}
                />
                <Text> agree to the terms and conditions apply to this application </Text>

            </View>


            <Button 
                title = {"S'inscrire"}
                filled
                textColor= {COLORS.white}
                style={{ borderColor: COLORS.secondary, marginTop: 12 }}
                color = {COLORS.secondary}
                onPress={()=>navigation.navigate('Slide1')}
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

            <ButtonWidthImage title='Google' filled bgColor={COLORS.liteGray} source={require('../assets/google.png')} />
            

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
            
        </View>
    </SafeAreaView>
  )
}

export default SignUp