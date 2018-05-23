import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as API from '../API'
import Category from './Category'
import Navbar from './Navbar'

const theme = createMuiTheme()

class App extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    const categories = await API.getCategories()
    this.setState({ categories })
  }
  render() {
    const { classes: { wrap } } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Navbar title="Readable" />
        <Grid container className={wrap}>
          <Grid item xs={12}>
            {this.state.categories.map(({ name }) => (
              <Category key={name} name={name} />
            ))}
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

const styles = ({ spacing: { unit } }) => ({
  wrap: { margin: unit * 3 }
})

export default withStyles(styles)(App)
