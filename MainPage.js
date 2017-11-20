
import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// PUT THIS AT THE TOP NEXT TO YOUR REACT IMPORTS
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { gql, graphql } from 'react-apollo'

import Profile from "./Profile"

export default class MainPage extends React.Component{
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={MainStyle.pageContainer}>
          <View style={MainStyle.topContainer}>
            <Text style = {{color: 'white', textAlign: 'center'}}>Welcome To Your Dashboard</Text>
              <Button
                onPress={() => this.props.navigation.navigate('Profile')}
                title="See Your Profile"
                color= "#D3A15D"
              />
          </View>
          <View style={MainStyle.midContainer}>
            <Text style={MainStyle.graphTitle}> Owner Metrics</Text>
            <Image
             style={MainStyle.image}
      //       source={require('./coindesk-bpi-chart.png')}
           />
          </View>
          <View style={MainStyle.botContainer}>
            <Text style={MainStyle.botTitle}>Price:</Text>
            <Text style={MainStyle.botTitle}># of Miners:</Text>
            <Text style={MainStyle.botTitle}># of Commits:</Text>
            <Text style={MainStyle.botTitle}># of Clients:</Text>
          </View>
      </View>

    );
  }
}

const MainStyle = StyleSheet.create({
  pageContainer:{
    flex:1
  },
  image:{
    resizeMode: 'contain',
    width: 380,
    height: 300,
  },
  topContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    height: 50,
    backgroundColor: 'black'
  },
  midContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    backgroundColor: 'grey',
    paddingBottom: 250
  },
  botContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    height: 50,
    backgroundColor: 'black',
  },
  graphTitle:{
    color: '#D3A15D',
    paddingLeft: 80,
    fontWeight: 'bold',
    fontSize: 25,
  },
  botTitle:{
    paddingTop:10,
    color: '#D3A15D',
//    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 90
  }
})
