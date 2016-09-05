import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

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

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  onClickList(){
    alert('You have clicked')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight underlayColor='white' onPress={this.onClickList}>
              <View>
                <Text>My Awesome Row</Text>
                <Text style={styles.textComponent}>{rowData}</Text>
              </View>
              </TouchableHighlight>
            }
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('workingWithLists', () => workingWithLists);
