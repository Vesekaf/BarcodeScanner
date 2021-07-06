import React from 'react';
import { StyleSheet, View } from 'react-native';



import Scanscreen from "./screens/ScanScreen"


export default function App() {
  return (
    <View style={styles.container}>
      
      <Scanscreen />

    </View>
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
