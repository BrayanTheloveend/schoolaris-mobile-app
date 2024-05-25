import React from 'react'
import {Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import COLORS from '../Constant/color';
import CustomInput from './CustomInput';

const { width: screenWidth } = Dimensions.get('window')


const CarouselSignUp = () => {

    const data = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
    ];

    const renderItem =({item, index})=>{
        <View key={index}
        style={{
            flex: 1,
            borderWidth: 1,
            justifyContent: 'center',
        }}
    >
        <Text style={{ textAlign: 'center', fontSize: 30, color: COLORS.black}}>
            {item.title}
        </Text>
    </View>
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Carousel
                layout='default'
                data={data}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index, item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {item.title}
                        </Text>
                    </View>
                )}
            />
        </View>
  )
}

export default CarouselSignUp