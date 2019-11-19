import React from 'react';
import { Text, View } from 'react-native';
import SignUp from './screens/SignUp'

// Styles
import styles from './App.styles'

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  );
}

