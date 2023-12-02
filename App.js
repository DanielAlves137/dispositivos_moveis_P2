import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import Tecnologia from './src/pages/Tecnologia';
import Limpeza from './src/pages/Limpeza';
import Escritorio from './src/pages/Escritorio';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Tecnologia:{
    name: 'desktop',
  },
  Limpeza:{
    name: 'water',
  },
  Escritorio:{
    name: 'create',
  }
}

function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      
      >
        <Tab.Screen name='Tecnologia' component={Tecnologia} />
        <Tab.Screen name='Limpeza' component={Limpeza} />
        <Tab.Screen name='Escritorio' component={Escritorio} />
      </Tab.Navigator>
  );
}


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tecnologia" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Limpeza" component={Limpeza} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

