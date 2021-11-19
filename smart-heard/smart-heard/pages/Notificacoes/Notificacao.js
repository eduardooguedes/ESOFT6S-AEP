import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, Button} from 'react-native';

export default ({route, navigation}) =>  {

  // Parametros
  const {msg} = route.params; 

  return (
    <ScrollView style={styles.container}> 
    <View style={styles.barracao}>
      <Image
        style={styles.grafico}
        source={require('../../resources/grafico.png')}
      />
      <Text style={styles.branco}> Possíveis causas:</Text>
      <Text style={styles.branco}> &#8226; Temperatura do barracão acima do normal </Text>
      <Text style={styles.branco}> &#8226; Sintoma de doença respiratória</Text>
      <Text style={styles.branco}> &#8226; Estresse</Text>
      <View style={styles.botaoVoltar}>
        <Button 
          color='#8c1c62'
          title="Voltar"
          onPress={() => navigation.navigate('Notificacoes')}
          >
            Voltar
        </Button>
        </View>
    </View>
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
  barracao: {
    backgroundColor: '#443a5f',
    width: 300,
    borderWidth: 3,
    paddingBottom: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  branco: {
    color: "white",
    marginLeft: 10,
  },
  botaoVoltar:{
    fontSize: 8,
    display: "flex",
    alignSelf: "center",
    height: 5,
    width: 100,
    marginTop: 5,
    marginBottom: 35,
    padding: 5,
  },
  grafico: {
    margin: 15,
    width: 265,
    height: 230
  }
});