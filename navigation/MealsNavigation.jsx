import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='Category Meals' component={CategoryMealsScreen} />
        <Stack.Screen name='Meal Details' component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const MealsNavigator = createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: {
//     screen: CategoryMealsScreen
//   },
//   MealDetail: MealDetailScreen
// });

export default MealsNavigator;
