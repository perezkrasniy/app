import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button, WebView } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';

export default class AboutCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
    
    };

  }


  render() {
    return (
      <View style = {{width: '100%', height: '100%'}}>
        <WebView
        source = {{uri: ''}}>
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});