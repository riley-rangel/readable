import React, { Component } from 'react'
import * as API from '../API'
import Category from './Category'
import Navbar from './Navbar'

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
        <Navbar title={'Readable'} subtitle={'Share. Read. Comment.'} />
        <div className='container no-pad'>
          <div className='row'>
            <div className='twelve-col flex'>
              {this.state.categories.map((category, i) => (
                <Category key={i} name={category.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
