import './app.scss';

import React from 'react';

import cards from '../../modules/cards';
import Card from '../card/card';
import SearchBar from '../searchBar/searchBar';

function App() {
  return (
    <div className="main">
      <h1 className="logo">React components task</h1>
      <SearchBar />
      <div className="cards__field">
        {cards.map((card) => {
            <Card key={card.id} card={card} />
          })
        }
      </div>
    </div>
  );
}

export default App;
