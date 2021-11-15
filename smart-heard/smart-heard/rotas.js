import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Notificacoes from './pages/Notificacoes/Notificacoes';
import Relatorio from './pages/Relatorio/Relatorio';
import Gravacoes from './pages/Gravacoes/Gravacoes';
import Cameras from './pages/Cameras/Cameras';

import {Entypo, Feather} from '@expo/vector-icons';

const TabBottom = createBottomTabNavigator();

export default function Routes(){
  return(
    <TabBottom.Navigator
    tabBarOptions={{
      style:{
        backgroundColor: '#121212',
        borderTopColor: 'transparent',
      },
      activeTintColor: '#B22222',
      tabStyle:{
        paddingBottom: 5,
        paddingTop: 5,
      },
    }}
    >
      <TabBottom.Screen 
        name="Notificacoes" 
        component={Notificacoes} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather 
            name="bell" 
            size={size} 
            color={color} />
          )
        }}/>

      <TabBottom.Screen 
        name="Relatorio" 
        component={Relatorio} 
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo 
            name="bar-graph" 
            size={size} 
            color={color} />
          )
        }}
          />
      <TabBottom.Screen 
      name="Cameras" 
      component={Cameras} 
      options={{
          tabBarIcon: ({size, color}) => (
            <Entypo 
            name="video-camera" 
            size={size} 
            color={color} />
          )
        }}/>
      <TabBottom.Screen 
      name="Gravacoes"
      component={Gravacoes} 
      options={{
          tabBarIcon: ({size, color}) => (
            <Entypo 
            name="mic" 
            size={size} 
            color={color} />
          )
        }}/>
    </TabBottom.Navigator>
  );
}
