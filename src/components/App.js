import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import * as API from '../API'
import Category from './Category'
import Navbar from './Navbar'

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
      <div>
        <Navbar title="Readable" />
        <Grid container className={wrap}>
          <Grid item xs={12}>
            {this.state.categories.map(({ name }) => (
              <Category key={name} name={name} />
            ))}
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = ({ spacing: { unit } }) => ({
  wrap: { margin: unit * 3 }
})

export default withStyles(styles)(App)
