import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import DL from './3_DL';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      username: 'Nikita',
      oper1: 'first',
      quan1: '1',
      oper2: 'second',
      quan2: '2',
      oper3: 'third',
      quan3: '3',
      oper4: 'fourth',
      quan4: '4',
      oper5: 'fifth',
      quan5: '5',
    };

  }


  render() {
    return (
      <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
        <View style = {{justifyContent: 'space-around', flexDirection: 'column'}}>
          <Text>
            Твои последние траты, {this.state.username}.
          </Text>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text>
              {this.state.oper1}
            </Text>
            <Text>
              {this.state.quan1}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text>
              {this.state.oper2}
            </Text>
            <Text>
              {this.state.quan2}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text>
              {this.state.oper3}
            </Text>
            <Text>
              {this.state.quan3}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text>
              {this.state.oper4}
            </Text>
            <Text>
              {this.state.quan4}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text>
              {this.state.oper5}
            </Text>
            <Text>
              {this.state.quan5}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});