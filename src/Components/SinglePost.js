import React, { Component } from 'react';
import axios from 'axios';

class SinglePost extends Component {

  
 state = {
  posts:{
    title: '',
    description: ""
  }
 }

 async  componentDidMount() {
  const {data: posts} = await axios.get("http://localhost:5000/posts/");
  this.setState({posts})
}






  render() { 
    return ( 
    <>
      {this.state.posts.title}
    </> 
    );
  }
}
 
export default SinglePost;