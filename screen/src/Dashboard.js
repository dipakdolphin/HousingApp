/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabScreen from './BottomTabScreen';

import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default class Dashboard extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="Home" component={BottomTabScreen} />
          {/* <Drawer.Screen name="About" component={AboutStackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
