// more creative, catalog 
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import WP from './3.a_Points';
import WP1 from './3.f_Points2';
import Catalog from './3.b_Catalog';
import Raiting from './3.c_Raiting';
import History from './3.d_History';

export default class DL extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    value: 0,
    };
    this._Catalog = this._Catalog.bind(this);
    this._WP = this._WP.bind(this);
    this._WP1 = this._WP1.bind(this);
    this._Raiting = this._Raiting.bind(this);
    this._History = this._History.bind(this);
  }

  _Catalog(){
    Actions.push("catalog")
  }
  _WP(){
    Actions.push("wp")
  }
  _WP1(){
    Actions.push("wp1")
  }
  _Raiting(){
    Actions.push("raiting")
  }
  _History(){
    Actions.push("history")
  }

  render() {
    return (
      <View  style = {{flex: 1, width : '80%', marginLeft: '10%',justifyContent: 'space-evenly'}}> 
        <Button
          title = {"О проекте"}
          onPress = {this._Catalog}
        />       
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
        <Button
          title = {"Личный кабинет"}
          onPress = {this._History}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
          title = {"Рейтинг"}
          onPress = {this._Raiting}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
          title = {"Для руководителей"}
          onPress = {this._WP}
        />
        <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>
        <Button
          title = {"Для тренеров"}
          onPress = {this._WP1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});