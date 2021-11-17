import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemNotificacao(props){  

  return (
    <View style={styles.barracao}>
        <View style={styles.tituloBarracao}>
          <Text style={styles.tituloBarracaoPorLote}>{props.barracao}</Text>
          <Text> -> </Text>
          <Text style={styles.tituloLote}>{props.lote}</Text>
        </View>

        {props.itens.map(item => 
          <View style={styles.itemDeNotificacao}>
            <Text>{item.mensagem}</Text>
            <Text style={{fontWeight: 'bold'}}>({item.animal})</Text>
          </View>  
        )}
    </View>
  );
}

const styles = StyleSheet.create({
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