import React from 'react'
import classNames from 'classnames'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Grid, MenuItem, withStyles } from '@material-ui/core'
import { SelectField, TextInput } from './'
import { POST_FORM } from '../constants'
import { capitalize } from '../helpers'

const CategoryOption = ({name, path}) => (
  <MenuItem key={path} value={name}>
    {capitalize(name)}
  </MenuItem>
)

const PostForm = ({
  categories = [],
  classes: { flexCenter, input, margin, row, section },
  handleSubmit,
  reset,
}) => (
  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
          {categories.map(CategoryOption)}
        </Field>
      </Grid>
      <Grid item xs={12} className={classNames(flexCenter, row)}>
        <Field
          component={TextInput}
          className={input}
          fullWidth={true}
          label="Write the Post"
          multiline={true}
          name="body"
          placeholder="You may have heard..."
          type="text"
        />
      </Grid>
    </Grid>
    <Grid container justify="center" className={section}>
      <Button
        className={margin}
        color="secondary"
        onClick={reset}
        variant="raised">
          Clear
      </Button>
      <Button
        className={margin}
        color="primary"
        type="submit"
        variant="raised">
          Submit
      </Button>
    </Grid>
  </form>
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
  },
})

const mapStateToProps = ({ app: { categories } }) => ({
  categories,
})

const enhanceComponent = compose(
  withStyles(styles),
  connect(mapStateToProps),
  reduxForm({form: POST_FORM}),
)

export default enhanceComponent(PostForm)
