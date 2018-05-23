import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = ({ title }) => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="display1" color="inherit">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar
