import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../Constant/color';
//import DateTimePicker from '@react-native-community/datetimepicker';
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import moment from 'moment';

const CustomDatePicker = () => {

const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);

  };



  return (
    <>
        <Pressable onPress={()=>setShow(true)} style={{marginBottom: 12}}>
            <View style={{
                width: '100%',
                height: 50,
                borderColor: COLORS.gray,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                paddingLeft: 22,
            }}>
                <Text>Date de naissance : {date.toLocaleString().slice(0,10)}</Text>

                <View
                    style={{
                        position: 'absolute',
                        right: 12
                    }}>
                    <Ionicons name='calendar-outline' size={20} color={COLORS.black} />
                </View>
            </View>


            {/* {show && 
                <DateTimePicker
                value={date}
                display="default"
                mode={'date'}
                is24Hour={true}
                onChange={onChange}
                />
            } */}
        </Pressable>

      
      
    </>
  )
}

export default CustomDatePicker