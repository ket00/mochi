import React from 'react';
import './App.css';

export default function Header() {
    return(
        <header>
            <nav className="nav">
                <div className="logo">
                    <img src="./images/logo.jpg"/>
                    <h1>sweet mochies</h1>
                </div>
                <ul className="nav-items">
                    <li>about</li>
                    <li>photos</li>
                    <li>videos</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}