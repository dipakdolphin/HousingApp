/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import * as constant from '../Services/constant';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Lightbox from 'react-native-lightbox';

const activeProps = {
  resizeMode: 'contain',
  flex: 1,
  width:null,
};

export default class GalleryScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }
  renderItem = ({item}) => {
    return (
      <View style={{flex: 1, padding: 5, backgroundColor: '#FFF'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            {item.CaptionName}
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingTop: 15}}>
          <Lightbox
            underlayColor="white"
            springConfig={{tension: 15, friction: 7}}
            swipeToDismiss={false}
            renderHeader={(close) => (
              <TouchableOpacity onPress={close}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            )}>
            <Image
              style={{height: 90, width: 90, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/Gallery/${item.Image1}`,
              }}
            />
          </Lightbox>


          <Lightbox
            underlayColor="white"
            style={{left: 5}}
            springConfig={{tension: 15, friction: 7}}
            swipeToDismiss={false}
            renderHeader={(close) => (
              <TouchableOpacity onPress={close}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            )}>
            <Image
              style={{height: 90, width: 90, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/Gallery/${item.Image2}`,
              }}
            />
          </Lightbox>
          <Lightbox
            underlayColor="white"
            style={{left: 5}}
            springConfig={{tension: 15, friction: 7}}
            swipeToDismiss={false}
            renderHeader={(close) => (
              <TouchableOpacity onPress={close}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            )}>
            <Image
              style={{height: 90, width: 90, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/Gallery/${item.Image3}`,
              }}
            />
          </Lightbox>
          <Lightbox
            underlayColor="white"
            style={{left: 5}}
            springConfig={{tension: 15, friction: 7}}
            swipeToDismiss={false}
            renderHeader={(close) => (
              <TouchableOpacity onPress={close}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            )}>
            <Image
              style={{height: 90, width: 90, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/Gallery/${item.Image4}`,
              }}
            />
          </Lightbox>
        </View>
      </View>
    );
  };
  saperator = () => {
    return <View style={{height: 5, backgroundColor: 'white'}} />;
  };

  componentDidMount() {
    const url = `${constant.API_BASE_URL}/api/gallerylist.php`;
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
        <Text style={styles.headerTitle}>House Gallery</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.saperator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
});
