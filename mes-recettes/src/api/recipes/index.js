import axios from 'axios'

import {fetchRecipesAction, fetchSelectedRecipeAction} from '../../redux/actions'

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes"
const ENDPOINT_RECIPES= ENDPOINT_BASE + "/complexSearch";


const apiKey = "171b78a8e82542f29973a986fb0856de";

const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, query) => {
    try{
        console.log('dans fetch recipes');
        const response = await axios.get(ENDPOINT_RECIPES, {
            params:{
                apiKey,
                number: MAX_PER_PAGE,     
            },
        });
        //console.log('La réponse = ', response.data);
        
        //peut être problème sur le resultats ?
        dispatch(fetchRecipesAction(response.data.results));
    }catch(e){
        //console.log('error requête recipes', e);
    }
};

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    try{
       
        const response = await axios.get(ENDPOINT_BASE + "/" + recipeId + "/information", {
            params:{
                apiKey
            },
        });
        console.log("response = ", response.data);
        dispatch(fetchSelectedRecipeAction(response.data))
    }catch(e){
        console.log('error requête recipes', e);
    }
};
