import React, { Component } from 'react'
import Modal from 'react-modal'
import * as API from '../API'
import ActionButton from './ActionButton'
import Category from './Category'
import CreatePost from './CreatePost'
import Navbar from './Navbar'
import MdAdd from 'react-icons/lib/md/add'

export default class App extends Component {
  state = {
    categories: [],
    addPostModalOpen: false
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }
  async componentDidMount() {
    const categories = await API.getCategories()
    this.setState({ categories })
  }
  openAddPostModal = () => this.setState({ addPostModalOpen: true })
  closeAddPostModal = () => this.setState({ addPostModalOpen: false })
  render() {
    return (
      <div>
        <Navbar title={'Readable'} subtitle={'Share. Read. Comment.'} />
        <div className='container no-pad'>
          <div className='row'>
            <div className='twelve-col flex'>
              {this.state.categories.map(category => (
                <Category key={category.path} name={category.name} />
              ))}
            </div>
          </div>
        </div>
        <ActionButton
          action={this.openAddPostModal}
          position={{bottom: '25px', right: '25px'}}
          icon={<MdAdd size={30} />}
        />
        <Modal
          isOpen={this.state.addPostModalOpen}
          onRequestClose={this.closeAddPostModal}
        >
          {this.state.addPostModalOpen &&
            <CreatePost categories={this.state.categories} />}
        </Modal>
      </div>
    )
  }
}
