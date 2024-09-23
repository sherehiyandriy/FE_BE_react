import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";





class CreatePost extends Component {

  state = {
      post: {
        title: '',
        description: ''
      },
      loading: true,
  }

  

  handleChange = (e) => {
      const post = {...this.state.post}
      post[e.target.name] = e.target.value
      this.setState({ post })
    }

  handleSubmit = async event => {
    event.preventDefault();
    const post = {
      title: this.state.post.title,
      description: this.state.post.description
    }
    console.log(post);
    await axios.post('http://localhost:5000/posts/new', post)
    
    .then(res => {
      if (res.status === 200)
        toast.success('post successfully created')
      else
        Promise.reject()
    })
    .catch(err => toast.error('Something went wrong'))
    window.location = '/posts'; 
  }
  
 



  

  render() { 
    
    return ( 
      <>
       <div className="sweet-loading d-none">
        <ClipLoader
          loading={this.state.loading}
          speedMultiplier={1.5}
        />
      </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group"> 
            <label>title:</label>
            <input  type="text"
              required
              className="form-control"
              name= "title"
              value={this.state.post.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
              required
              className="form-control"
              name= "description"
              value={this.state.post.description}
              onChange= {this.handleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create post" className="btn btn-primary" />
          </div>
        </form>
      </>
     );
  }
}
 
export default CreatePost;