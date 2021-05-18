import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
             <Text style = {{fontSize: 24, margin: 15}}>Login</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               autoCapitalize = "none"
               autoFocus = 'true'
               
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               autoCapitalize = "none"
               selectTextOnFocus = 'true'
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      textAlign: "center",
      margin: 180,

   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      letterSpacing: 1,
      textAlign: 'center'

   },
   submitButton: {
      backgroundColor: '#B284BE',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
    
   }
})