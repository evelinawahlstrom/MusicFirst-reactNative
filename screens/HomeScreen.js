import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

export default class HomeScreen extends React.Component {
render() {
  return (
    <View style={styles.container}>
    <SafeAreaView 
    style={{flex: 1}}>
    <TouchableOpacity 
    style={{alignItems: "flex-end", margin: 16, }}
    onPress={this.props.navigation.openDrawer}
    >
    <FontAwesome5 name="bars" size={24} color='#161924'/>
    </TouchableOpacity>
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text style={styles.title}>{this.props.name}</Text>
    <Text style={styles.text}>{this.props.text}</Text>
    </View>
    </SafeAreaView>
    </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 50,
    fontFamily: 'Cochin',
    fontWeight: '500',
    color:'#161924'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'normal',
    color:'#161924',
    textAlign: 'center',
    padding: 16,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white'
},
})

