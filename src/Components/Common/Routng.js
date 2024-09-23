import React, {Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import Post from '../Posts';
import ProductDetails from '../ProductDetails';
import Register from '../Register'
import LoginForm from './LoginForm';
import SinglePost from '../SinglePost';

class Routing extends Component {
  state = {  } 
  render() { 
    return (
      <Routes>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path="/products" element= {<Products/>} />
        <Route path="/" element= {<><Home/></>} />
        <Route path="/posts" element= {<Post/>} />
        <Route path='/posts/:id' element={< SinglePost />} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/login" element= {<LoginForm/>} />
      </Routes>
    );
  }
}
 
export default Routing;