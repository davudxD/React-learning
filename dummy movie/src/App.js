import React, {useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies, setMovies] = useState([])

  function fetchMoviesHandler () {
    fetch('https://swapi.dev/api/films')
    .then(res => res.json())
      .then(data => {
        const transformedMovies = data.results.map(item => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date
          }
        })
        console.log(transformedMovies)
        setMovies(transformedMovies)}
      )
  }
  // useEffect(() => {fetchMoviesHandler()},[])
 
  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies = {movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
