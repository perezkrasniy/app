import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import DL from './3_DL';
import WhereToSpend from './3.e_WhereToSpend';

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };
    this._WhatIsIt = this._WhatIsIt.bind(this);
    this._HowToEarn = this._HowToEarn.bind(this);
    this._WhereToSpend = this._WhereToSpend.bind(this);
  }

  _WhatIsIt(){
    Alert.alert('Что это?', '')
  }
  _HowToEarn(){
    Alert.alert('Как заработать?', '')
  }
  _WhereToSpend(){
    Actions.push("wheretospend");
  }  

  render() {
    return (
      <View style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}>
        <Button
          title = {"Что это?"}
          onPress = {this._WhatIsIt}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
        <Button
          title = {"Как заработать?"}
          onPress = {this._HowToEarn}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
          title = {"На что потратить?"}
          onPress = {this._WhereToSpend}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});