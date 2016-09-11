import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

import MainScreen from './MainScreen'
import DetailsScreen from './details'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textComponent: {
    fontSize: 24,
  }
});

class workingWithLists extends Component {

   navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.index) {
      case 'first':
        return (<MainScreen navigator={navigator} title="Main Screen" />);
      case 'second':
        return (<DetailsScreen navigator={navigator} data={route.data} title="Details Screen" />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ index: 'first' }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
}

AppRegistry.registerComponent('workingWithLists', () => workingWithLists);
