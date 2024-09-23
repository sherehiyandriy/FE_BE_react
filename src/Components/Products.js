import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  state = { 
    Products: [
      {id:1, name: "Product 1"},
      {id:2, name: "Product 2"},
      {id:3, name: "Product 3"},
    ]
   } 
  render() { 
    return (
      <>
        <h1>Products</h1>
  
        {this.state.Products.map( product_link => 
          <li key={product_link.id}>
            <Link example= {'yahoo'}  to={`/products/${product_link.id}`}> {product_link.name} </Link>
          </li>
        )}
      </>
     
    );
  }
}
 
export default Products;