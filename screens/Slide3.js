import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/color'
//import ImagePicker from 'react-native-image-crop-picker';
import  Ionicons  from 'react-native-vector-icons/Ionicons'
// import CustomDatePicker from '../Components/CustomDatePicker'
import * as ImagePicker from 'expo-image-picker';
import Button from '../Component/Button'

const Slide3 = ({navigation}) => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, paddingHorizontal: 10 }}>
      <View style={{ marginVertical: 8, marginBottom: 30 }}>
        <Text style={{fontSize: 20, fontWeight: 'bold' }}>Ajuster votre profil.</Text>
        <Text style={{marginTop: 10}}>Veuillez choisir une photo de profil</Text>
      </View>

        <Pressable onPress={pickImage}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>

                <View style={{  
                  width: 200,
                  borderColor: COLORS.liteGray,
                  borderWidth: 1, 
                  height: 200,
                  borderRadius: 100,
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  position: 'relative'
                }}>
                
                <Image source={ image ? { uri: image } : require('../assets/placeholder.jpg')}
                    style={{width: 200, 
                    height: 200,
                    borderRadius: 100
                    }}/>
                    <View 
                        style={{fontSize: 40,
                            color: COLORS.gray,
                            position: "absolute",
                            bottom: -4,
                            right: 20,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 4,
                            borderRadius: 100
                    }}> 
                        <Ionicons name='camera-outline' style={{fontSize: 40, color: COLORS.secondary}}/> 
                    </View>
                    
                </View>

               
            </View>
        </Pressable>

        <Button 
            title ='Terminée'
            filled
            onPress={()=>navigation.navigate('Profile')}
            style={{ borderColor: COLORS.secondary, marginTop: 30 }}
            color = {COLORS.secondary}
            textColor= {COLORS.white}
        />





    </SafeAreaView>
  )
}

export default Slide3