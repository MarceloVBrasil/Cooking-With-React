import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import CreatorList from './CreatorList'
import { RecipeContext } from '../App'

export default function Recipe(props) {
    const { id,name, cookTime, servings, instructions, ingredients, creators } = props
    const {handleRecipeDelete, handleRecipeSelect} = useContext(RecipeContext)

  return (
    <div className='recipe'>
      <div className='recipe__header'>
          <h3 className='recipe__title'>{name}</h3>
      <div>
          <button className='btn btn--primary mr-1' onClick={() => handleRecipeSelect(id)}>Edit</button>
          <button className='btn btn--danger' onClick={() => handleRecipeDelete(id)}>Delete</button>
      </div>
    </div>
      <div className='recipe__row'>
          <span className='recipe__label'>Cook Time:</span>
          <span className='recipe__value'>{cookTime}</span>
      </div>
      <div className='recipe__row'>
          <span>Servings:</span>
          <span className='recipe__value'>{servings}</span>
      </div>
      <div className='recipe__row'>
          <span className='recipe__label'>Instructions:</span>
          <div className='recipe__value recipe__value--indented recipe__instructions'>{instructions}</div>
      </div>
       <div className='recipe__row'>
          <span className='recipe__label'>Ingridients:</span>
          <div>
              <IngredientList ingredients={ingredients}/>
          </div>
      </div>
      <div className='recipe__row'>
          <span className='recipe__label'>Created by:</span>
          <div>
              <CreatorList creators={creators}/>
          </div>
      </div>
    </div>
  )
}
