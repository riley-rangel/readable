import React, { Component } from 'react'
import Modal from 'react-modal'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as API from '../API'
import { ActionButton, Category, CreatePost, Navbar } from './'
import MdAdd from 'react-icons/lib/md/add'

const theme = createMuiTheme()

class App extends Component {
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
    const { classes: { categoryBox, modalBtn, pad, row } } = this.props

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
            <CreatePost categories={this.state.categories} />}
        </Modal>
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
  modalBtn: {
    position: 'absolute',
    bottom: unit * 3,
    right: unit * 3,
  },
  pad: { padding: unit * 3 },
  row: { paddingTop: unit },
})

export default withStyles(styles)(App)
