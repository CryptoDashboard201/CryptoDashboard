
import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


class LoginScreen extends React.Component{
  static navigationOptions = {
    title: 'MazuMah'
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style = {styles.title}>MazuMah</Text>
        </View>
        <View style={styles.formContainer}>
         <Image
         
          style={styles.image}
          source={require('./MMLogo.png')}
        />
          
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
            secureTextEntry={true}
            returnKeyType = "go"
            style = {styles.input1}
            ref= {(input) => this.pwInput = input}
            />

          <View style={styles.buttonContainer}>

            <Button
              onPress={() => navigate('Profile')}
              title="Login"
              color= "#D3A15D"
            />
           </View>
           <View style={styles.buttonContainer}>

            <Button
              onPress={() => navigate('Profile')}
              title="Create Account"
              color= "#D3A15D"
            />
           </View>
           <View style={styles.buttonContainer}>

            <Button
              onPress={() => navigate('Profile')}
              title="Continue Without Account"
              color= "#D3A15D"
            />
           </View>
           </View>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
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

class ProfileScreen extends React.Component{
  static navigationOptions = {
    title: 'Profile Page',
  };
  render() {
    return (
      <View>
        <Text>Welcome To Your Profile Page</Text>
      </View>
    );
  }


}

export const SimpleApp = StackNavigator ({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends React.Component {

  render() {
    return <SimpleApp />;
  }

}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);



