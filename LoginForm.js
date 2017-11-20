import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// PUT THIS AT THE TOP NEXT TO YOUR REACT IMPORTS
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {  graphql } from 'react-apollo'
import gql from 'graphql-tag'

import MainPage from "./MainPage"
import MainPageGuest from "./MainPageGuest"

//export default
class LoginForm extends React.Component{

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
    };
  }

  CreateUser = async () =>{
    console.log(this.state.username)
    await this.props.createUserMutation({variables: { username: this.state.username, password: this.state.password }})
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log("===========> " + error)
      })
      // .catch(function(error)){
      //   console.log("Problem with the create user")
      // }
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAvoidingView behavior = "padding" style={Loginstyles.container}>
        <View style={Loginstyles.logoContainer}>
          <Text style = {Loginstyles.title}>MazuMah</Text>
        </View>
        <View style={Loginstyles.formContainer}>
         <Image
          style={Loginstyles.image}
          //source={require('./MMLogo.png')}
        />
          <TextInput
            placeholder ="Username"
            onChangeText={(username) => this.setState({username})}
            //user = {this.setState.username}
            //username = {this.username}
            placeholderTextColor = "#808080"
            returnKeyType = "next"
            style = {Loginstyles.input}
            onSubmitEditing={() => this.pwInput.focus()}
            />

          <TextInput
            placeholder ="Password"
            onChangeText={(password) => this.setState({password})}
            //password = {this.password}
            password = {this.setState.password}
            placeholderTextColor = "#808080"
            secureTextEntry={true}
            returnKeyType = "go"
            style = {Loginstyles.input1}
            ref= {(input) => this.pwInput = input}
            />

          <View style={Loginstyles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('MainPage')}
              title="Login"
              color= "#D3A15D"
            />
           </View>
           <View style={Loginstyles.buttonContainer}>
           <Button
             onPress={
               () => this.CreateUser()}
             title="Create Account"
             color= "#D3A15D"
           />
           </View>
           <View style={Loginstyles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('MainPageGuest')}
              title="Continue Without Account"
              color= "#D3A15D"
            />
           </View>
          </View>
      </KeyboardAvoidingView>
    );

  }

}

const loginMutation = gql`
mutation loginMutation($username: String!, $password: String!) {
  signinUser(auth: {
    username: $username
    password: $password
  }) {
    token
    user {
      id
      username
    }
  }
}`
const createUserMutation = gql`
mutation createUserMutation($username: String!, $password: String!) {
  createUser(
    authProvider: {
    username: $username
    password: $password
  }) {
    username
    password
    }
  }`

export default graphql(createUserMutation)(LoginForm)


const Loginstyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000'
  },
  image:{
     width: 360,
     height: 300,
     top: -80
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 150,
    paddingLeft: 300,
  },
  title:{
    color: '#D3A15D',
    //textAlign: 'center',
    fontFamily: 'Courier New',
    width: 478,
    fontWeight: 'bold',
    fontSize: 40,
    top: -80
  },
  input:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 15,
    height: 40,
    top: -80,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  input1:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 15,
    height: 40,
    top: -80,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  submitForm:{
    color: 'black',
    width: 150
  },
  buttonContainer:{
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 60,
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D',
  },
  buttonContainer1:{
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 60,
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D'
  },
  contNoAccount:{
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D'
  },
  buttonText:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  buttonText1:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  buttonText2:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  }
})
