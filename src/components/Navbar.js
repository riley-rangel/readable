import React from 'react'
<<<<<<< HEAD
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = ({ title }) => (
=======
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => (
>>>>>>> c6d71d335687effbb641a2eedfc464f369293058
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="display1" color="inherit">
<<<<<<< HEAD
          { title }
=======
          Readable
>>>>>>> c6d71d335687effbb641a2eedfc464f369293058
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Navbar
