import React, { Component } from 'react';
import CardMovie from './cardMovie';


// import Display from './display';

class Movies extends Component {
  constructor() {
    super();

    // Initial State
    this.state = {
      movies: [],
    };

    this.loadMovies = function () {
      return fetch('http://localhost:3000/movie/list').then((res) => res.json());
    };
  }

  componentDidMount() {
    this.asyncRequest = this.loadMovies().then(
      (externalData) => {
        this.asyncRequest = null;
        this.setState({ movies: externalData });
      },
    );
  }

  componentWillUnmount() {
    if (this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie) => (
          <CardMovie movie={movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
