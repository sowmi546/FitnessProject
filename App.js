import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Opened up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AddEntry />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
