import React from 'react'
import { capitalize } from '../../helpers'
import './Category.css'

const Category = ({ name }) => {
  return (
    <div className='float-lt btn-margin'>
      <button disabled className='pill btn btn-primary btn-font'>
        {capitalize(name)}
      </button>
    </div>
  )
}

export default Category
