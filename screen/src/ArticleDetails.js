/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import * as constant from '../Services/constant';

export default class ArticleDetails extends Component {
  render() {
    let {item} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>{item.ArtTitle}</Text>
        <Image
          style={{height: 200, margin: 5, borderRadius: 10}}
          source={{uri: `${constant.API_BASE_URL}/uploads/${item.ArtImage}`}}
        />
        <View style={{padding: 10, flex: 1, backgroundColor: '#FFF'}}>
          {/* <Text style={{color:'white',textAlign:'justify'}}>{item.ArtDescription}</Text> */}
          <WebView
            scalesPageToFit={false}
            style={{
              backgroundColor: '#F0FFFF',
              textAlign: 'justify',
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{html: item.ArtDescription}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    padding: 10,
    fontSize: 14,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F0FFFF',
    margin: 5,
  },
});
