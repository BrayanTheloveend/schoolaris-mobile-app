import { View, Text, Image, Pressable, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/color'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native'

const Profile = () => {

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
    <View style={{ flex: 1,  backgroundColor: COLORS.white}}>
      <ScrollView style={{paddingHorizontal: 10, paddingTop: 20}}>
        <Pressable onPress={pickImage} >
          <View style={{justifyContent: 'center', alignItems: 'center'}}>

            <View style={{  
            width: 180,
            borderColor: COLORS.secondary,
            borderWidth: 2, 
            borderStyle: 'dotted',
            height: 180,
            borderRadius: 100,
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative'
            }}>
            
            <Image source={ image ? { uri: image } : require('../assets/user.jpg')}
              style={{width: 160, 
              height: 160,
              borderRadius: 100
              }}/>

            <TouchableOpacity>
              <View 
                style={{
                  color: COLORS.gray,
                  position: "absolute",
                  bottom: -10,
                  right: 20,
                  backgroundColor: COLORS.liteGray,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 4,
                  borderRadius: 100
                }}> 
                  <Ionicons name='camera' style={{fontSize: 30, color: COLORS.secondary}}/> 
                </View>
              </TouchableOpacity>  
            </View>
          </View>
        </Pressable>

        <View style={{marginTop: 18}}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>Js Master</Text>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Noubissibrayan@gmail.com</Text>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'gray'}}>Software engeniering level 1</Text>
        </View>
        

        {/* Personnel information */}

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>Informations Personnelles</Text>
          <Ionicons name='create' style={{fontSize: 18, color: 'gray'}}/>
        </View>

        <View style={{ 
          marginTop: 30, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           borderTopLeftRadius: 20,
           borderTopRightRadius: 20,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='mail' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Courriel</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Noubissibrayan@gmail.com</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='call' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Telephone</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>+237 676588528</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='calendar' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Birthday</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>18.12.2006</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           borderBottomLeftRadius: 20,
           borderBottomRightRadius: 20,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='location' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Ville</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Yaoundé/Rue..</Text>
        </View>

        {/* School information */}

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>Informations de Scholarité</Text>
        </View>

        <View style={{ 
          marginTop: 30, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           borderTopLeftRadius: 20,
           borderTopRightRadius: 20,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='school' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Filiére</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Software engeniering</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='easel' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Niveau</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>1</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='wallet' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>Scholarité</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>1 200 000 Fcfa</Text>
        </View>

        <View style={{ 
          marginTop: 2, 
          flexDirection: 'row',
           alignItems: 'center', 
           justifyContent: 'space-between',
           padding: 18,
           borderBottomLeftRadius: 20,
           borderBottomRightRadius: 20,
           backgroundColor: COLORS.liteGray
           }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='trail-sign' style={{fontSize: 18, color: COLORS.secondary}}/>
            <Text>payé</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: COLORS.secondary}}>500 000 Fcfa</Text>
        </View>


        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>Systéme </Text>
        </View>

        

        <View style={{ marginTop: 40}}/>
      </ScrollView>
    </View>
  )
}

export default Profile