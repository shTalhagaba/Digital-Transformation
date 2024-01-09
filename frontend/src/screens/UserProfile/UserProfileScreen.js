import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function UserProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false}>Hello world</Text>
    </View>
  );
}

export default UserProfileScreen;
