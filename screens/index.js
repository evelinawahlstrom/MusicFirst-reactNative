import React from 'react'
import HomeScreen from './HomeScreen'
import PayPal from './PayPal'

export const MusicFirst = ({navigation}) => <HomeScreen 
navigation={navigation} 
name="MusicFirst"
text="At MusicFirst Festival we invite you to a modern festival, where payment's made easy"/>

export const Profile = ({navigation}) => 
<HomeScreen
navigation={navigation} 
name="PROFILE"/>

export const Lineup = ({navigation}) => <HomeScreen navigation={navigation} name="LINE-UP"/>

export const Eat = ({navigation}) => <HomeScreen 
navigation={navigation}
name="EAT"
text="Pescetarian? Vegan? Gluten-intolerant?
Don't worry, we've got you covered!"/>

export const Drink = ({navigation}) => <HomeScreen 
navigation={navigation}
name="DRINK"
text="Drink responsibly, 
Beer + Water = HappyCamper"/>

export const Friends = ({navigation}) => <HomeScreen navigation={navigation} name="FRIENDS"
text="Connect with your fellow festival friends and add them as co-payer when purchasing drinks and food"/>

export const Info = ({navigation}) => <HomeScreen navigation={navigation} name="INFO"/>

export const Money = ({navigation}) => 
<PayPal navigation={navigation} 
name="$$$"
text="Use PayPal as a payment method. 
Split the cost with your friends by adding them as a co-payer"
/>


