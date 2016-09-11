import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textComponent: {
    fontSize: 24,
  }
});

export default class DetailsScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text style={styles.textComponent}>{this.props.data}</Text>
      </View>
    );
  }
}

