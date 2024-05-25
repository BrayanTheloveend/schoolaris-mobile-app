import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../Constant/color'

const ButtonWidthImage = (props) => {
    const filledBgColor = props.bgColor || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor= props.filled ? filledBgColor: outlinedColor;
    const textColor = props.color ?  props.color  : COLORS.black;
  return (
    <View style={{flexDirection: 'row', gap: 8, justifyContent: 'center'}}>
        <TouchableOpacity
       
        style={{...styles.button, backgroundColor: bgColor, borderColor: bgColor, ...props.style}} onPress={props.onPress}
        >
            <Image source={props.source} 
                style={{
                    height: 25,
                    width: 25,
                    marginRight: 8
                }}
                resizeMode='contain'
            />
            <Text style={{ color: textColor}} >{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
        gap: 2,
        borderWidth: 1,
        marginRight: 4,
        borderRadius: 10
    }
})

export default ButtonWidthImage