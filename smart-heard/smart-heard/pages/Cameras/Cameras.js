import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


export default function Cameras(){
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>CAMERAS</Text>
      <View style={styles.camera}>
        <View style={styles.tituloCamera}>
          Câmera 1
        </View>
        <View style={styles.filmagem}>  
        <iframe src="https://www.youtube.com/embed/440P8TTyJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        width="230" 
        height="130">
        </iframe>
        </View>
      </View>
      <View style={styles.camera}>
        <View style={styles.tituloCamera}>
          Câmera 2
        </View>
        <View style={styles.filmagem}>
        <iframe src="https://www.youtube.com/embed/440P8TTyJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        width="230" 
        height="130">
        </iframe>
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
  camera: {
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
  tituloCamera: {
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  filmagem: {
    width: 250,
    height: 150,
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