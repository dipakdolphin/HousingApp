/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Grids({navigation}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => navigation.navigate('CashFlowAnalysis')}
          >
          <View style={styles.bottomInner}>
            <Icon
              name="md-cash"
              size={30}
              style={{marginLeft: 15, height: 25, width: 25, color: '#fff'}}
            />
            <Text style={styles.innerText}>Cash Flow Analysis</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => {
            navigation.navigate('ModelHouse');
          }}>
          <View style={styles.bottomInner}>
            <Icon name="md-home" size={30} style={styles.icon} />
            <Text style={styles.innerText}>Model House Design</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => {
            navigation.navigate('ArticleList');
          }}>
          <View style={styles.bottomInner}>
            <Icon name="md-bookmark" size={30} style={styles.icon} />
            <Text style={styles.innerText}>Beneficiery Stories</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <View style={styles.bottomInner}>
            <Icon name="md-text" size={30} style={styles.icon} />
            <Text style={styles.innerText}>Message Box</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomItem: {
    borderRadius: 20,
    padding: 5,
    width: '50%',
    height: '50%',
    shadowColor: '#abc',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  bottomInner: {
    flex: 1,
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    marginLeft: 15,
    height: 25,
    width: 25,
    color: '#fff',
  },
});
