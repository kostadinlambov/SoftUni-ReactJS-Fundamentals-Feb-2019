import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'

import Movie from './Movie'
import Trailer from './Trailer'
import StoryLine from './StoryLine'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      showStoryLine: false,
      showTrailer: false,
      trailer: '',
      title: '',
      storyLine: '',
      selectedMovieId: 0

    }

    this.findMovieId = this.findMovieId.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:9999/feed/movies')
      .then(res => res.json())
      .then(data => {
        console.log('movies: ', data);
        this.setState({
          movies: data.movies
        })
      })
  }

  findMovieId(currentMovieId) {
    return this.state.movies.findIndex((movieId) => movieId._id === currentMovieId)
  }

  render() {
    return (
      <div className="Home">
        <h1>All Movies</h1>
      
        <Switch>
          <Route exact path={`/home/storyLine/:id`} render={(props) => {
            console.log('props.match.params.id: ', props.match.params.id)
            const index = this.findMovieId(props.match.params.id);
            return <StoryLine {...props} movie={this.state.movies[index]} />
          }}
          />
           <Route exact path={`/home/trailer/:id`} render={(props) => {
            console.log('props.match.params.id: ', props.match.params.id)
            const index = this.findMovieId(props.match.params.id);
            return <Trailer {...props} movie={this.state.movies[index]} />
          }}
          />
        </Switch>
        <ul className="movies">
          {this.state.movies.map(movie =>
            <Movie
              {...movie}
              key={movie._id}
            />
          )}

        </ul>
      </div>
    );
  }
}

export default Home;
