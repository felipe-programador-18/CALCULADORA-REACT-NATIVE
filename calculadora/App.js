import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Textindig from './Pensa'
import { StyleSheet, Text, View} from 'react-native';


const Url = 'https://randomuser.me/api/'
const Mapa = [12,12,4324,543,123,543]
const build = Mapa.map((Mapa) => 
 <li>{Mapa *7}</li>
)

const interative = ['felipe', 'martins', 'machado', 'programer19']

const Meeting = ['Martins','PROGRAMMER', 'severina','beatriz']


export default function App(){
  const [met, setmeet] = useState('')
  
  const [data, setdata] = useState(Url)
  const [busca, setbusca] = useState('') 
  const Pensa = busca.toLowerCase()
  const think =  interative.filter((intera) => intera.toLowerCase().includes(Pensa))
  
  // here create cosnt to receive value simplist here
  const receiveUnion = met.toLowerCase()
  const Union = Meeting.filter((works) => works.toLowerCase().includes(receiveUnion))

   useEffect(() =>{
     axios
     .get(Url)
     .then(res =>
      setdata(res.data))
   },[])

  return (
    <View style= {styles.container}>
      <Text> teste api</Text>
      {JSON.stringify(data)}

      <input type='text' value={busca} onChange={(ev) => setbusca(ev.target.value)} ></input>

      <ul> {think.map((intera) => (
          <li key={intera}> {intera} </li>
      ))}

      </ul>

      <ul> {build} </ul>
      
      <input  type='text' value={met} onChange={(ev) => setmeet(ev.target.value)}  ></input>

      <ul> {Union.map((works)=> (
        <li key={works} > {works}</li>
      ) )}

      </ul>




      <Textindig text='could your repeat? please ?' />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display:{
   flex:1,
   backgroundColor:'#EFEFEF',
   fontSize:70,
   textAlign:'right',
   paddingTop:30,
   paddingRight:10
  },

  result:{
   flex:0.4,
   backgroundColor:'#F87676',
   fontSize:40,
   textAlign: 'right',
   paddingBottom:10,
   paddingRight:10
  },
  
  buttons:{
  flex:5,
  flexDirection:'row'
  },
  
  line:{
   flex:1,
   flexDirection:'row'
  },
  btn:{
  flex:1
  },

   btnText:{
     textAlign:'center',
     fontSize:50,
     justifyContent:'center'
   },

  col1:{
    flex:3,
    backgroundColor:'grey'
  },
  col2:{
    flex:1,
    backgroundColor:'#1EF4A2'
  }
});
