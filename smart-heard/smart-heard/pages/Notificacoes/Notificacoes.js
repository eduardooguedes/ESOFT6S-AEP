import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Notificacoes(){
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>NOTIFICACOES</Text>
      <View style={styles.barracao}>
        <ScrollView >
          <View style={styles.tituloBarracao}>
            <Text style={styles.tituloBarracaoPorLote}>Barracão 1</Text>
            <Text> -> </Text>
            <Text style={styles.tituloLote}>Lote 1</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Temperatura abaixo da média</Text>
            <Text style={{fontWeight: 'bold'}}>(Animal #19382710)</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 2</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 3</Text>
          </View>
        </ScrollView>
       </View>

       <View style={styles.barracao}>
        <ScrollView >
          <View style={styles.tituloBarracao}>
            <Text style={styles.tituloBarracaoPorLote}>Barracão 1</Text>
            <Text> -> </Text>
            <Text style={styles.tituloLote}>Lote 2</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Temperatura abaixo da média</Text>
            <Text style={{fontWeight: 'bold'}}>(Animal #69844122)</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 2</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 3</Text>
          </View>
        </ScrollView>
       </View>

       <View style={styles.barracao}>
        <ScrollView >
          <View style={styles.tituloBarracao}>
            <Text style={styles.tituloBarracaoPorLote}>Barracão 2</Text>
            <Text> -> </Text>
            <Text style={styles.tituloLote}>Lote 8</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Temperatura abaixo da média</Text>
            <Text style={{fontWeight: 'bold'}}>(Animal #34857998)</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 2</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 3</Text>
          </View>
        </ScrollView>
       </View>
    </View>
    </ScrollView>
  );
}

const Barracao = (titulo, lote) => {
  return (
    <View style={styles.barracao}>
        <ScrollView >
          <View style={styles.tituloBarracao}>
            <Text style={styles.tituloBarracaoPorLote}>{titulo}</Text>
            <Text> -> </Text>
            <Text style={styles.tituloLote}>{lote}</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Temperatura abaixo da média</Text>
            <Text>(Animal #19382710)</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 2</Text>
          </View>
          <View style={styles.itemDeNotificacao}>
            <Text>Item 3</Text>
          </View>
        </ScrollView>
       </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#342c49',
  },
  itemDeNotificacao: {
    height: 40,
    backgroundColor: '#53496c',
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 0.8,
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  barracao: {
    backgroundColor: '#443a5f',
    width: 250,
    borderWidth: 3,
    paddingBottom: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  titulo:{
    fontSize: 15,
    fontWeight: 'bold',
    padding: "30px",
    color: "white",
    justifyContent: 'center'
  },
  tituloBarracao: {
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  tituloBarracaoPorLote:{
    fontSize: 12,
  },
  tituloLote:{
      fontSize: 12,
      color: "white"
  },
});