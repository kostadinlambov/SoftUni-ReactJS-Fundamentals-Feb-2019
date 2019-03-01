import React, { } from 'react';
import './RegisterForm.css';
import withWarning from './../../hocs/withWarning';


const RegisterForm = (props) => {
    return (
        <section className="wrapper">
            <header><span className="title">Register</span></header>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" /><br />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" /><br />


                <label htmlFor="confirm-password"> Repeat Password:</label>
                <input type="password" id="confirm-password" /><br />

                <input type="submit" value="Register" />
            </form>
        </section>
    )
}

const RegisterFormWithWarning = withWarning(RegisterForm)

export default RegisterForm;

export {
    RegisterFormWithWarning
} 