/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
export default class Vplayer extends Component {
  // eslint-disable-next-line no-trailing-spaces
  render() {
    let {item} = this.props.route.params;
    // eslint-disable-next-line keyword-spacing
    return (
      <View style={styles.container}>
        <View style={{flex: 2, marginBottom: 20}}>
          <WebView
            source={{uri: item.VideoUrl}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
          <TouchableOpacity
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Video')}
            style={{backgroundColor: '#000', margin: 10}}>
            <View style={{}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  padding: 20,
                  fontSize: 20,
                }}>
                Back To Video List
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
