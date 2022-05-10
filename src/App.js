import React, { useState } from "react";
import RecipeList from "./components/RecipeList"
import './css/app.css'
import sampleRecipes from "./data/sampleRecipes";
import {v4 as uuidv4} from 'uuid'
import useLocalStorage from "./hooks/useLocalStorage";
import RecipeEdit from "./components/RecipeEdit";
import axios from "axios";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'


function App() {
  // const [recipes, setRecipes] = useState(sampleRecipes)
  const [recipes, setRecipes] = useLocalStorage('recipes', sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const selectedRecipe = recipes.find(r => r.id === selectedRecipeId)

  const recipeContextValue = 
  {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id)
  {
    setSelectedRecipeId(id)
  }

function handleRecipeAdd()
{
  const newRecipe =
  {
    id: uuidv4(),
    name: 'New',
    servings: 1,
    instructions: 'Instructions',
    ingredients: [
      {
        id: uuidv4(),
        name: 'name',
        amount: 1
      }
    ],
    creators: [
      {
        id: uuidv4(),
        name: "name"
      }
    ]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes((prevRecipes) => [...prevRecipes, newRecipe])
}

function handleRecipeDelete(id)
{
  if(selectedRecipeId !== null && selectedRecipeId === id)
  {
    setSelectedRecipeId(undefined)
  }
  const newRecipes = recipes.filter(recipe => recipe.id !== id)
  setRecipes(newRecipes)
}

function handleRecipeChange(id, newRecipe)
{
  const newRecipes = [...recipes]
  const index = newRecipes.findIndex(r => r.id === id)

  newRecipes[index] = newRecipe
  setRecipes(newRecipes)
}

  return (
    <>
    <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes}/>
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
    </>
  );
}

export default App;
