import React, {Component} from 'react';
import { getMovies } from "../Servvices/fakeMovies"
import Like from "./Common/Like"
import Pagination from './Common/Pagination';

class Movies extends Component {
  state = { 
    movies: getMovies(),
    pageSize : 4,
   };

   handleDelete = movie => {
      const filter_del = this.state.movies.filter(m => m.id !== movie.id)
      this.setState({movies: filter_del})
   }

   handleLike = (movie)=> {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
   }

   handlePageChange = (page)=> {
    console.log(page);
   }


   
  render() {
    const {length: count} = this.state.movies
    if(this.state.movies.length === 0) {
      return <p>There are no movies in databse</p> 
    } 
    return (
      <div>
        <p>showing {this.state.movies.length} movies in databse</p>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>title</th>
              <th>year</th>
              <th>runtime</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => 
              <tr key={movie.id}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Runtime}</td>
                <td> < Like liked={movie.liked} onClickLike={()=> this.handleLike(movie)} /> </td>
                <td><button onClick={ () => this.handleDelete(movie)} className='btn btn-danger btn-sm float-right'>Delete</button></td>
              </tr>
              )}
            
          </tbody>
        </table>
        <Pagination 
        itemsCount = {count}
        pageSize= {this.state.pageSize}
        onPageChange = {this.handlePageChange}

        />
        
      </div>
    );
  }
}
 
export default Movies;