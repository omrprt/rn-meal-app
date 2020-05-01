import React from 'react';
import { useSelector } from 'react-redux';

// import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';

const CategoryMealScreen = (props) => {
  const catID = props.route.params.categoryID;
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
