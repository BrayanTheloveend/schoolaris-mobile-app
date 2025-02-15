import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../Constant/color'
import { TouchableOpacity } from 'react-native'

const Button = (props) => {

    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor= props.filled ? filledBgColor: outlinedColor;
    const textColor = props.filled ? COLORS.white : props.textColor;
  return (
    <TouchableOpacity style={{...styles.button, backgroundColor: bgColor, ...props.style}} onPress={props.onPress}>
      <Text style={{ fontSize: 16, color: textColor}}>{props.title} </Text>
    </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
    button: {
        paddingBottom: 14,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Button