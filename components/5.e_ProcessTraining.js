import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, WebView, Linking } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';

export default class ProcessTraining extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };

  }


  render() {
    return (
      <View style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}>
        <Button
            onPress = {this._86}
            title = {""}
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            title = {""}
            onPress={() =>
            Linking.openURL(
              ''
            )
            }
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            title = {""}
            onPress={() =>
            Linking.openURL(
              ''
            )
            }
          />
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Button
            title={''}
            onPress={() =>
            Linking.openURL(
              ''
            )
            }
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