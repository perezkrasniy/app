// leadtime, e-com and another resultsimport * as React from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import Leadtime from './7.a_Leadtime';
import Ecom from './7.b_Ecom';
import TurnOver from './7.c_TurnOver';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };
    this._leadtimeScene = this._leadtimeScene.bind(this);
    this._ecomScene = this._ecomScene.bind(this);
    this._turnoverScene = this._turnoverScene.bind(this);
  }
  _leadtimeScene(){
    Actions.push("leadtime");
  }
  _ecomScene(){
    Actions.push("ecom");
  }
  _turnoverScene(){
    Actions.push("turnover");
  }


  render() {
    return (
      <View  style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}>
        <Button
          title = {"Leadtime"}
          onPress = {this._leadtimeScene}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button 
          title = {"E-commerce"}
          onPress = {this._ecomScene}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button 
          title = {"Turnover"}
          onPress = {this._turnoverScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});