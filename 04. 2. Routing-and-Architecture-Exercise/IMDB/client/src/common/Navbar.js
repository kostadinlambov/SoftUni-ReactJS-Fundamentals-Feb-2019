import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        const { onLogout } = this.props;
        const loggedIn = localStorage.getItem('token') != null;
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        console.log('loggedIn', loggedIn)
        console.log('isAdmin', isAdmin)
        debugger;
        return (
            <header className="">
                <NavLink className=" logo" to="/">Interactive IMDB</NavLink>
                <ul className="header-right">
                    <li className=""><NavLink className="" to="/">Home</NavLink></li>
                    {loggedIn && <li className=""><NavLink className="" to="#">Welcome {localStorage.getItem('username')}</NavLink></li>}
                    {(loggedIn && isAdmin) && <li className=""><NavLink className="" to="/create">Create</NavLink></li>}

                    {!loggedIn && <li className=" "><NavLink className="" to="/register">Register</NavLink></li>}
                    {!loggedIn && <li className=" "><NavLink className="" to="/login">Login</NavLink> </li>}
                    {loggedIn && <li className="nav-item"><NavLink exact to="#" className="nav-link " onClick={onLogout} >Logout</NavLink></li>}
                </ul>
            </header>
        )
    }
}
