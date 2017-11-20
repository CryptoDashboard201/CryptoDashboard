
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
  getInitialState() {
    return {
      groupTypes: 'SavedPhotos',
      sliderValue: 1,
      bigImages: true,
    };
  }
  render() {
    return (
        <View style={Profilestyles.logoContainer}>
          <Text style={Profilestyles.title}>Welcome To Your Profile!</Text>
        </View>
    );
  }
}

const Profilestyles = StyleSheet.create({
  logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: 20,

  },
  title:{
      textAlign: 'center',
      fontFamily: 'Courier New',
      width: 300,
      fontWeight: 'bold',
      fontSize: 30,


  }


})
