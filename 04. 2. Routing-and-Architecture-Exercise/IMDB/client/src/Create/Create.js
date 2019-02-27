import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './Create.css';

class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      storyLine: '',
      trailerUrl: '',
      poster: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    debugger;

    fetch('http://localhost:9999/feed/movie/create' , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state})
    })
    .then(res => res.json())
    .then(data => {
      debugger;

      console.log('Create data: ', data)

      const {movie, message} = data;

      if (movie) {
        toast.success(message , {
          position: toast.POSITION.TOP_RIGHT
        });
      this.props.history.push('/')

      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT
        });
      }

    })
    .catch(err => {
      console.log('Create error: ', err);
      toast.error(err.message, {
        position: toast.POSITION.TOP_RIGHT
      });
      
    })
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target.name + ' => ' + target.value)

    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <div className="Create">
           <h1>Create</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="storyLine">Story Line</label>
          <input
            type="text"
            id="storyLine"
            name="storyLine"
            value={this.state.storyLine}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="trailerUrl">Trailer Url</label>
          <input
            type="text"
            id="trailerUrl"
            name="trailerUrl"
            value={this.state.trailerUrl}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="poster">Poster</label>
          <input
            type="text"
            id="poster"
            name="poster"
            value={this.state.poster}
            onChange={this.onChangeHandler}
          />

          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
