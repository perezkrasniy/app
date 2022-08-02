import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, TextInput, Alert } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';

export default class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    name: 'Nikita',
    com: 'Введите ваше сообщение',
    color2nd: '#f1f8ff',
    textcolor2nd: '#0276b0',
    };
    this.onClean2nd = this.onClean2nd.bind(this);
    this._onEdit2nd = this._onEdit2nd.bind(this);
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onEdit2nd(){
    this.setState({color2nd: '#f1f8ff'});
  }
  onClean2nd(){
    this.setState({color2nd: 'white'})
  }

  _onPressButton() 
  {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => 
    {this._onPressButton = this._onPressButton.bind(this);
      if (request.readyState !== 4) 
      {
        return;
      }
      if (request.status === 200) 
      {
        console.log('success', request.responseText);
        Alert.alert('Спасибо за отзыв. Вы помогаете нам стать лучше!');   
      } 
      else 
      {
        console.warn('error');
        Alert.alert('error');
      }
    };
    request.open('GET', ''
                       + this.state.name + '&p3=' + this.state.com);
    request.send();
  }

  render() {
    return (
      <View style = {{width : '80%', height: '50%', marginLeft: '10%', justifyContent: 'space-around'}}>
        <View style = {{justifyContent: 'center', flexDirection: ''}}>
          <Text 
          style={{textAlign: 'center',fontSize: 18, borderBottomWidth: 3, borderBottomColor: 'lightgrey'}}>
          Здесь ты можешь оставить отзыв о проекте.
          </Text>
        </View>
          <TextInput
            style={{color: this.state.textcolor2nd, backgroundColor: this.state.color2nd, textAlign: 'center',
               height: '50%', fontSize: 18, borderBottomWidth: 3, borderBottomColor: 'lightgrey'}}
              selectTextOnFocus = {true}
              onChangeText={(com) => this.setState({com})}
              onSelectionChange = {this.onClean2nd}
              onEndEditing = {this._onEdit2nd}
              value = {this.state.com}
          />
          <Button
            title = {'Отправить'}
            onPress = {this._onPressButton}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
