/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ContactDetails extends Component {
  render() {
    let {item} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Icon size={180} name="md-contact" style={{left: 100}} />
        <View style={{padding: 20, marginTop: 10, backgroundColor: '#f0ffff'}}>
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              fontSize: 20,
              textAlign: 'center',
              textTransform: 'uppercase',
              backgroundColor: '#000',
            }}>
            General Information
          </Text>
          <Text style={styles.textdata}>
          <Icon name='md-person' size={18} /> : {item.FirstName} { '' } { item.LastName}
          </Text>
          <Text
            onPress={() => {
              Linking.openURL(`tel:${item.PhoneNo}`);
            }}
            style={styles.textdata}>
            <Icon name='md-call' size={18} /> : {item.PhoneNo}
          </Text>
          <Text style={styles.textdata}><Icon name='md-home' size={18} /> : {item.City}</Text>
          <Text style={styles.textdata} onPress={() => {
              Linking.openURL(`mailto:${item.Email}`);
            }}><Icon name='md-mail' size={18} /> : {item.Email}
            </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    color: '#009387',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
  textdata: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
});
