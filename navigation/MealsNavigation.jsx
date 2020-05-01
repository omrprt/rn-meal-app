import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';

import CustomHeaderButton from '../components/HeaderButton';

const defaultStackNavOptions = {
  headerBackTitle: 'back',
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
    alignSelf: 'center',
    maxWidth: 250
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: 'white'
};

const Drawer = createDrawerNavigator();

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();
// const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const FavStack = createStackNavigator();
const FilterStack = createStackNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContentOptions={{
          activeTintColor: Colors.primaryColor,
          labelStyle: {
            fontFamily: 'open-sans-bold'
          }
        }}
      >
        <Drawer.Screen
          name='Home'
          component={MealsFavTabNavigator}
          options={{
            drawerLabel: 'Meals'
          }}
        />
        <Drawer.Screen name='Filter' component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MealsFavTabNavigator = (props) => {
  return (
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
        activeTintColor: Colors.accentColor,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }}
      // needed for the change color effect in materialTab
      shifting={true}
      barStyle={{
        backgroundColor: Colors.primaryColor,
        fontFamily: 'open-sans-bold'
      }}
    >
      <Tab.Screen
        name='Home'
        component={MealsNavigator}
        options={{
          tabBarLabel: 'Meals',
          tabBarColor: Colors.primaryColor
          // tabBarIcon: ({ color, size }) => (
          //  <Ionicons name={iconName} size={25} color={color} />
          // ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavsNavigator}
        options={{
          tabBarLabel: 'Favorites!',
          tabBarColor: Colors.accentColor
          // tabBarIcon: ({ color, size }) => (
          //  <Ionicons name={iconName} size={25} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

const MealsNavigator = (props) => {
  return (
    <HomeStack.Navigator screenOptions={defaultStackNavOptions}>
      <HomeStack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={(navData) => ({
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            >
              <View style={styles.burger}>
                <Ionicons name='ios-menu' size={23} color='white' />
              </View>
            </TouchableOpacity>
          )
        })}
      />
      <HomeStack.Screen
        name='CategoryMeals'
        component={CategoryMealsScreen}
        options={(props) => ({
          headerTitle: props.route.params.categoryName,
          headerStyle: {
            backgroundColor: props.route.params.categoryColor
          }
        })}
      />
      <HomeStack.Screen
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
    </HomeStack.Navigator>
  );
};

const FavsNavigator = (props) => {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={(navData) => ({
          headerTitle: 'Your Favorites',
          headerStyle: {
            backgroundColor: Colors.accentColor
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            >
              <View style={styles.burger}>
                <Ionicons name='ios-menu' size={23} color='white' />
              </View>
            </TouchableOpacity>
          )
        })}
      />
      <FavStack.Screen name='MealDetails' component={MealDetailScreen} />
    </FavStack.Navigator>
  );
};

const FilterNavigator = (props) => {
  return (
    <FilterStack.Navigator screenOptions={defaultStackNavOptions}>
      <FilterStack.Screen
        name='Filter'
        component={FilterScreen}
        options={(navData) => ({
          headerTitle: 'Filter Meals',
          headerStyle: {
            backgroundColor: Colors.accentColor
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            >
              <View style={styles.burger}>
                <Ionicons name='ios-menu' size={23} color='white' />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <CustomHeaderButton>
              <Ionicons
                name='ios-save'
                size={23}
                color='white'
                onPress={() => {
                  console.log('saving filter', navData.route.params.save());
                }}
              />
            </CustomHeaderButton>
          )
        })}
      />
      <FilterStack.Screen name='MealDetails' component={MealDetailScreen} />
    </FilterStack.Navigator>
  );
};

const styles = StyleSheet.create({
  burger: {
    marginLeft: 20
  }
});

export default MainNavigator;
