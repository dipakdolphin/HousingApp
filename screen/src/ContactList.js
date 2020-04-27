/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import * as constant from '../Services/constant';

export default class ContactList extends Component {
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
          this.props.navigation.navigate('ContactDetails', {item: item});
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              style={{height: 50, width: 50, borderRadius: 20}}
              source={{uri: `${constant.API_BASE_URL}/uploads/${item.Photo}`}}
            />
          </View>
          <View style={{justifyContent: 'center', left: 20}}>
            <Text style={{fontSize: 20}}>
              {item.FirstName} {item.LastName}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${item.PhoneNo}`);
              }}>
              <Text style={{fontSize: 16, marginTop:10, marginBottom:10}}>
                {item.PhoneNo}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  saperator = () => {
    return <View style={{height: 5, backgroundColor: 'white'}} />;
  };

  componentDidMount() {
    const url = `${constant.API_BASE_URL}/api/contactdetail.php`;
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
