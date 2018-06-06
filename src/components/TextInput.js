import React from 'react'
import { TextField } from '@material-ui/core'

const TextInput = ({ helperText, id, input, label, meta = {}, ...rest}) => {
  const { error, touched } = meta
  
  return (
    <TextField
      error={touched && Boolean(error)}
      helperText={helperText && Boolean(error) ? error : helperText}
      id={id}
      label={label}
      {...input}
      {...rest}
    />
  )
}

export default TextInput
