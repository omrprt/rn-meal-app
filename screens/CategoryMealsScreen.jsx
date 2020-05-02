import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

// import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import Deafult from '../components/DefaultText';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = (props) => {
  const catID = props.route.params.categoryID;
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
