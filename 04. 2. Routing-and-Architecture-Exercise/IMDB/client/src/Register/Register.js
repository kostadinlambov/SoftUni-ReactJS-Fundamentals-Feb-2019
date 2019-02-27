import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    debugger;

    fetch("http://localhost:9999/auth/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Register data: ', data);
        const { username, message } = data;

        if (username) {
          toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          });
          this.props.history.push('/login')

        } else {
          toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      })
      .catch(err => console.log('Register error: ', err))
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
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
