import React, { Component } from 'react'
import Counter from "./Counter"

class Counters extends Component {
  state = { 
    counters: [
      {id:1, value:4},
      {id:2, value:2},
      {id:3, value:1},
      {id:4, value:0},
    ]
   };

   handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters: counters});
   }
   handleDecrement = (counter)=> {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters: counters});
   }

   handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId );
    this.setState({counters})
   };
   
  render() { 
    
    return (
    <div>
     {this.state.counters.map(counter => 
     <Counter 
     key={counter.id} 
     onDelete={this.handleDelete} 
     onIncrement= {this.handleIncrement}
     onDecrement = {this.handleDecrement}
     counter={counter}
      />
      
     )}
  
    
    </div>);
  }
}
 
export default Counters;