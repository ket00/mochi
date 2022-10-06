import React from 'react';
import './App.css';
import Contact from './Contact';
import Header from './Header';

function App() {
    return (
        <div>
            <Header />
        <div className="contacts">
            <Contact
                img="./images/mochies-1.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                 />
            <Contact
                img="./images/mochi-2.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com" 
                />
            <Contact
                img="./images/mochi-3.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                 />
            <Contact
                img="./images/mochies-4.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
                 />
        </div>
        </div>
    )
}


export default App;
