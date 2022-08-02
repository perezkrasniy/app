import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Picker, Alert, TextField, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import Menu from './2_Menu';
import DL from './3_DL';

export default class WP extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    link: '',
    com: 'За что? (не обязательно)',
    color1st: '#f1f8ff',
    textcolor1st: '#0276b0',
    color2nd: '#f1f8ff',
    textcolor2nd: '#0276b0',
    points: 10,
    visible: false,
    picked: 'Выберите сотрудника',
    data: [[]],
    key: '',
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
                       + this.state.picked + '&p3=' + this.state.points);
    request.send();
  }
  
  _onPressRefreshButton(){
  fetch(this.state.link)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .then(data => JSON.parse(data, function(key, value) {
          if (key == 'dateandtime'){ return new Date(value);}
          return value;}))
      .then(data => this.setState({data}));
        var arr = this.state.data[0];
    this.setState({key: this.state.data.map(a => a.Name)});
    this.setState({key: this.state.data.map(a => a.Email)});
  }

  render() {
  
    const options = [
      {key: '', label: ''},
      {key: '', label: ''},
      ]
  
    return (
      <View style = {{width : '80%', height: '50%', marginLeft: '10%', justifyContent: 'space-around'}}>
        <View style = {{justifyContent: 'center', flexDirection: ''}}>
          <Text 
          style={{textAlign: 'center',fontSize: 18, borderBottomWidth: 3, borderBottomColor: 'lightgrey'}}>
          Здесь ты можешь поощрить любого сотрудника за хорошую работу. 
          </Text>
        </View>
          <TouchableOpacity style={{textAlign: 'center',fontSize: 18, height: '8%', marginTop: 0, backgroundColor: '#f1f8ff'}} onPress={this.onShow}>
              <Text style = {{textAlign: 'center',fontSize: 18}}>{this.state.picked}</Text>
            </TouchableOpacity>      
            <ModalFilterPicker
              visible={this.state.visible}
              onSelect={this.onSelect}
              onCancel={this.onCancel}
              options={options}
            />
            <TextInput
              style={{color: this.state.textcolor1st, backgroundColor: this.state.color1st, textAlign: 'center',
               height: 35, fontSize: 18, borderBottomWidth: 3, borderBottomColor: 'lightgrey'}}
              keyboardType={"number-pad"}
              selectTextOnFocus = {true}
              onChangeText={(points) => this.setState({points})}
              onSelectionChange = {this.onClean1st}
              onEndEditing = {this._onEdit1st}
              value = {this.state.points}
            />
          <TextInput
            style={{color: this.state.textcolor2nd, backgroundColor: this.state.color2nd, textAlign: 'center',
               height: '25%', fontSize: 18, borderBottomWidth: 3, borderBottomColor: 'lightgrey'}}
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
          <Button
            title = {'Отправить'}
            onPress = {this._onPressRefreshButton}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});