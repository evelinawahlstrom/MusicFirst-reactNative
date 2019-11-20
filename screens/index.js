import React from 'react'
import HomeScreen from './HomeScreen'

export const MusicFirst = ({navigation}) => <HomeScreen navigation={navigation} name="Welcome to the world of MusicFirst"/>

export const ProfileScreen = ({navigation}) => <HomeScreen 
navigation={navigation} 
name="PROFILE"/>

export const Lineup = ({navigation}) => <HomeScreen navigation={navigation} name="LINE-UP"/>

export const Eat = ({navigation}) => <HomeScreen navigation={navigation} name="EAT"/>

export const Drink = ({navigation}) => <HomeScreen navigation={navigation} name="DRINK"/>

export const Friends = ({navigation}) => <HomeScreen navigation={navigation} name="FRIENDS"/>

export const Info = ({navigation}) => <HomeScreen navigation={navigation} name="INFO"/>

export const Money = ({navigation}) => <HomeScreen navigation={navigation} name="$$$"/>


