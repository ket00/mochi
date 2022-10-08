import React from 'react';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import CardsData from './cardsData';

function App() {
    const cardElements= CardsData.map(card => {
        return <Contact img={card.img} name={card.name} phone={card.phone} email={card.email} />
    })
    return (
        <div>
            <Header />
        <div className="contacts">
            {cardElements}
            </div>
            </div>
            
    )
}


export default App;
