import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../Constant/color'
import  Ionicons  from 'react-native-vector-icons/Ionicons'

const CustomInput = (props) => {

    const [isPasswordShown, setIsPasswordShown] = useState(false)

  return (
    <View style={{marginBottom: 12}}>

        <View style={{
            width: '100%',
            height: 50,
            borderColor: COLORS.gray,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22,
        }}>
            <TextInput
            onChangeText={props.handler} 
            placeholder={props.placeholder} 
            placeholderTextColor={COLORS.black}
            secureTextEntry = {props.isPasswordField ? isPasswordShown  : false }
            style={{
                width: '100%',  
            }}
            />

            {
                props.isPasswordField &&

                <TouchableOpacity
                onPress={()=> setIsPasswordShown(!isPasswordShown)}
                style={{
                    position: 'absolute',
                    right: 12
                }}>
                    { isPasswordShown ? <Ionicons name='eye' size={20} color={COLORS.black} /> : <Ionicons name='eye-off' size={20} color={COLORS.black} /> }
                </TouchableOpacity>
            }
        </View>
    </View>
  )
}

export default CustomInput