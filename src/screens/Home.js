import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

const Home = props => {
  return (
    <View>
      <TouchableHighlight onPress={() => props.navigation.navigate('EMOM')}>
        <Text>HomeScreen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
