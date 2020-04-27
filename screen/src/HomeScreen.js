/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from './Carousel';
import Grids from './Grids';
const HomeScreen = (props) => {
  let { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Carousel />
      </View>
      <View style={{flex: 1}}>
        <Grids {...props}/>
      </View>
      <View style={{flex: 1}}>
        {/* <ModelHouse /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
