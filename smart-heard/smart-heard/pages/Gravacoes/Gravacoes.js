import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Gravacoes(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GRAVACOES</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B0082'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});