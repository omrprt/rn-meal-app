import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categoires Screen!</Text>
      <Button
        title='Go to Meals!'
        onPress={() => {
          props.navigation.push('Category Meals');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CategoriesScreen;
