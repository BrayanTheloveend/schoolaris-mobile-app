import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../Constant/color'
import CustomInput from '../Components/CustomInput'
import CustomSelect from '../Components/CustomSelect'
// import CustomInput from '../Components/CustomInput'
// import Button from '../Component/Button'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import FilePicker from '../Components/FilePicker'
import Button from '../Component/Button'
import { RadioButton } from 'react-native-paper'



const Slide2 = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [selectedValue, setSelectedValue] = useState('option1');



  const data =[
    {
      id: 1,
      title: 'Software Engeniering'
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, paddingHorizontal: 10 }}>

      <View style={{ marginVertical: 8, marginBottom: 30 }}>
        <Text style={{fontSize: 20, fontWeight: 'bold' }}>Quel est votre profession ?</Text>
        <Text style={{marginTop: 10}}>Ceci est une moyen pour nous d'en apprendre un peu plus sur vous.</Text>
      </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 25}}>
          <Pressable onPress={()=>{
            setIsClicked(false)
            setSelectedValue('option1')
            }}>
            <View style={{ 
              borderRadius: 20,
              overflow: 'hidden',
              borderColor: !isClicked ? COLORS.secondary : COLORS.liteGray,
              borderWidth: 2,
              justifyContent: 'center'

             }}>
              <Image source={require('../assets/stud.jpg')} style={{width: 130, height: 130}}/>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton.Android 
                  value="option1"
                  status={selectedValue === 'option1' ? 'checked' : 'unchecked'} 
                  // onPress={() => setSelectedValue('option1')} 
                  color="#007BFF"
                /> 
                <Text style={{fontWeight: 'bold'}}>Etudiant</Text>
              </View>
              
            </View>
          </Pressable>


          <Pressable onPress={()=>{
            setIsClicked(true)
            setSelectedValue('option2')
            }}>
            <View style={{ 
              borderRadius: 20,
              overflow: 'hidden',
              borderColor: isClicked ? COLORS.secondary : COLORS.liteGray,
              borderWidth: 2,
              justifyContent: 'center'
             }}>
              <Image source={require('../assets/teach.jpg')} style={{width: 130, height: 130}}/>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton.Android 
                  value="option2"
                  status={selectedValue === 'option2' ? 'checked' : 'unchecked'} 
                  //onPress={() => setSelectedValue('option2')} 
                  color="#007BFF"
                /> 
                <Text style={{fontWeight: 'bold'}}>Professeur</Text>
              </View>
            </View>
          </Pressable>

          
        </View>


        <View style={{marginTop: 30}}>
            <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8}}>
              <Ionicons name={ isClicked ? 'folder-open' : 'school'} style={{fontSize: 20, color: COLORS.secondary}} />
              <Text>{ isClicked ? 'Nous avons besoin de votre CV' :  'Quelle est votre Specialité ?'}</Text>
            </View>
            
          {isClicked ? 
          
            <FilePicker/>

            : 

            <CustomSelect placeholder='Choisir votre filiére' data={data}/>
          
          }
        </View>


        <Button
          title = {"Suivant"}
          filled
          textColor= {COLORS.white}
          onPress={()=>navigation.navigate('Slide3')}
          style={{ borderColor: COLORS.secondary, marginTop: 12 }}
          color = {COLORS.secondary}
        />


        
     
      

     
      

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 22
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black}}> Avez-vous besoins  </Text>

          <Pressable onPress={()=> navigation.navigate('Login') }>
            <Text style={{ color: COLORS.secondary, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'
            
            }}>d'aide</Text>
          </Pressable>
        </View>
      
    </SafeAreaView>
  )
}

export default Slide2