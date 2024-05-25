import { View, Text, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import React from 'react'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import COLORS from '../Constant/color'

const CustomSelect = (props) => {

  return (

    <SelectDropdown
        data={props.data}
        onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
        return (
            <View style={styles.dropdownButtonStyle}>
            {/* {selectedItem && (
                <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
            )} */}
            <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || props.placeholder}
            </Text>
            <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
            </View>
        );
        }}
        renderItem={(item, index, isSelected) => {
        return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                {/* <Ionicons name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
        );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}



const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: '100%',
      height: 50,
      backgroundColor: 'transparent',
      borderColor: COLORS.liteGray,
      borderWidth: 1,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 20,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });

export default CustomSelect