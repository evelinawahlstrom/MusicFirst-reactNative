import React from 'react'
import {Platform, Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import PayPal from '../screens/PayPal'

const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    PayPal: {
        screen: PayPal
    }
    })

export default createAppContainer(DrawerNavigator)