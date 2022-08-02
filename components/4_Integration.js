// only for new workers
//give all integration list and show them statusimport * as React from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';

export default class Integration extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      username: 'Nikita',

    };
  }

  render() {
    return (
      <View style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}>
          <Text>
            Привет, {this.state.username}. 
          </Text>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._aboutcompany}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._corporization}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._safety}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
          
            onPress = {this._86}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._87_88_89}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._ecom}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._accept}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
          <Button
            onPress = {this._send}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            onPress = {this._qualitycontrol}
            title = {" "}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});