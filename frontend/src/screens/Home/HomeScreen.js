import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
