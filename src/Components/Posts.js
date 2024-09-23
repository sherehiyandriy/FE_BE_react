import React, {Component} from 'react';
import http from './Services/httpServices';
import config from '../config.json';
import CreatePost from './Common/CreatePost';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';






class Posts extends Component {
  
  state = {
    posts: []
    }
   
 async  componentDidMount() {
    const {data: posts} = await http.get(config.apiEndPoint);
    this.setState({posts})
  }

  
  handleDelete = async post => {

    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts});

    try {
      await http.delete("http://localhost:5000/posts/" + post._id);
    } catch(ex){
        if(ex.response && ex.response.status === 404) 
          toast.error("This post has been Already deleted");
          this.setState({ posts: originalPosts })
      }
  };



  render() { 
    return ( 
      <>
      <CreatePost />
      <h1>total {this.state.posts.length} posts in Database</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>
              Title</th>
            <th>description</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {this.state.posts.map((post, index) => 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to= {post._id}>{post.title}</Link>
              </td>
              <td>{post.description}</td>
              <td>
                <button onClick={ () => this.handleDelete(post)}>delete</button>
              </td>
            </tr>
            )}
          </tbody>
      </table>
      
      </>
     );
  }
}
 
export default Posts;