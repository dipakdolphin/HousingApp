/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './HomeScreen';
import GalleryScreen from './GalleryScreen';
import AudioScreen from './AudioScreen';
import VideoScreen from './VideoScreen';
import ContactScreen from './ContactScreen';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

import CashFlowAnalysis from './CashFlowAnalysis';
import ModelHouse from './ModelHouse';
import ModelHouseDetails from './ModelHouseDetails';
import ArticleList from './ArticleList';
import ArticleDetails from './ArticleDetails';
import Message from './Message';
import Aplayer from './Aplayer';
import Vplayer from './Vplayer';

const HomeStack = createStackNavigator();

const BottomTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{backgroundColor: '#009387'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'HOME',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="md-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Gallery"
      component={GalleryScreen}
      options={{
        tabBarLabel: 'GALLERY',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="md-images" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Audio"
      component={AudioScreen}
      options={{
        tabBarLabel: 'AUDIO',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="md-musical-note" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Video"
      component={VideoScreen}
      options={{
        tabBarLabel: 'VIDEO',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="md-videocam" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        tabBarLabel: 'CONTACT',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="md-contacts" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'HSSSP',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="CashFlowAnalysis"
      component={CashFlowAnalysis}
      options={{
        title: 'Cash Flow Analysis Form',
      }}
    />
    <HomeStack.Screen
      name="ModelHouse"
      component={ModelHouse}
      options={{
        title: 'Model House Design',
      }}
    />
    <HomeStack.Screen
      name="ModelHouseDetails"
      component={ModelHouseDetails}
      options={{
        title: 'House Design Details of',
      }}
    />
    <HomeStack.Screen
      name="ArticleList"
      component={ArticleList}
      options={{
        title: 'Beneficiery Stories',
      }}
    />
    <HomeStack.Screen
      name="ArticleDetails"
      component={ArticleDetails}
      options={{
        title: 'Beneficiery Stories of',
      }}
    />
    <HomeStack.Screen
      name="Message"
      component={Message}
      options={{
        title: 'Post Your Query..',
      }}
    />

    <HomeStack.Screen
      name="Aplayer"
      component={Aplayer}
      options={{
        title: 'Audio Player',
      }}
    />

    <HomeStack.Screen
      name="Vplayer"
      component={Vplayer}
      options={{
        title: 'Video Player',
      }}
    />


    <HomeStack.Screen
      name="ContactList"
      component={ContactList}
      options={{
        title: 'Contact List of',
      }}
    />

    <HomeStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={{
        title: 'Contact Details of',
      }}
    />
  </HomeStack.Navigator>
);

const AboutStack = createStackNavigator();

const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
    }}>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </AboutStack.Navigator>
);
