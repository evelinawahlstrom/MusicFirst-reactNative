import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Dimensions, Slider} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

import {
  MusicFirst,
  ProfileScreen,
  Drink,
  Eat,
  Friends,
  Info,
  Lineup,
  Money
}
from "./screens/index.js"

import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator({
  MusicFirst: {
    screen: MusicFirst,
    navigationOptions: {
      title: "MUSICFIRST",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "PROFILE",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Lineup: {
    screen: Lineup,
    navigationOptions: {
      title: "LINE-UP",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Eat: {
    screen: Eat,
    navigationOptions: {
      title: "EAT",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Drink: {
    screen: Drink,
    navigationOptions: {
      title: "DRINK",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: {
      title: "FRIENDS",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      title: "INFO",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  Money: {
    screen: Money,
    navigationOptions: {
      title: "$$$",
      drawerIcon: ({ tintColor }) => 
       <Feather name="bar-chart" size={16} color={tintColor}/>
    }
  }
}, 
{
  contentComponent: props => <SideBar {...props}/>,

  drawerWidth: Dimensions.get('window').width * 0.85,
  hideStatusBar: true,
  // drawerType: 

  contentOptions: {
    activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
    activeTintColor: 'pink',
    marginTop: 16,
    marginHorizontal: 8
  },
  itemStyle: {
    borderRadius: 4
  }
})


export default createAppContainer(DrawerNavigator)


