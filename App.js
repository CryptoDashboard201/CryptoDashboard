
'use strict'
import React, {Component, PropTypes} from 'react';
import { VictoryBar } from "victory-native";
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

// PUT THIS AT THE TOP NEXT TO YOUR REACT IMPORTS
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {  graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import { NavigatorIOS, Text } from 'react-native';

//import {Actions, ActionConst, Scene, Router} from 'react-native-router-flux'

import LoginForm from './LoginForm'
import MainPage from './MainPage'
import MainPageGuest from './MainPageGuest'
import Profile from './Profile'



// LINKING TO THE BACKEND (STILL NEEDS MODIFICATION)
// const networkInterface = createBatchingNetworkInterface({
//   // BACKEND ENDPOINT
//   uri: 'http://0.0.0.0:8080/graphql/',
//   batchInterval: 10,
//   opts: {
//     credentials: 'same-origin',
//   },
// })
// CREATING THE APOLLO CLIENT
const client = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  })
  const client = new ApolloClient({
    networkInterface
  });
  return (
    <ApolloProvider client={client}>
      <SimpleApp />
    </ApolloProvider>)
}
// export default class App extends React.Component {
//
//   // export default graphql(loginMutation, {name: 'loginMutation'})(
//   //   graphql(createUserMutation, {name: 'createUserMutation'})(LoginScreen)
//
//   render() {
//     return (
//         <SimpleApp />
//     )
//   }
// }
// const scenes = Actions.create(
//     <Scene keys = 'root'>
//       <Scene key = 'LoginPage'
// )
export default SimpleApp = StackNavigator ({
  LoginForm: { screen: LoginForm },
  MainPage: { screen: MainPage },
  MainPageGuest: { screen: MainPageGuest },
  Profile: { screen: Profile },
});


// // WRAPS THE REACT COMPONENT
// class LoginScreen extends React.Component{
//
//   constructor(){
//     super()
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
//
//   CreateUser = async () =>{
//     console.log(this.state.username)
//     await this.props.loginMutation({
//       variables: {
//         username: this.state.username,
//         password: this.state.password
//       }
//     })
//   }
//
//   render(){
//     const { navigate } = this.props.navigation;
//     return(
//       <KeyboardAvoidingView behavior = "padding" style={Loginstyles.container}>
//         <View style={Loginstyles.logoContainer}>
//           <Text style = {Loginstyles.title}>MazuMah</Text>
//         </View>
//         <View style={Loginstyles.formContainer}>
//          <Image
//           style={Loginstyles.image}
//           source={require('./MMLogo.png')}
//         />
//           <TextInput
//             placeholder ="Username"
//             onChangeText={(username) => this.setState({username})}
//             //user = {this.setState.username}
//             //username = {this.username}
//             placeholderTextColor = "#808080"
//             returnKeyType = "next"
//             style = {Loginstyles.input}
//             onSubmitEditing={() => this.pwInput.focus()}
//             />
//
//           <TextInput
//             placeholder ="Password"
//             onChangeText={(password) => this.setState({password})}
//             //password = {this.password}
//             password = {this.setState.password}
//             placeholderTextColor = "#808080"
//             secureTextEntry={true}
//             returnKeyType = "go"
//             style = {Loginstyles.input1}
//             ref= {(input) => this.pwInput = input}
//             />
//
//           <View style={Loginstyles.buttonContainer}>
//             <Button
//               onPress={() => navigate('Dashboard')}
//               title="Login"
//               color= "#D3A15D"
//             />
//            </View>
//            <View style={Loginstyles.buttonContainer}>
//            <Button
//              onPress={() => this.CreateUser}
//              title="Create Account"
//              color= "#D3A15D"
//            />
//            </View>
//            <View style={Loginstyles.buttonContainer}>
//             <Button
//               onPress={() => navigate('Dashboard2')}
//               title="Continue Without Account"
//               color= "#D3A15D"
//             />
//            </View>
//           </View>
//       </KeyboardAvoidingView>
//     );
//
//   }
//
// }
//
//
// // const createUserResponse = graphql(loginMutation, {
// //   options: {
// //     variables: {
// //       name:
// //       password:
// //     }
// //   }
// // })(LoginScreen)
// // const loginResponse = graphql(createUserMutation, {
// //   options: {
// //     variables: {
// //       name:
// //       password:
// //     }
// //   }
// // })(LoginScreen)
// // static propTypes = {
// // data: React.PropTypes.shape({
// //   loading: React.PropTypes.bool,
// //   error: React.PropTypes.object,
// //   user: React.PropTypes.object,
// // }).isRequired,
// // }
// const loginMutation = gql`
// mutation loginMutation($username: String!, $password: String!) {
//   signinUser(auth: {
//     username: $username
//     password: $password
//   }) {
//     token
//     user {
//       id
//       username
//     }
//   }
// }`
// const createUserMutation = gql`
// mutation createUserMutation($username: String!, $password: String!) {
//   createUser(auth: {
//     username: $username
//     password: $password
//   }) {
//     user {
//       id
//       username
//     }
//   }
// }`
// class MainScreen2 extends React.Component{
//   static navigationOptions = {
//     title: 'Guest Dashboard',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={MainStyle.pageContainer}>
//           <View style={MainStyle.topContainer}>
//             <Text style = {{color: 'white', textAlign: 'center'}}>Welcome!</Text>
//           </View>
//           <View style={MainStyle.midContainer}>
//             <Text style={MainStyle.graphTitle}> Owner Metrics</Text>
//             <Image
//              style={MainStyle.image}
//              source={require('./coindesk-bpi-chart.png')}
//            />
//           </View>
//           <View style={MainStyle.botContainer}>
//             <Text style={MainStyle.botTitle}>Price:</Text>
//             <Text style={MainStyle.botTitle}># of Miners:</Text>
//             <Text style={MainStyle.botTitle}># of Commits:</Text>
//             <Text style={MainStyle.botTitle}># of Clients:</Text>
//           </View>
//       </View>
//
//     );
//   }
// }
//
// class MainScreen extends React.Component{
//   static navigationOptions = {
//     title: 'Dashboard',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={MainStyle.pageContainer}>
//           <View style={MainStyle.topContainer}>
//             <Text style = {{color: 'white', textAlign: 'center'}}>Welcome To Your Dashboard</Text>
//               <Button
//                 onPress={() => navigate('Profile')}
//                 title="See Your Profile"
//                 color= "#D3A15D"
//               />
//           </View>
//           <View style={MainStyle.midContainer}>
//             <Text style={MainStyle.graphTitle}> Owner Metrics</Text>
//             <Image
//              style={MainStyle.image}
//              source={require('./coindesk-bpi-chart.png')}
//            />
//           </View>
//           <View style={MainStyle.botContainer}>
//             <Text style={MainStyle.botTitle}>Price:</Text>
//             <Text style={MainStyle.botTitle}># of Miners:</Text>
//             <Text style={MainStyle.botTitle}># of Commits:</Text>
//             <Text style={MainStyle.botTitle}># of Clients:</Text>
//           </View>
//       </View>
//
//     );
//   }
// }
//
// class ProfileScreen extends React.Component{
//   static navigationOptions = {
//     title: 'Profile Page',
//   };
//   getInitialState() {
//     return {
//       groupTypes: 'SavedPhotos',
//       sliderValue: 1,
//       bigImages: true,
//     };
//   }
//   render() {
//     return (
//         <View style={Profilestyles.logoContainer}>
//           <Text style={Profilestyles.title}>Welcome To Your Profile!</Text>
//         </View>
//     );
//   }
// }
//
// export const SimpleApp = StackNavigator ({
//   Login: { screen: LoginScreen },
//   Dashboard: { screen: MainScreen },
//   Dashboard2: { screen: MainScreen2 },
//   Profile: { screen: ProfileScreen },
// });
//

