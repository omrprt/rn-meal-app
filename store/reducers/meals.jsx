import { MEALS } from '../../data/dummy-data';
// import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case TOGGLE_FAVORITE:
  //     const existingIndex = state.favoriteMeals.findIndex(
  //       (meal) => meal.id == action.mealId
  //     );
  //     if (existingIndes >= 0) {
  //       const updatedFavMeals = [...state.favoriteMeals];
  //       updatedFavMeals.splace(existingIndex, 1);
  //       return { ...state, favoriteMeals: updatedFavMeals };
  //     } else {
  //       const meal = state.meals.find((meal) => meal.id === action.meadId);
  //       return {
  //         ...state,
  //         favoriteMeals: state.favoriteMeals.concat(meal)
  //       };
  //     }
  //   default:
  return state;
  // }
};

export default mealsReducer;
