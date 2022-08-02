// many button for helpful linksimport * as React from 'react';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextField,
  Button,
  Linking,
} from 'react-native';
import { Constants } from 'expo';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import Menu from './2_Menu';

export default class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '80%',
          marginLeft: '10%',
          justifyContent: 'space-evenly',
        }}>
        <Button
          title={' '}
          onPress={() =>
            Linking.openURL(
              ''
            )
          }
        />
        <View
          style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 3 }}
        />
        <Button
          title={''}
          onPress={() =>
            Linking.openURL(
              ''
            )
          }
        />

        <View
          style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 3 }}
        />
        <Button
          title={' '}
          onPress={() =>
            Linking.openURL(
              ''
            )
          }
        />
        <View
          style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 3 }}
        />
        <Button
          title={' '}
          onPress={() =>
            Linking.openURL(
              ''
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