//
// AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
//
// //STYLESHEETS
//
// const Loginstyles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#000000'
//   },
//   image:{
//      width: 360,
//      height: 300,
//      top: -80
//   },
//   logoContainer:{
//     alignItems: 'center',
//     flexGrow: 1,
//     paddingTop: 150,
//     paddingLeft: 300,
//   },
//   title:{
//     color: '#D3A15D',
//     //textAlign: 'center',
//     fontFamily: 'Courier New',
//     width: 478,
//     fontWeight: 'bold',
//     fontSize: 40,
//     top: -80
//   },
//   input:{
//     borderRadius: 10,
//     marginRight: 60,
//     marginLeft: 60,
//     marginBottom: 15,
//     height: 40,
//     top: -80,
//     backgroundColor: 'rgba(255,255,255,.7)'
//   },
//   input1:{
//     borderRadius: 10,
//     marginRight: 60,
//     marginLeft: 60,
//     marginBottom: 15,
//     height: 40,
//     top: -80,
//     backgroundColor: 'rgba(255,255,255,.7)'
//   },
//   submitForm:{
//     color: 'black',
//     width: 150
//   },
//   buttonContainer:{
//     alignItems: 'center',
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//     paddingLeft: 50,
//     paddingRight: 60,
//     marginBottom: 10,
//     marginTop: 10,
//     top: -80,
//     // borderWidth: 1,
//     borderColor: '#D3A15D',
//   },
//   buttonContainer1:{
//     alignItems: 'center',
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//     paddingLeft: 50,
//     paddingRight: 60,
//     marginBottom: 10,
//     marginTop: 10,
//     top: -80,
//     // borderWidth: 1,
//     borderColor: '#D3A15D'
//   },
//   contNoAccount:{
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 10,
//     top: -80,
//     // borderWidth: 1,
//     borderColor: '#D3A15D'
//   },
//   buttonText:{
//     color: '#D3A15D',
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//   },
//   buttonText1:{
//     color: '#D3A15D',
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//   },
//   buttonText2:{
//     color: '#D3A15D',
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//   }
// })

//
//
//
// const MainStyle = StyleSheet.create({
//   pageContainer:{
//     flex:1
//   },
//   image:{
//     resizeMode: 'contain',
//     width: 380,
//     height: 300,
//   },
//   topContainer:{
//     flex: 1,
//     flexDirection: 'column',
//     width:375,
//     height: 50,
//     backgroundColor: 'black'
//   },
//   midContainer:{
//     flex: 1,
//     flexDirection: 'column',
//     width:375,
//     backgroundColor: 'grey',
//     paddingBottom: 250
//   },
//   botContainer:{
//     flex: 1,
//     flexDirection: 'column',
//     width:375,
//     height: 50,
//     backgroundColor: 'black',
//   },
//   graphTitle:{
//     color: '#D3A15D',
//     paddingLeft: 80,
//     fontWeight: 'bold',
//     fontSize: 25,
//   },
//   botTitle:{
//     paddingTop:10,
//     color: '#D3A15D',
// //    fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     paddingLeft: 90
//   }
// })
//
//
// const Profilestyles = StyleSheet.create({
//   logoContainer:{
//       alignItems: 'center',
//       flexGrow: 1,
//       paddingTop: 20,
//
//   },
//   title:{
//       textAlign: 'center',
//       fontFamily: 'Courier New',
//       width: 300,
//       fontWeight: 'bold',
//       fontSize: 30,
//
//
//   }
//
//
// })
