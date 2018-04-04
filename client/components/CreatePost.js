import React from 'react'
import { capitalize } from '../../helpers'
import './CreatePost.css'

const CreatePost = ({ categories = [] }) => {
  return (
    <div>
      <div className='row'>
        <div className='twelve-col'>
          <h5>Create a New Post</h5>
        </div>
      </div>
      <div className='row'>
        <div className='twelve-col' style={{margin: 0}}>
          <form>
            <div className='row'>
              <div className='twelve-col'>
                <p className='heading'>Select a Category</p>
                <select className='category-drop-down' name='category'>
                  {categories.map(category => (
                    <option key={category.path} value={category.name}>
                      {capitalize(category.name)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='twelve-col'>
                <p className='heading'>Add a Title</p>
                <input type='text' name='title' placeholder='Title' />
              </div>
            </div>
            <div className='row'>
              <div className='twelve-col'>
                <p className='heading'>Add an Author</p>
                <input type='text' name='author' placeholder='Author' />
              </div>
            </div>
            <div className='row'>
              <div className='twelve-col'>
                <p className='heading'>Write the Post</p>
                <textarea className='content' type='text' name='content' placeholder='Content' />
              </div>
            </div>
            <div className='row'>
              <div className='twelve-col'>
                <div className='flex just-ctr wrap'>
                  <button className='btn pill btn-warning'>Clear</button>
                  <button className='btn pill btn-primary'>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
