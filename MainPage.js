
import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// PUT THIS AT THE TOP NEXT TO YOUR REACT IMPORTS
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { gql, graphql } from 'react-apollo'
import { VictoryLabel, VictoryAxis, VictoryLine, VictoryChart } from "victory-native"


import Profile from "./Profile"



const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
export default class MainPage extends React.Component{
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={MainStyle.pageContainer}>
          <View style={MainStyle.topContainer}>
            <Text style = {MainStyle.title}>Welcome To Your Dashboard!</Text>
              <View style={MainStyle.profileButton}>
              <Button 
                onPress={() => this.props.navigation.navigate('Profile')}
                title="See Your Profile >"
                color= "#D3A15D"
              />
              </View>
          </View>
          <View style={MainStyle.midContainer}>
            <Text style={MainStyle.graphTitle}> Owner Metrics</Text>
            <Image
             style={MainStyle.image}
      //       source={require('./coindesk-bpi-chart.png')}
           /> 
          <View style={MainStyle.lineGraph}>
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "2px solid #FFFFFF"}
              }}
      
              data={[
                { y: 0.0, x: 0.0 },
                { y: 0.34, x: 1.0},
                { y: 3.48, x: 10.0},
                { y: 7.39, x: 20.0 },
                { y: 12.0, x: 30.0 },
                { y: 17.5, x: 40.0},
                { y: 24.8, x: 50.0 },
                { y: 33.5, x: 60.0 },
                { y: 43.3, x: 70.0 },
                { y: 54.9, x: 80.0 },
                { y: 70.8, x: 90.0 },
                { y: 100.0, x: 100.0 },
              ]}
            />
          </VictoryChart>
          
          </View>
          </View>
          <View style={MainStyle.botContainer}>
            <Text style={MainStyle.botTitle}>24-Hour Pricing($)</Text>
            <Text style={MainStyle.botTitle}>Current Price: 7960.65</Text>
            <Text style={MainStyle.botTitle}>Highest Price: 8107.76</Text>
            <Text style={MainStyle.botTitle}>Lowest Price: 7673.37</Text>
          </View>
      </View>

    );
  }
}

const MainStyle = StyleSheet.create({
  pageContainer:{
    flex:1
  },
  title:{
    color: '#D3A15D',
    fontSize: 25, 
    fontWeight: 'bold',
    fontFamily: 'Courier New', 
    top: 70,
    textAlign:'center',
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
    paddingBottom: 250,

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
    fontFamily: 'Courier New'
  },
  botTitle:{
    paddingTop:10,
    color: '#D3A15D',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 90,
    fontFamily: 'Courier New'
  },
  profileButton:{
    top: -50,
    left: 100,
  },
  lineGraph:{
    top: -270,
  },
  yAxis:{
    top: -120,
  }


})
