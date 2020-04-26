import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
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
          name='MealDetails'
          component={MealDetailScreen}
          options={(props) => ({
            headerTitle: props.route.params.mealName,
            headerRight: () => (
              // <Button title='FAV!'>
              //   <Ionicons name='md-remove' size={23} color='white' />
              // </Button>

              <CustomHeaderButton>
                <Ionicons name='ios-star' size={23} color='white' />
              </CustomHeaderButton>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
