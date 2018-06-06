import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { PostForm } from './'

const CreatePost = ({
  classes: { row },
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
      <PostForm onSubmit={() => console.log('form submitted!')} />
    </Grid>
  </Grid>
)

const styles = ({ spacing: { unit } }) => ({
  row: {
    marginTop: unit,
  },
})

export default withStyles(styles)(CreatePost)
