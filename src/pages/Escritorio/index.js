import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';




export default function Tecnologia() {
  const navigation = useNavigation();
  const [nome, setNome] = useState()
  const [input, setInput] = useState()
  const [list, setList] = useState([]);
  const [data, setData] = useState('');
  useEffect( () => {
    const recuperarNome = async () => {
      const nomeItem = await AsyncStorage.getItem('nome')
      setNome(nomeItem)    
    };


    recuperarNome();
  }, []);


  const gravaNome = async () => {
    setNome(input)
    await AsyncStorage.setItem('nome', input);
    Keyboard.dismiss();
    setList((prevList) => [...prevList, input]);
    setData('');
    alert('Salvo com sucesso!');
  }

  const excluiNome = async () => {
    
    setList((prevList) => prevList.slice(0, -1));
    setData('');
    alert('Excluido com sucesso!');
  }

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>ESTOQUE ESCRITÓRIO</Text>



      <View style={styles.viewInput}>
        <TextInput
        style={styles.input}
        value={input}
        onChangeText={(texto) => setInput(texto)}
        underlineColorAndroid="transparent"
        />




        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botaoAdd}>+</Text>
        </TouchableOpacity>
      </View>


      <FlatList 
       data={list} 
       renderItem={({item}) =>
        <View style={styles.lista}>
          <Text style={styles.nome}>{item}</Text>
        </View>
       }
      />

      <TouchableOpacity onPress={excluiNome}>
        <Text style={styles.botaoExclui}>Excluir</Text>
      </TouchableOpacity>

      </View>    
    )




  }



const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botaoAdd:{
    backgroundColor: 'green',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  botaoExclui:{
    backgroundColor: 'red',
    color: '#FFF',
    height: 40,
    width: 100,
    padding: 10,
    marginLeft: 4,
    textAlign: 'center',
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
    
  },
  titulo:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  lista:{
    backgroundColor: 'grey',
    height: 80,
    width: 300,
    margin: 10,
    color: 'white',
    
  }
});

