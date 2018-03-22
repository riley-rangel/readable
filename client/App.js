import React, { Component } from 'react'
import * as API from './API'

export default class App extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    const categories = await API.getCategories()
    this.setState({ categories })
  }
  render() {
    return (
      <div>
        {this.state.categories.map((category, i) => (
          <div key={i}>{category.name}</div>
        ))}
      </div>
    )
  }
}
