import { View, Text,ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../Constant/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../Components/SearchBar'
import { TouchableOpacity } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.white, justifyContent: 'center' }}>
      <ScrollView style={{paddingHorizontal: 10}}>
        <SearchBar/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Actualitée</Text>
          <Text style={{fontWeight: 'bold', color: COLORS.secondary}}>Tout</Text>
        </View>

        <ScrollView horizontal style={{flexDirection: 'row', marginTop: 30, padding: 10}}>
          <View style={{
            backgroundColor: COLORS.liteGray,
            padding: 20,
            width: 270,
            borderRadius: 35,
            marginRight: 14
          }}>
            <Image source={require('../assets/stud.jpg')} 
            style={{ 
              width: 230, 
              height: 180,
              borderRadius: 35, 
            }} />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View>
                <Text style={{
                  paddingTop: 12,
                  fontWeight: 'bold',
                  fontSize: 15
                }}>
                  Etudier en groupe
                </Text>
                <Text style={{marginTop: 4, fontWeight:'bold', color: 'gray'}}>
                  12 Leçons . 40 exercices
                </Text>
              </View>

              <TouchableOpacity>
                <View style={{ borderRadius: 100, backgroundColor: COLORS.secondary, padding: 8}} >
                  <Ionicons name='arrow-redo-outline' style={{fontSize: 20, color: 'white'}}/>
                </View>
              </TouchableOpacity>
            </View>
            
            
          </View>

          <View style={{
            backgroundColor: COLORS.liteGray,
            padding: 20,
            width: 270,
            borderRadius: 35,
            marginRight: 14
          }}>
            <Image source={require('../assets/dive.jpg')} 
            style={{ 
              width: 230, 
              height: 180,
              borderRadius: 35, 
            }} />
            <Text style={{
              paddingTop: 12,
              fontWeight: 'bold',
              fontSize: 15
            }}>
              Etudier en groupe
            </Text>
            <Text style={{marginTop: 4, fontWeight:'bold', color: 'gray'}}>
              12 Leçons . 40 exercices
            </Text>
          </View>

          <View style={{
            backgroundColor: COLORS.liteGray,
            padding: 20,
            width: 270,
            borderRadius: 35,
            marginRight: 14
          }}>
            <Image source={require('../assets/drink.jpg')} 
            style={{ 
              width: 230, 
              height: 180,
              borderRadius: 35, 
            }} />
            <Text style={{
              paddingTop: 12,
              fontWeight: 'bold',
              fontSize: 15
            }}>
              Etudier en groupe
            </Text>
            <Text style={{marginTop: 4, fontWeight:'bold', color: 'gray'}}>
              12 Leçons . 40 exercices
            </Text>
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Nos formations</Text>
          <Text style={{fontWeight: 'bold', color: COLORS.secondary}}>Tout</Text>
        </View>

        <View style={{marginTop: 30, padding: 10}}>

            <View style={{ flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: 10, 
            padding: 12, 
            backgroundColor: COLORS.liteGray, 
            borderRadius: 20}}>
              <Image source={require('../assets/geniemeca.jpeg')}
                style={{
                  borderRadius: 14,
                  width: 60,
                  height: 60,
                }}
              />

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: '68%', gap: 6}}>
                  <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 16}}>Genie Mécanique</Text>
                  <Text numberOfLines={1}>Plonger dans le monde de l'electronique et ces debouchés.</Text>
                </View>

                <View style={{flexGrow: 1, justifyContent: 'center'}}>
                  <Ionicons name='chevron-forward-outline' style={{fontSize: 26, color: COLORS.secondary}} />
                </View>
              </View>
              
            </View>

            <View style={{ 
              flex: 1, 
              marginTop: 8,
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: 10, 
              padding: 12, 
              backgroundColor: COLORS.liteGray,
               borderRadius: 20
               }}>
              <Image source={require('../assets/geniCi.jpeg')}
                style={{
                  borderRadius: 14,
                  width: 60,
                  height: 60,
                }}
              />

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: '68%', gap: 6}}>
                  <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 16}}>Genie Civil</Text>
                  <Text numberOfLines={1}>Apprenez a Contruires des Oeuvres architecturales</Text>
                </View>

                <View style={{flexGrow: 1, justifyContent: 'center'}}>
                  <Ionicons name='chevron-forward-outline' style={{fontSize: 26, color: COLORS.secondary}} />
                </View>
              </View>
              
            </View>
            <View style={{ 
              marginTop: 8,
              flex: 1, 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: 10, 
              padding: 12, 
              backgroundColor: COLORS.liteGray, 
              borderRadius: 20}}>
              <Image source={require('../assets/info.jpg')}
                style={{
                  borderRadius: 14,
                  width: 60,
                  height: 60,
                }}
              />

              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: '68%', gap: 6}}>
                  <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 16}}>Genie informatique</Text>
                  <Text numberOfLines={1}>Apprenez a develloper des applications web et mobile et plus encore</Text>
                </View>

                <View style={{flexGrow: 1, justifyContent: 'center'}}>
                  <Ionicons name='chevron-forward-outline' style={{fontSize: 26, color: COLORS.secondary}} />
                </View>
              </View>
              
            </View>

            
        </View>








        <View style={{ marginTop: 40}}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home