import React, { Component } from 'react';

class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault()
    console.log("form submitted successfully")
  };
  

  render() { 
    return (
       <>
       <h1>Login</h1>
       <form onSubmit= {this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor=''>UserName</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor=''>password</label>
          <input type='text' className='form-control' />
        </div>
        <input type='submit' className='btn btn-primary' />
       </form>
       </> 
    );
  }
}
 
export default LoginForm;