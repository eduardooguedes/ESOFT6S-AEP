import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemGravacao from '../../components/ItemGravacao';

export default function Gravacoes(){

const gravacoes = [
    {
      tituloFrequencia: "Frequência de tosse/espirro",
      itens: [
        {
          dataHora: "20/09/2021 - 09:25:44",
          animal: "Animal #19382710"
        },
        {
          dataHora: "20/09/2021 - 08:12:04",
          animal: "Animal #61947355"
        },
        {
          dataHora: "19/09/2021 - 02:48:25",
          animal: "Animal #21997630"
        },
        {
          dataHora: "18/09/2021 - 21:07:56",
          animal: "Animal #37956194"
        },
      ]
    },
    {
      tituloFrequencia: "Frequência de comportamento alterado",
      itens: [
        {
          dataHora: "21/09/2021 - 14:52:37",
          animal: "Animal #11247586"
        },
        {
          dataHora: "20/09/2021 - 14:33:01",
          animal: "Animal #99531247"
        },
        {
          dataHora: "20/09/2021 - 13:41:12",
          animal: "Animal #75586210"
        },
      ]
    },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>GRAVACOES</Text>
      {gravacoes.map(notificacao =>
          <ItemGravacao tituloFrequencia={notificacao.tituloFrequencia}
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