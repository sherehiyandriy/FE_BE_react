import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='#'> Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className='nav-item nav-link'>Home</Link>
            <Link to='/posts' className='nav-item nav-link'>Post</Link>
            <Link to='/products' className='nav-item nav-link'>Products</Link>
            <Link to='/login' className='nav-item nav-link'>Login</Link>
            <Link to='/register' className='nav-item nav-link'>Register</Link>
          </div>
        </div>
      </nav>
    </>
   );
}

export default NavBar;
