// calendar with all training'simport * as React from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, WebView } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import AboutCompany from './5.a_AboutCompany';
import Corporization from './5.b_Corporization';
import Safety from './5.c_Safety';
import Ecology from './5.d_Ecology';
import ProcessTraining from './5.e_ProcessTraining';

export default class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };
    this._aboutCompany = this._aboutCompany.bind(this);
    this._corporatization = this._corporatization.bind(this);
    this._safety = this._safety.bind(this);
    this._ecology = this._ecology.bind(this);
    this._processTraining = this._processTraining.bind(this);
  }

  _aboutCompany(){
    Actions.push("aboutcompany");
  }
  _corporatization(){
    Actions.push("corporization");
  }
  _safety(){
    Actions.push("safety");
  }
  _ecology(){
    Actions.push("ecology");
  }
  _processTraining(){
    Actions.push("processtraining");
  }

  render() {
    return (
      <View style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}>
        <Button
        onPress = {this._aboutCompany}
        title = {"О компании"}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
        onPress = {this._corporatization}
        title = {"Акционирование"}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
        onPress = {this._safety}
        title = {"Безопасность"}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
        onPress = {this._ecology}
        title = {"Экология"}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
        onPress = {this._processTraining}
        title = {"Тренинги по процессам"} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
