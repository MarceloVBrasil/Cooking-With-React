import React from 'react'
import Creator from './Creator'

export default function CreatorsList({ creators }) {
  const creatorsElements = creators.map(c => {
      return <Creator key={c.id} {...c}/>
  })

  return (
      <div className='creator-grid'>
          {creatorsElements}
      </div>
  )
}
