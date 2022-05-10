import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import RecipeCreatorEdit from './RecipeCreatorEdit'
import { RecipeContext } from '../App'
import {v4 as uuidv4} from 'uuid'

export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    function handleChange(changes)
    {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange(id, newIngredient)
    {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)

        newIngredients[index] = newIngredient
        handleChange({ ingredients: newIngredients })
    }

    function handleIngredientAdd()
    {
        const newIngredient =
        {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange( {ingredients: [...recipe.ingredients, newIngredient]} )
    }

    function handleIngredientDelete(id)
    {
        const newIngredients = recipe.ingredients.filter(i => i.id !== id)
        handleChange({ingredients: newIngredients})
    }

    function handleCreatorChange(id, newCreator)
    {
        const newCreators = [...recipe.creators]
        const index = newCreators.findIndex(c => c.id === id)

        newCreators[index] = newCreator
        handleChange({ creators: newCreators })
    }

    function handleCreatorAdd()
    {
        const newCreator =
        {
            id: uuidv4(),
            name: '',
        }
        handleChange( {creators: [...recipe.creators, newCreator]} )
    }

    function handleCreatorDelete(id)
    {
        const newCreator = recipe.creators.filter(c => c.id !== id)
        handleChange({creators: newCreator})
    }

  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-btn-container'>
            <button className='btn recipe-edit__remove-btn' onClick={() => handleRecipeSelect(undefined)}>&times;</button>
        </div>

        <div className='recipe-edit__details-grid'>
            <label htmlFor='name' className='recipe-edit__label'>Name</label>
            <input type='text' name='name' id='name' className='recipe-edit__input' value={recipe.name}
             onInput={e => handleChange({name: e.target.value})}/>

            <label htmlFor='cookTime' className='recipe-edit__label'>Cook Time</label>
            <input type='text' name='cookTime' id='cookTime' className='recipe-edit__input' value={recipe.cookTime}
             onInput={(e) => handleChange({cookTime: e.target.value})}/>

            <label htmlFor='servings' className='recipe-edit__label'>Servings</label>
            <input type='number' name='servings' id='servings' min='1' className='recipe-edit__input' value={recipe.servings}
            onInput={(e) => handleChange({servings: parseInt(e.target.value) || ''})}/>

            <label htmlFor='instructions' className='recipe-edit__label'>Instructions</label>
            <textarea name='instructions' id='instructions' className='recipe-edit__input' value={recipe.instructions}
            onInput={(e) => handleChange({instructions: e.target.value})}/>
        </div>

        <br/>

        <label className='recipe-edit__label'>Ingredients</label>

        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient => (
                <RecipeIngredientEdit  key={ingredient.id} ingredient={ingredient} handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}/>
            ))}
            
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary' onClick={() => handleIngredientAdd()}>Add Ingredient</button>
        </div>

        <br/>

        <label className='recipe-edit__label'>Creators</label>

        <div className='recipe-edit__creator-grid'>
            <div>Name</div>
            <div></div>
            {recipe.creators.map(creator => (
                <RecipeCreatorEdit  key={creator.id} creator={creator} handleCreatorChange={handleCreatorChange}
                handleCreatorDelete={handleCreatorDelete}/>
            ))}
            
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary' onClick={() => handleCreatorAdd()}>Add Creator</button>
        </div>
    </div>
    
  )
}
