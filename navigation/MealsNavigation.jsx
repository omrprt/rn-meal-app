import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  console.log('meals Navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'back',
          headerStyle: {
            backgroundColor: Colors.primaryColor
          },
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen
          name='CategoryMeals'
          component={CategoryMealsScreen}
          options={(props) => ({
            headerTitle: props.route.params.categoryName
          })}
        />
        <Stack.Screen
          name='Meal Details'
          component={MealDetailScreen}
          options={{
            headerBackTitle: 'back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
