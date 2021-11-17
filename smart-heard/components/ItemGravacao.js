import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Entypo, Feather} from '@expo/vector-icons';

export default function ItemGravacao(props){  

  return (
    <View style={styles.barracao}>
        <Text style={styles.tituloFrequencia}>{props.tituloFrequencia}</Text>
        
        {props.itens.map(item => 
          <View style={styles.itemDeFrequencia}>
            <View style={{flexDirection: "column"}}>
                <Text>{item.dataHora}</Text>
                <Text style={{fontWeight: 'bold'}}>({item.animal})</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <Image
                source={{
                  height: 15,
                  width: 40,
                  uri: 'https://cdn.pixabay.com/photo/2016/10/29/20/58/sound-1781570_960_720.png',
                }}
              />
              <Entypo 
              name="controller-play" 
              size={{width: 10, height: 10}} 
              color={{color: ""}} />
            </View>
          </View>  
        )}
    </View>
  );
}


const styles = StyleSheet.create({
  itemDeFrequencia: {
    height: 40,
    backgroundColor: '#53496c',
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 0.8,
    borderRadius: 6,
    borderWidth: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: "row",
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
  tituloFrequencia: {
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    fontWeight: 'bold',
    fontSize: 12,
    color: "#dfdee2"
  },
});