import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Menu from './2_Menu';
import DL from './3_DL';

export default class Raiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { 
      link: '',
      yourrait: 11,
      yourposi: 'zeroth',
      rait1: 10,
      name1: '1 name',
      posi1: 'first'
    };

  }


  render() {
    return (
      <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
        <View style = {{justifyContent: 'space-around', flexDirection: 'column'}}>
          <Text>
            Рейтинг всех пользователей
          </Text>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <Text>
            Твои баллы: {this.state.yourrait}. Ты на {this.state.yourposi}!
          </Text>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi1}
            </Text>
            <Text>
              {this.state.name1}
            </Text>
            <Text>
              {this.state.rait1}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi2}
            </Text>
            <Text>
              {this.state.name2}
            </Text>
            <Text>
              {this.state.rait2}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi3}
            </Text>
            <Text>
              {this.state.name3}
            </Text>
            <Text>
              {this.state.rait3}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi4}
            </Text>
            <Text>
              {this.state.name4}
            </Text>
            <Text>
              {this.state.rait4}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi5}
            </Text>
            <Text>
              {this.state.name5}
            </Text>
            <Text>
              {this.state.rait5}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi6}
            </Text>
            <Text>
              {this.state.name6}
            </Text>
            <Text>
              {this.state.rait6}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi7}
            </Text>
            <Text>
              {this.state.name7}
            </Text>
            <Text>
              {this.state.rait7}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi8}
            </Text>
            <Text>
              {this.state.name8}
            </Text>
            <Text>
              {this.state.rait8}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi9}
            </Text>
            <Text>
              {this.state.name9}
            </Text>
            <Text>
              {this.state.rait9}
            </Text>
          </View>
          <View style = {{borderBottomColor: 'lightgrey', borderBottomWidth: 3}}/>  
          <View style = {{flexDirection: 'row'}}>
            <Text>
              {this.state.posi10}
            </Text>
            <Text>
              {this.state.name10}
            </Text>
            <Text>
              {this.state.rait10}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});