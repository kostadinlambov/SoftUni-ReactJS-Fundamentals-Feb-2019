import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    debugger;

    fetch("http://localhost:9999/auth/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state })
    })
      .then(res => res.json())
      .then(data => {
        debugger;
        console.log('Login data: ', data)
        const { isAdmin, token, username, message, userId } = data
        if (token) {
          localStorage.setItem('isAdmin', isAdmin)
          localStorage.setItem('username', username)
          localStorage.setItem('token', token)


          toast.success(message, {
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
        debugger;
        console.log('Login error: ', err)
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
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
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

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
