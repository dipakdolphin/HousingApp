/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button
            title="Go to home"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
