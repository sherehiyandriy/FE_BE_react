import React, {Component} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Common/NavBar';
import Routing from './Components/Common/Routng';


class App extends Component {
  state = {}
  render() { 
    return (
      <>
      <ToastContainer />
        <NavBar />
        <div className="container py-4">
          <Routing />
        </div>
      </>
    
    );
  }
}
 
export default App;
