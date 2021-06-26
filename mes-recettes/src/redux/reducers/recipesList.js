import { ADD_RECIPES } from "../actionTypes";




const defaultState = [];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
        return action.payload.data;
    default:
      return state;
  }
};
 
