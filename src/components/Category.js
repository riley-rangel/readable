import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { capitalize } from '../helpers'

const Category = ({ classes: { category, categoryBtn }, name }) => {
  return (
    <div className={category}>
      <Button variant="outlined" color="primary" className={categoryBtn}>
        {capitalize(name)}
      </Button>
    </div>
  )
}

const styles = ({  palette: { primary }, spacing: { unit }, }) => ({
  category: {
    margin: unit,
    float: 'left',
  },
  categoryBtn: {
    borderColor: primary.main,
  },
})

export default withStyles(styles)(Category)
