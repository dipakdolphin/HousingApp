import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Content1}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('./../images/white_logo.webp')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View style={styles.Content2} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connected with us!</Text>
          <Text style={styles.text}>For Housing Solution</Text>
          <View style={styles.button}>
            {/* <TouchableOpacity>
              <LinearGradient
                colors={['#0073e6', '#6600ff']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity> */}
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
const height_logo = height * 0.152;
const width_logo = width * 0.53;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#0073e6',
  },
  Content1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content2: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: width_logo,
    height: height_logo,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  title: {
    color: '#05375a',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
