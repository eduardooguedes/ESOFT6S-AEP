import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import Notificacoes from './pages/Notificacoes/Notificacoes';
import ItemNotificacao from './components/ItemNotificacao';
import Notificacao from './pages/Notificacoes/Notificacao';
import Relatorio from './pages/Relatorio/Relatorio';
import Gravacoes from './pages/Gravacoes/Gravacoes';
import Cameras from './pages/Cameras/Cameras';

import {Entypo, Feather} from '@expo/vector-icons';

const TabBottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const NotificacoesNavegador = () => {
  return (
    <Stack.Navigator  
          initialRouteName="Notificacoes">
        <Stack.Screen
          name="Notificacao"
          component={Notificacao}
        />
        <Stack.Screen
          name="ItemNotificacao"
          component={ItemNotificacao}
        />
        <Stack.Screen 
          name="Notificacoes"
          component={Notificacoes}
        />
    </Stack.Navigator>
  );
}

export default function Routes(){
  return(
    <TabBottom.Navigator
        tabBarOptions={{
          style:{
            backgroundColor: '#121212',
            borderTopColor: 'transparent',
          },
          activeTintColor: '#B22222',
          inactiveTintColor: "#2b2340",
          tabStyle:{
            paddingBottom: 5,
            paddingTop: 5,
          },
        }}
        screenOptions={{ headerShown: false }}>
      <TabBottom.Screen 
        name="Notificacoes" 
        component={NotificacoesNavegador} 
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
