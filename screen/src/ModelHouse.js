/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import * as constant from '../Services/constant';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default class ModelHouse extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true,
      modalVisible: false,
    };
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, padding: 10}}
        onPress={() => {
          this.props.navigation.navigate('ModelHouseDetails', {item: item});
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{height: 50, width: 50, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/${item.ModalImage}`,
              }}
            />
          </View>
          <View style={{justifyContent: 'center', left: 13}}>
            <Text style={{fontSize: 13, textTransform: 'uppercase'}}>
              {item.ModalName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  saperator = () => {
    return <View style={{height: 5, backgroundColor: 'white'}} />;
  };

  componentDidMount() {
    const url = `${constant.API_BASE_URL}/api/modallist.php`;
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
    marginTop: 1,
    backgroundColor: '#FFF',
  },
  ViewFlatStyle: {
    backgroundColor: '#F0FFFF',
  },
});
