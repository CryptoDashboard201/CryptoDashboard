
import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// PUT THIS AT THE TOP NEXT TO YOUR REACT IMPORTS
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {  graphql } from 'react-apollo'
import gql from 'graphql-tag'

export default class Profile extends React.Component{
  static navigationOptions = {
    title: 'Profile Page',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Your Profile!</Text>
        <Text style={styles.notifText}>Notification{"\n"}Preferences($)</Text>
         <TextInput style={styles.notifInput}
              editable = {true}
              maxLength = {3}
              keyboardType = 'numeric'
          />
          <View style={styles.buttonContainer}>
           <TouchableOpacity >
              <Text style={styles.setButton}>Set</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Image 
          style={styles.image}
          source={require('./ProfileImage.png')} />
          </TouchableOpacity>
          <Text style={styles.username}>Username: TommyTrojan</Text>
          <Text style={styles.messageTitle}>Contact Us!</Text>
          <View style={styles.buttonContainer1}>
          <TextInput style={styles.messageInput}
              editable = {true}
              maxLength = {300}
              multiline = {true}
          />
          <TouchableOpacity>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
          </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily: "Courier New",
    fontWeight: 'bold',
    color: '#D3A15D',
    fontSize: 25,
    top: -80,
  },
  notifText:{
    color: '#FFFFFF',
    fontFamily: "Courier New",
    top: 155,
    fontWeight: 'bold',
    width: 300,
    left: 5,
    fontSize: 20
  },
  notifInput:{
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor:  '#FFFFFF',
    width: 80,
    height: 30,
    paddingLeft: 10,
    top: 118,
    left: 90
  },
  buttonContainer:{
    top: 150,
    left: 160,
    borderWidth: 1,
    width: 50,
    alignSelf: 'stretch',
  },
  image:{
    width: 120,
    height: 120,
    top: -150,
    borderRadius: 1,
  },
  username:{
    color: '#FFFFFF',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    fontSize: 20,
    right: 20,
    top: -130
  },
  setButton:{
    color: '#D3A15D',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  logoutButton:{
    color: '#D3A15D',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#D3A15D',
    textAlign: 'center',
    width: 100,
    height: 40,
    top: 100,
    paddingTop: 8,
    left: 100,
    alignItems: 'center'
  },
  messageTitle:{
    color: '#FFFFFF',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    right: 100,
    fontSize: 15,
    top: 35
  },
  messageInput:{
    color: '#D3A15D',
    fontSize: 15,
    borderWidth: 1,
    borderColor:  '#FFFFFF',
    right: 3,
    top: 45,
    width: 300,
    height: 150,
    paddingLeft: 2,
    textAlignVertical: 'top',
  },
  submitButton:{
    color: '#D3A15D',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    fontSize: 15,
    top: 55,
    textAlign: 'center'
  }

})
