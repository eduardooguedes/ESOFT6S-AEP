import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


export default function Relatorio(){
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>RELATORIOS</Text>
      <View>
        <View style={styles.central}>

        <View style={styles.linhaResumo}>
           <View style={styles.itens}>
               <Text style={styles.tituloItem}>
                  Animais Ativos
               </Text>
               <Text style={styles.textoItem}>
                  956
               </Text>'
           </View>
         <View style={styles.itens}>
              <Text style={styles.tituloItem}>
                  Em cuidado
               </Text>
               <Text style={styles.textoItem}>
                  2
               </Text>
         </View>
         <View style={styles.itens}>
             <Text style={styles.tituloItem}>
                  Peso Médio (kg)
               </Text>
               <Text style={styles.textoItem}>
                  86.7
               </Text>
         </View>
        </View>

        <View style={styles.linhaResumo}>
           <View style={styles.itens}>
              <Text style={styles.tituloItem}>
                  Previsão Entrada (mês)
               </Text>
               <Text style={styles.textoItem}>
                 51
               </Text>
           </View>

         <View style={styles.itens}>
             <Text style={styles.tituloItem}>
                  Previsão Saída (mês)
               </Text>
               <Text style={styles.textoItem}>
                 41
               </Text>
         </View>

         <View style={styles.itens}>
            <Text style={styles.tituloItem}>
                  Peso Corte (kg)
               </Text>
               <Text style={styles.textoItem}>
                  101.2
               </Text>
         </View>

        </View> 
        <Text style={styles.textoResumo}>
          Temp. média do lote (°C): 39.3 
        </Text>
        <Text style={styles.textoResumo}>
          Taxa de mortalidade leitões (%): 2.7 
        </Text>
        <Text style={styles.textoResumo}>
          Taxa de mortalidade porcas (%): 8.8
        </Text>
        <Text style={styles.textoResumo}>
          Custo médio (R$/Kg): 6.20
        </Text>
        <Text style={styles.textoResumo}>
          Lucro médio (R$/Kg): 6.20
        </Text>
        <Text style={styles.textoResumo}>
          Longevidade média (meses): 8.2
        </Text>
        </View>
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
  },
  central: {
    backgroundColor: '#443a5f',
    width: 270,
    borderWidth: 3,
    paddingBottom: 10,
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  linhaResumo:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  itens: {
    width: 80,
    height: 80,
    backgroundColor: '#53496c',
    marginLeft: 1,
    marginRight: 1,
    marginTop: 3,
    borderRadius: 6,
    borderWidth: 2,
    padding: 8,
    alignContent: "center",
  },
  titulo:{
    fontSize: 15,
    fontWeight: 'bold',
    padding: "30px",
    color: "white",
    justifyContent: 'center'
  },
  tituloItem: {
    fontSize: 9,
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,
    color: "#beabcd"
  },
  textoItem:{
      fontSize: 10,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12
  },
  textoResumo:{
      fontSize: 11,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      fontWeight: "bold",
      marginTop: 12
  },
});