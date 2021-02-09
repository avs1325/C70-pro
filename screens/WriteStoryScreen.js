import React from 'react';
import { StyleSheet, Text, View, Header, TextInput } from 'react-native';
import { max } from 'react-native-reanimated';

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
          style={styles.inputBox}
          //onChangeText={}
          placeholder={"Story Style"}
          //value = {}
        />
        <TextInput 
          style={styles.inputBox}
          //onChangeText={}
          placeholder={"Author"}
          //value = {}
        />
        <TextInput 
          style={styles.storyInputBox}
          //onChangeText={}
          placeholder={"Write your story here!"}
          multiline = {true}
          //value = {}
        />
        <TouchableOpacity 
          style= {styles.submitButton} 
        >
          <Text style= {styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  inputBox:{
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10
  },
  storyInputBox:{
    width: 300,
    height: 350,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
  submitButton:{
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50
  },
  submitButtonText:{
    padding:10,
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    color: "white"
  }
});
