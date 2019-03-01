import React, { } from 'react';
import './Navigation.css'
import withWarning from './../../hocs/withWarning';


const Navigation = () => {
    return (
        <nav>
            <header><span className="title">Navigation</span></header>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Catalog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

const NavigationWithWarning =  withWarning(Navigation)

export default Navigation; 

export {
    NavigationWithWarning
} 