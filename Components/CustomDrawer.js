import { DrawerContentScrollView, DrawerItemList,   } from '@react-navigation/drawer'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import Iconicon from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props) => {
  return (
    
    <DrawerContentScrollView contentContainerStyle={styles.container} {...props}>
        <ImageBackground style={{paddingVertical: 20, paddingLeft: 8}} source={require('../assets/bg.png')}>
            <Image style={styles.profile} source={require('../assets/user.jpg')}/>
            <Text style={styles.text}>Brayan Theloveend</Text>
            <Text style={styles.subText} >noubissibrayan@gmail.com</Text>
        </ImageBackground>

        <View style={styles.drawerItem}>
            <Text style={{ paddingLeft: 8, paddingVertical: 12, fontWeight: 'bold', fontSize: 12}}> Navigation</Text>
            <DrawerItemList {...props} />
        </View>

       
        
    </DrawerContentScrollView>

       
    
    
  )
}

const styles = StyleSheet.create({
    container: {
        
    },

    profile: {
        width: 80,
        height: 80,
        borderRadius: 30,
        marginBottom: 18
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
       
    },
    subText:{
        
        fontSize: 12,
        fontWeight: 'light',
        color: 'white'
    },
    drawerItem:{
        flex: 1,

    }
})

export default CustomDrawer