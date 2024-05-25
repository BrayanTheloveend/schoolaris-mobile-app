import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import PercentageCircle from 'react-native-expo-circle-progress';
import COLORS from '../Constant/color'

const Demo = () => {
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, paddingHorizontal: 10 }}>
      <ScrollView style={{paddingHorizontal: 10 }}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Montant de la scholarité deja</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Montant de la scholarité deja</Text>
          </View>
         


      </ScrollView>
    </SafeAreaView>
  )
}

export default Demo