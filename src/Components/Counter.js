import React, { Component } from 'react';

class Counter extends Component {


  render() { 
    
    return (
      <div>
        <span className={this.badgeClass()}>{this.formatCount()}</span>
        <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary m-2'>+</button>
        <button onClick={()=> this.props.onDecrement(this.props.counter)} className='btn btn-secondary m-2' disabled={this.props.counter.value ===0 ? 'disabled' : ''}>-</button>
        <button onClick={()=> this.props.onDelete(this.props.counter.id)} className='btn btn-danger'>X</button>
      </div>
    );
  }


  badgeClass () {
    let badge = "badge m-2 badge-";
    badge += this.props.counter.value === 0 ? "warning" : "primary";
    return badge;
  }
  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? 'zero' : value
  }
}
 
export default Counter;