import React from 'react'
import { isObject } from '../helpers'
import './ActionButton.css'

const isValidCSS = obj => {
  if (!isObject(obj)) return false

  const validProps = ['top', 'right', 'bottom', 'left']
  const keys = Object.keys(obj)

  for (const key of keys) {
    if (!validProps.includes(key) || typeof obj[key] !== 'string') {
      return false
    }
  }

  return true
}

const ActionButton = ({ action = null, position = {}, icon = null }) => {
  return (
    <button
      className='action-button'
      style={isValidCSS(position) ? position : {}}
      onClick={action}
    >
      {icon ? icon : '+'}
    </button>
  )
}

export default ActionButton
