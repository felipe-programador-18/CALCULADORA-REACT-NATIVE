import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(){
   const [display, setDisplay]= useState('') 
   const [result, setResult]= useState('')
   
   const Handleop = (op) =>{
     if(op === 'C'){
       setDisplay({
         display:'',
         result:''
       })
     } else if(op === '=' ){
      setDisplay(display),
      setResult(result)

     } else{
       const display=  display+op
       let result = result
        try{
          let FixedOp = display.splint('x').join('*')
          FixedOp = FixedOp.splint('÷').join('/')
          result = new String(eval(FixedOp)).toString()
        }catch(e){}  
        
      setDisplay(display)
      setResult(result)
     }

    
   
   }

  const Col1buttons = [
    ['7', '8', '9'],
    ['4','5','6'],
    ['3', '2', '1'],
    [',', '0', '=']
  ]
  const Col2Buttons = ['C','÷','x','+','-']
  return (
    <View style={styles.container}>
      
      <Text style={styles.display} > {display} </Text>
      <Text style={styles.result}> {result} </Text>

      <View style={styles.buttons}>
         <View style={styles.col1}>
          {Col1buttons.map( (line, ind) => <View key={ind} style={styles.line}>
            
            { line.map(op => <TouchableOpacity key={op} style={styles.btn} onPress= {()=> Handleop(op)} >
              
              <Text style={styles.btnText} >
              {op} 
              </Text>
              
              </TouchableOpacity>)
            }
            </View>
            )}

         </View>

         <View style={styles.col2}>
         { Col2Buttons.map(op => <TouchableOpacity key={op} style={styles.btn} onPress= {()=> Handleop(op)} >
          <Text style={styles.btnText} >
          {op} 
          </Text>
          
          </TouchableOpacity>)
        }
         </View>
      </View>
    
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
