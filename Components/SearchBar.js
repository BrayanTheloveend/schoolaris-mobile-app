import { View, Text, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../Constant/color'
import  Ionicons  from 'react-native-vector-icons/Ionicons'

const SearchBar = (props) => {
  return (
    <View style={{marginBottom: 12}}>

        <View style={{
            width: '100%',
            height: 50,
            borderColor: COLORS.liteGray,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: COLORS.liteGray,
            justifyContent: 'center',
            paddingLeft: 22,
        }}>
            <TextInput
            onChangeText={props.handler} 
            placeholder='Rechercher quelque chose..' 
            // placeholderTextColor={COLORS.gray}
            secureTextEntry = {props.isPasswordField ? isPasswordShown  : false }
            style={{
                width: '100%', 
                paddingLeft: 30 ,
                fontWeight: 'bold'
                
            }}
            />

            <Ionicons name='search-outline' 
            style={{
                position: 'absolute',
                fontSize: 25,
                color: COLORS.secondary,
                left: 12
            }}/>

        </View>
    </View>
  )
}

export default SearchBar