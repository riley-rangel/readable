import React from 'react'
import {FormControl, InputLabel, Select} from '@material-ui/core'

const SelectField = ({className = '', children, id, input = {}, label}) => (
  <FormControl className={className}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Select
      children={children}
      inputProps={{ id }}
      {...input}
    />
  </FormControl>
)

export default SelectField
