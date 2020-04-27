import React from 'react';
//import { Text, Button, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsFavTabNavigator = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor='#fff'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-restaurant';
            } else if (route.name === 'Favorites') {
              iconName = 'ios-star';
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          }
        })}
        //for createBottomTabNavigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
        // needed for the change color effect
        shifting={true}
      >
        <Tab.Screen
          name='Home'
          component={MealsNavigator}
          options={{
            tabBarColor: '#694fad'
            // tabBarIcon: ({ color, size }) => (
            //  <Ionicons name={iconName} size={25} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites!',
            tabBarColor: '#009387'
            // tabBarIcon: ({ color, size }) => (
            //  <Ionicons name={iconName} size={25} color={color} />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const MealsNavigator = (props) => {
  return (
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
            <CustomHeaderButton>
              <Ionicons name='ios-star' size={23} color='white' />
            </CustomHeaderButton>
          )
        })}
      />
    </Stack.Navigator>
  );
};

export default MealsFavTabNavigator;
