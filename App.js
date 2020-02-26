import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';



const App = () => {
  return (
    <View>
      <Text style={styles.TextStyle}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 32,
  },
});

export default App;
