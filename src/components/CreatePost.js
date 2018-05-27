import React, { PureComponent } from 'react'
import classNames from 'classnames'
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import { capitalize } from '../helpers'

const categoryOption = ({name, path}) => (
  <MenuItem key={path} value={name}>
    {capitalize(name)}
  </MenuItem>
)

class CreatePost extends PureComponent {
  // make stateless upon redux connect
  state = {
    category: '',
  }
  
  setCategory = category => this.setState({ category })
  render() {
    const {
      categories = [],
      classes: { margin, flexCenter, input, row, section },
    } = this.props
    const { category } = this.state // remove upon stateless

    return (
      <Grid container justify="center">
        <Grid item md={8} sm={10} xs={12}>
          <Grid container justify="center">
            <Typography variant="headline">Create a New Post</Typography>
          </Grid>
          <Grid container justify="center" className={row}>
            <Typography variant="subheading">
              Submit a new post below for all Readable users!
            </Typography>
          </Grid>
          <form onSubmit={e => e.preventDefault()}>
            <Grid container justify="center" className={row}>
              <Grid item md={4} xs={12} className={flexCenter}>
                <TextField
                  className={input}
                  label="Add a Title"
                  name="title"
                  placeholder="Let vs. Const"
                  type="text"
                />
              </Grid>
              <Grid item md={4} xs={12} className={flexCenter}>
                <TextField
                  className={input}
                  label="Add an Author"
                  name="author"
                  placeholder="mysteryPoster1"
                  type="text"
                />
              </Grid>
              <Grid item md={4} xs={12} className={flexCenter}>
                <FormControl className={input}>
                  <InputLabel htmlFor="category">Select a Category</InputLabel>
                  <Select
                    id="category"
                    input={<Input id="category" name="category" value={category} />}
                    onChange={({target}) => this.setCategory(target.value)}>
                      {categories.map(categoryOption)}
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} className={classNames(flexCenter, row)}>
                <TextField
                  className={input}
                  fullWidth
                  label="Write the Post"
                  multiline
                  name="content"
                  placeholder="You may have heard..."
                  type="text"
                />
              </Grid>
            </Grid>
            <Grid container justify="center" className={section}>
              <Button
                variant="raised"
                color="secondary"
                className={margin}>
                  Clear
              </Button>
              <Button
                variant="raised"
                color="primary"
                className={margin}>
                  Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}

const styles = ({ spacing: { unit } }) => ({
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: `calc(100% - ${unit * 2}px)`,
  },
  margin: {
    margin: unit,
  },
  row: {
    marginTop: unit,
  },
  section: {
    marginTop: unit * 3,
  }
})

export default withStyles(styles)(CreatePost)
