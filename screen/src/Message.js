/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable={true}
        placeholder="Type your message here"
        maxLength={40}
      />
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      MobileNumber: '',
      Message: '',
    };
  }

  submit() {
    let collection = {};
    collection.FirstName = this.state.FirstName;
    collection.MobileNumber = this.state.MobileNumber;
    collection.Message = this.state.Message;
    // console.warn(collection);
    if (collection.FirstName === '') {
      alert('FirstName is blank');
      return false;
    }

    if (collection.MobileNumber === '') {
      alert('MobileNumber is blank');
      return false;
    }

    if (collection.Message === '') {
      alert('Message is blank');
      return false;
    }

    var url = 'https:hss.habitatnepal.org/api/message.php';
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(collection),
    })
      .then((response) => response.json())
      .then((res) => {
        alert('Your message sent', res);
      })
      .catch((error) => {
        alert('No message sent', error);
      });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <TextInput
            placeholder="Enter First Name"
            onChangeText={(FirstName) => this.setState({FirstName})}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Phone Number"
            onChangeText={(MobileNumber) => this.setState({MobileNumber})}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            style={styles.TextInput}
          />
          <View
            style={{
              backgroundColor: this.state.text,
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
            <UselessTextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(Message) => this.setState({Message})}
              value={this.state.text}
            />
          </View>

          <TouchableOpacity
            style={{
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
              backgroundColor: '#009387',
            }}
            onPress={() => this.submit()}>
            <Text style={{color: '#FFF'}}>Submit Your Query</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
  },
  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
  MessageBox: {
    width: '100%',
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
});
