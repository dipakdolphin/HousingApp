/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import * as constant from '../Services/constant';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class AudioScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, padding: 10}}
        onPress={() => {
          this.props.navigation.navigate('Aplayer', {item: item});
        }}>
        <View style={{flexDirection: 'row', margin: 10 }}>
          <Icon name="md-play-circle" size={30} />
          <Text
            style={{
              left: 25,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            {item.AudioName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  saperator = () => {
    return <View style={{height: 5, backgroundColor: 'white'}} />;
  };

  componentDidMount() {
    const url = `${constant.API_BASE_URL}/api/audiolist.php`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return this.state.isLoading ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    ) : (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>Audio List</Text>
        </View>
        <View style={styles.ViewFlatStyle}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.saperator}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 16,
    textAlign: 'center',
    backgroundColor: '#009387',
  },
  ViewFlatStyle: {
    backgroundColor: '#F0FFFF',
  },
});
