import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Login extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style = {styles.title}>201 CryptoDashboard</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder ="Username"
            placeholderTextColor = "#808080"
            returnKeyType = "next"
            style = {styles.input}
            onSubmitEditing={() => this.pwInput.focus()}
            />
          <TextInput
            placeholder ="Password"
            placeholderTextColor = "#808080"
            returnKeyType = "go"
            style = {styles.input1}
            ref= {(input) => this.pwInput = input}
            />
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style = {styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style = {styles.contNoAccount}>
            <Text style = {styles.buttonText}>Continue without account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 150,
    paddingLeft: 300,
  },
  title:{
    color: '#9400d3',
    width: 600,
    fontWeight: 'bold',
    fontSize: 20
  },
  input:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 20,
    height: 40,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  input1:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 15,
    height: 40,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  submitForm:{
    color: 'black',
    width: 150
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 50,
  },
  contNoAccount:{
    alignItems: 'center',
    marginBottom: 100
  },
  buttonText:{
    color: 'purple'
  }
})
