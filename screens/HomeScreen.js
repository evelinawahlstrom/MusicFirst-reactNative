import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

export default class HomeScreen extends React.Component {
render() {
  return (
    <View style={styles.container}>
    <SafeAreaView 
    style={{flex: 1}}>
    <TouchableOpacity 
    style={{alignItems: "flex-end", margin: 16 }}
    onPress={this.props.navigation.openDrawer}
    >
    <FontAwesome5 name="bars" size={24} color='#161924'/>
    </TouchableOpacity>
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text style={styles.text}>{this.props.name}</Text>
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
  text: {
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: '500',
    color:'#161924'
  }
})


