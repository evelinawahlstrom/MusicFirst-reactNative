import React from 'react'

import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native'

import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default Sidebar = props => (
    <ScrollView>
    <ImageBackground source={require('../assets/background.jpg')}
    style={{ width: undefined, padding: 16, paddingTop: 48 }}>
    <Image source={require('../assets/profile-pic.jpeg')} style={styles.profile}/>
    <Text style={styles.name}>Evelina Wahlström</Text>
    <View style={{flexDirection: "row"}}>
    <Text style={styles.friends}>25 Friends</Text>
    <Ionicons name="md-people" size={16} color="white"/>
    </View>
    </ImageBackground>
    <View style={styles.container}>
    <DrawerNavigatorItems {...props} />
    </View>
    </ScrollView>
)

const styles = StyleSheet.create({
container: {
    flex: 1
},
profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white'
},
name: {
    color: 'white', 
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
},
friends: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 4
}
})

// "rgba(255, 255, 255, 0.8)"