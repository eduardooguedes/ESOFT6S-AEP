import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ItemNotificacao from '../../components/ItemNotificacao';


export default function Notificacoes(){

  const notificacoes = [
    {
      barracao: "Barracão 1",
      lote:     "Lote 1",
      itens: [
        {
          mensagem: "Temperatura abaixo da média",
          animal: "Animal #19382710"
        },
        {
          mensagem: "Comportamento alterado",
          animal: "Animal #93749384"
        },
        {
          mensagem: "Frequência sonora: tosse/espirro",
          animal: "Animal #92748391"
        },
      ]
    },
    {
      barracao: "Barracão 1",
      lote:     "Lote 3",
      itens: [
        {
          mensagem: "Temperatura acima da média",
          animal: "Animal #84635273"
        },
      ]
    },
    {
      barracao: "Barracão 2",
      lote:     "Lote 8",
      itens: [
        {
          mensagem: "Temperatura abaixo da média",
          animal: "Animal #74536475"
        }
      ]
    }
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>NOTIFICACOES</Text>
        {notificacoes.map(notificacao =>
          <ItemNotificacao barracao={notificacao.barracao}
                            lote={notificacao.lote}
                            itens={notificacao.itens}/>
        )};
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#342c49',
  },
  titulo:{
    fontSize: 15,
    fontWeight: 'bold',
    padding: "30px",
    color: "white",
    justifyContent: 'center'
  },

});