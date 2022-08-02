// add button for ALL another scene
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, Alert, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import DL from './3_DL';
import Integration from './4_Integration';
import Training from './5_Training';
import Sport from './6_Sport';
import Results from './7_Results';
import Links from './8_Links';
import Login from './1_Email';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };
    this._dlScene = this._dlScene.bind(this);
    this._integrationScene = this._integrationScene.bind(this);
    this._trainingScene = this._trainingScene.bind(this);
    this._sportScene = this._sportScene.bind(this);
    this._resultsScene = this._resultsScene.bind(this);
    this._linksScene = this._linksScene.bind(this);
    this._emailScene = this._emailScene.bind(this);
  }

  _dlScene(){
    Actions.push("dl");
    //Alert.alert("DL", "Coming soon.")
  }
  _integrationScene(){
    Actions.push("integration");
  }
  _trainingScene(){
    //Actions.push("training");
    Alert.alert("Тренинги", "В разработке. Скоро будет доступно.")
  }
  _sportScene(){
    Actions.push("sport");
  }
  _resultsScene(){
    //Actions.push("results");
    Alert.alert("Результаты", "В разработке. Скоро будет доступно.")
  }
  _linksScene(){
    Actions.push("links");
  }
  _emailScene(){
    Actions.push("email");
  }
 
  render () {
    return (
      <View style = {{flex: 1, width : '80%', marginLeft: '10%', justifyContent: 'space-evenly'}}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}>
            <Icon 
              reverse
              name='people'
              type='ionicons'
              color='brown'
              size = '30'
              onPress = {this._dlScene}
            />
            <Button
            onPress = {this._dlScene}
            title = {"Декатлоники"}
            />
          </View>
          <View style = {{borderRightColor: 'lightgrey', borderRightWidth: 3}}/>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}> 
            <Icon 
              reverse
              name='bookmark'
              type='ionicons'
              color='yellow'
              size = '30'
              onPress = {this._integrationScene}
            />
            <Button
              onPress = {this._integrationScene}
              title = {"Интеграция"}
            />
          </View>
        </View>
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}>
            <Icon 
              reverse
              name='watch'
              type='ionicons'
              color='black'
              size = '30'
              onPress = {this._trainingScene}
            />
            <Button
              onPress = {this._trainingScene} 
              title = {"Тренинги"}
            />
          </View>
          <View style = {{borderRightColor: 'lightgrey', borderRightWidth: 3}}/>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}>
            <Icon 
              reverse
              name='ios-american-football'
              type='ionicon'
              color='lightblue'
              size = '30'
              onPress = {this._sportScene}
            />
            <Button
            onPress = {this._sportScene}
            title = {"Спорт"}
            />
          </View>
        </View>
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}>
            <Icon 
              reverse
              name='trending-up'
              type='ionicons'
              color='green'
              size = '30'
              onPress = {this._resultsScene}
              
            />
            <Button
              onPress = {this._resultsScene}
              title = {"Результаты"} 
            />
          </View>
          <View style = {{borderRightColor: 'lightgrey', borderRightWidth: 3}}/>
          <View  style = {{justifyContent: 'center', flexDirection: 'column', width: '40%'}}>
            <Icon 
              reverse
              name="link"
             onPress = {this._linksScene}
              color = 'lightgrey'
              size = '30'
            />
            <Button
              onPress = {this._linksScene}
              title = {"Полезные ссылки"}
            />
          </View>
        </View>
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View  style = {{justifyContent: 'center', flexDirection: 'column'}}>
            <Icon 
              reverse
              color = 'grey'
              name="create"
              size = '30'
              onPress = {this._emailScene}
            />
            <Button
              onPress = {this._emailScene}
              title = {"Обратная связь"}
            />
          </View>
        </View>
      </View>
    );
  }
}