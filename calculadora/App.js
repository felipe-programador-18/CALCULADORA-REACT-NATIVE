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
const Nember = [1,2,3,4,5,6,7,8,9,10]
const Entire =  Nember.map((Nember) =>
   <li> {Nember *20} </li>
)

const Input = ({label,  onChange, ...props}) =>{
   const [value, setvalue] = useState('')
   const onValueChange = evt =>{
     setvalue(evt.target.value)
     if(onChange){
       onChange(evt)
     }
   }
   return (
     <label>
       {label}

       <input onChange={onValueChange} {...props} />
         number of caracteris is : {value.length} 
    
     </label>
   )
}


const interative = ['felipe', 'martins', 'machado', 'programer19']
const Meeting = ['Martins','PROGRAMMER', 'severina','beatriz']
const Pesquisa = ['programamer', 'Mobile', 'front-end','backend']

export default function App(){
  const [form, setform] = useState({
    nome:'',
    email:''
  })
  const onChange = evt=>{
    setform({
      ...form,
       [evt.target.name]: evt.target.value
    })
  }
  
  const [Pe , setpe ] = useState('')
  const [met, setmeet] = useState('')
  const [data, setdata] = useState(Url)
  const [busca, setbusca] = useState('') 

  const Aloof =  Pe.toLowerCase()
  const Diminue = Pesquisa.filter((mao) => mao.toLowerCase().includes(Aloof))

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
      
      <input type='text' value={Pe}  onChange={(ev) => setpe(ev.target.value)} ></input>
      <ul> {Diminue.map((mao) => (
        <li key={mao}> {mao} </li>
      ))}
      </ul>


      <input  type='text' value={met} onChange={(ev) => setmeet(ev.target.value)}  ></input>

      <ul> {Union.map((works)=> (
        <li key={works} > {works}</li>
      ) )}

      </ul>

      <ul> {Entire} </ul>
      <pre>
      Form: {JSON.stringify(form)}
      </pre>

      <Input label='Nome:' name='nome' onChange={onChange} />
      <Input  label='Email:' name='email' onChange={onChange} />
         
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
