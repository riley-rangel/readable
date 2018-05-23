import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
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
    const { classes: { categoryBox, pad, row } } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Navbar title="Readable" />
        <div className={pad}>
          <div className={categoryBox}>
            <Grid container justify="center" className={row}>
              <Typography variant="title">Categories</Typography>
            </Grid>
            <Grid container justify="center" className={row}>
              {this.state.categories.map(({ name }) => (
                <Category key={name} name={name} />
              ))}
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = ({ spacing: { unit } }) => ({
  categoryBox: {
    padding: unit,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: 10,
  },
  pad: { padding: unit * 3 },
  row: { paddingTop: unit },
})

export default withStyles(styles)(App)
