import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';

export default ({route, navigation}) =>  {

  // Parametros
  const {msg} = route.params; 

  return (
    <ScrollView style={styles.container}> 
      <Image
        style={styles.grafico}
        source={require('../../resources/grafico.png')}
      />
      <Text style={styles.branco}> Possíveis causas:</Text>
      <Text style={styles.branco, styles.container}> &#8226; Temperatura do barracão acima do normal. </Text>
      <Text style={styles.branco, styles.container}> &#8226; Sintoma de doença respiratória. </Text>
      <Text style={styles.branco, styles.container}> &#8226; Estresse. </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center', 
    backgroundColor: '#342c49',
    color: 'white'
  },
  branco: {
    color: "white",
  },
  grafico: {
    marginTop: 30
  }
});