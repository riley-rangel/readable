import React, { Component } from 'react'
import Modal from 'react-modal'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as API from '../API'
import ActionButton from './ActionButton'
import Category from './Category'
import CreatePost from './CreatePost'
import Navbar from './Navbar'
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
