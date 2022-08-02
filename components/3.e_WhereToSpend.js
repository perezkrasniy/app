// calendar too with all sportsimport * as React from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, Picker, TouchableOpacity, Alert } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import Menu from './2_Menu';

export default class WhereToSpend extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    color1st: '#f1f8ff',
    textcolor1st: '#0276b0',
    color2nd: '#f1f8ff',
    textcolor2nd: '#0276b0',
    visible: false,
    };
    this.onClean1st = this.onClean1st.bind(this);
    this.onClean2nd = this.onClean2nd.bind(this);
    this._onEdit1st = this._onEdit1st.bind(this);
    this._onEdit2nd = this._onEdit2nd.bind(this);
  }
  _onEdit1st(){
    this.setState({color1st: '#f1f8ff'});
  }
  _onEdit2nd(){
    this.setState({color2nd: '#f1f8ff'});
  }
  onClean1st(){
    this.setState({color1st: 'white'})
  }
  onClean2nd(){
    this.setState({color2nd: 'white'})
  }
  onShow = () => {
    this.setState({ visible: true });
  }

  onSelect = (picked) => {
    this.setState({
      picked: picked,
      visible: false
    })
  }

  onCancel = () => {
    this.setState({
      visible: false
    });
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
        Alert.alert('Спасибо, у тебя осталось ' + this.state.points + ' ежемесячных бонусов!');  
      } 
      else 
      {
        console.warn('error');
        Alert.alert('error');
      }
    };
    request.open('GET', ''
                       + this.state.picked + '&p3=' + this.state.name);
    request.send();
  }

  render() {

    const options = [
    {key: '', label: ''}, 
      {key: '', label: ''},
      
    ];

    return (
      <View style = {{width: '100%', height: '100%'}}>
        <Text>
        
        </Text>
        <TouchableOpacity style={{marginTop: 0, backgroundColor: '#f1f8ff'}} onPress={this.onShow}>
        <Text style={styles.textstyle}>{this.state.picked}</Text>
        </TouchableOpacity>      
        <ModalFilterPicker
          visible={this.state.visible}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          options={options}
        />
        <Button
        title = {'Отправить запрос'}
        onPress = {this._onPressButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});