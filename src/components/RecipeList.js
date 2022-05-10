import React, { useContext, useState } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from '../App'

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext)
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
        <div className='recipe-list'>
            <input type='text' placeholder='Search for a recipe' className='recipe-list__search-bar' onChange={(e) => setSearchTerm(e.target.value)}/>
            {recipes.filter(r => {
              if(searchTerm === '') return r
              if(r.name.toLowerCase().includes(searchTerm.toLowerCase())) return r
            }).map(recipe => {
            return  <Recipe {...recipe} key={recipe.id}/>
            })}
                
        <div className='recipe-list__add-recipe-btn-container'>
             <button className='btn btn--primary' onClick={handleRecipeAdd}>Add Recipe</button>
        </div>
      </div>   
    </>
  )
}
