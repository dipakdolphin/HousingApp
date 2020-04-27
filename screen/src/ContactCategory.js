/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as constant from '../Services/constant';

export default class ContactCategory extends Component {
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
          this.props.navigation.navigate('ContactList', {item: item});
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Icon name="md-contact" size={25} />
          <Text style={styles.ListText}>{item.ConCategory}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  saperator = () => {
    return <View style={{height: 5, backgroundColor: 'white'}} />;
  };

  componentDidMount() {
    const url = `${constant.API_BASE_URL}/api/contactcategory.php`;
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
          <Text style={styles.headerTitle}>Contact Category</Text>
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
    backgroundColor: '#FFF'
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
  ListText: {
    left: 25,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  ViewFlatStyle: {
    backgroundColor: '#F0FFFF',
  },
});
