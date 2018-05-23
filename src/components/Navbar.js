import React from 'react'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="display1" color="inherit">
          Readable
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar
