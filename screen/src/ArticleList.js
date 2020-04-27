/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import * as constant from '../Services/constant';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class ArticleList extends Component {
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
          this.props.navigation.navigate('ArticleDetails', {item: item});
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              style={{height: 50, width: 50, borderRadius: 10}}
              source={{
                uri: `${constant.API_BASE_URL}/uploads/${item.ArtImage}`,
              }}
            />
          </View>
          <View style={{justifyContent: 'center', left: 13}}>
            <Text style={{fontSize: 13, textTransform: 'uppercase'}}>
              {item.ArtTitle}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  saperator = () => {
    return (
      // eslint-disable-next-line react/self-closing-comp
      <View style={{height: 5, backgroundColor: 'white'}}></View>
    );
  };

  componentDidMount() {
    const url = 'https://hss.habitatnepal.org/api/articlelist.php';
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
