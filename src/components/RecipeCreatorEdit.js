import React from 'react'

export default function RecipeCreatorEdit(props) {
    const {creator, handleCreatorChange, handleCreatorDelete} = props

    function handleChange(changes)
    {
      handleCreatorChange(creator.id, {...creator, ...changes})
    }

  return (
    <>
      <input type='text' className='recipe-edit__input' value={creator.name} onChange={e => handleChange({name: e.target.value})}/>
      
      <button className='btn btn--danger' onClick={() => handleCreatorDelete(creator.id)}>&times;</button>
    </>
  )
}
