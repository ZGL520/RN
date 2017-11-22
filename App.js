/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux'


import configureStore from './src/common/store/configureStore'

const store = configureStore();

export default class App extends Component<{}> {
  render() {

    return (
        <Provider store={store}>
          <View style={style.root}>
            <Text>
                hello,Vincent!
            </Text>
          </View>
        </Provider>
    );
  }
}


const style = StyleSheet.create({
    root:{marginTop:50}
});