import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
  const catID = props.route.params.categoryID;
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {}}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayMeals}
        renderItem={renderMealItem}
        //numColumns={2}
        style={{ width: '90%' }}
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

export default CategoryMealScreen;
