import { View, Text, Pressable, Button, Image, Alert } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Slide1 from './screens/Slide1'
import Slide2 from './screens/Slide2'
import Slide3 from './screens/Slide3'
import Profile from './screens/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Demo from './screens/Demo'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import COLORS from './Constant/color'
import Home from './screens/Home'
import { navigationRef } from './RootNavigation';
import * as RootNavigation from './RootNavigation.js';


const App = ({navigation}) => {


  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
        initialRouteName='Home'
        >
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
            headerShown: false
          }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
            headerShown: false
          }}
          />
          <Stack.Screen
            name='Slide1'
            component={Slide1}
            options={{
            headerShown: true,
            title: 'Créer un compte  1/3'
          }}
          />

          <Stack.Screen
            name='Slide2'
            component={Slide2}
            options={{
            headerShown: true,
            title: 'Créer un compte  2/3'
          }}
          />
          <Stack.Screen
            name='Slide3'
            component={Slide3}
            options={{
            headerShown: true,
            title: 'Créer un compte  3/3'
          }}
          />

          <Stack.Screen name="Home" options={{
            headerShown: false,
          }} >
            {() => (
              <Tab.Navigator
                initialRouteName="Accueil"
                // tabBar={() => 
                //   <View>

                //   </View>
                // }
                screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            } else if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            }else{
              iconName = focused ? 'wallet' : 'wallet-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: 'gray',
          headerShown: true,

        })}
              >
                <Tab.Screen name="Accueil" component={Home} options={{
                  headerTitleAlign:'center',
                  headerTitle: (props) => 
                  <View {...props}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Accueil</Text>
                  </View>
                }} />
                <Tab.Screen name="Scholarité" component={Demo} 
                options={{
                  headerTitleAlign:'center',
                  headerTitle: (props) => 
                  <View {...props}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Scholarité</Text>
                  </View>
                }} />
                <Tab.Screen name="Profile" component={Profile} 
                options={{ 
                  headerTitleAlign:'center',
                  headerTitle: (props) => 
                  <View {...props} style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Votre Profile</Text>
                  </View>,

                  headerRight: () => (
                    <Pressable onPress={
                      ()=>Alert.alert('Se déconnecter', 'Voulez-vous fermé cette session ?',
                      [{
                          text: 'Ok',
                          onPress: () => RootNavigation.navigate('Login'),
                          style: 'cancel',
                        },
                      ],
                      )}>
                      <View style={{padding: 10}}>
                        {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>Se deconnecter</Text> */}
                        <Ionicons name='exit-outline' style={{fontSize: 20}}/>
                      </View>
                    </Pressable>
                  ),
                
                }} />
              </Tab.Navigator>
            )}
        </Stack.Screen>
{/* 
        <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
            headerShown: true,
            title: 'Votre Profile'
          }}
          /> */}



        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App