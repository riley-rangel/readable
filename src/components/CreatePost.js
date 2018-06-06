import React from 'react'
import classNames from 'classnames'
import { compose } from 'redux'
import {
  Button,
  Grid,
  MenuItem,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SelectField, TextInput } from './'
import { capitalize } from '../helpers'

const categoryOption = ({name, path}) => (
  <MenuItem key={path} value={name}>
    {capitalize(name)}
  </MenuItem>
)

const CreatePost = ({
  categories = [],
  classes: { margin, flexCenter, input, row, section },
}) => (
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
            <Field
              className={input}
              component={TextInput}
              label="Add a Title"
              name="title"
              placeholder="Let vs. Const"
              type="text"
            />
          </Grid>
          <Grid item md={4} xs={12} className={flexCenter}>
            <Field
              className={input}
              component={TextInput}
              label="Add an Author"
              name="author"
              placeholder="mysteryPoster1"
              type="text"
            />
          </Grid>
          <Grid item md={4} xs={12} className={flexCenter}>
            <Field
              className={input}
              component={SelectField}
              id="category"
              label="Select a Category"
              name="category">
              {categories.map(categoryOption)}
            </Field>
          </Grid>
          <Grid item xs={12} className={classNames(flexCenter, row)}>
            <Field
              component={TextInput}
              className={input}
              fullWidth={true}
              label="Write the Post"
              multiline={true}
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

const enhanceComponent = compose(
  withStyles(styles),
  reduxForm({
    form: 'post',
  }),
)

export default enhanceComponent(CreatePost)
