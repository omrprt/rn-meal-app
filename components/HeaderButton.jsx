import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
      <View style={styles.button}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    color: Colors.primaryColor,
    paddingRight: 10
  }
});

export default CustomHeaderButton;
