import React, { Component } from 'react'
import Modal from 'react-modal'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'
import { Category, CreatePost, Navbar } from './'
import { getCategories, savePost } from '../actions'
import MdAdd from 'react-icons/lib/md/add'

class App extends Component {
  state = {
    addPostModalOpen: false
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCategories())
  }
  openAddPostModal = () => this.setState({ addPostModalOpen: true })
  closeAddPostModal = () => this.setState({ addPostModalOpen: false })
  savePost = post => {
    this.closeAddPostModal()
    this.props.dispatch(savePost(post))
  }
  render() {
    const {
      categories = [],
      classes: { categoryBox, modalBtn, pad, row }
    } = this.props

    return (
      <div>
        <Navbar title="Readable" />
        <div className={pad}>
          <div className={categoryBox}>
            <Grid container justify="center" className={row}>
              <Typography variant="title">Categories</Typography>
            </Grid>
            <Grid container justify="center" className={row}>
              {categories.map(({ name }) => (
                <Category key={name} name={name} />
              ))}
            </Grid>
          </div>
        </div>
        <Button
          variant="fab"
          color="secondary"
          onClick={this.openAddPostModal}
          className={modalBtn}>
          <MdAdd />
        </Button>
        <Modal
          isOpen={this.state.addPostModalOpen}
          onRequestClose={this.closeAddPostModal}
        >
          {this.state.addPostModalOpen &&
            <CreatePost categories={categories} onSubmit={this.savePost} />}
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  categories: app.categories,
})

const styles = ({ spacing: { unit } }) => ({
  categoryBox: {
    padding: unit,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: 10,
  },
  modalBtn: {
    position: 'absolute',
    bottom: unit * 3,
    right: unit * 3,
  },
  pad: { padding: unit * 3 },
  row: { paddingTop: unit },
})

const enhanceComponent = compose(connect(mapStateToProps), withStyles(styles))

export default enhanceComponent(App)
