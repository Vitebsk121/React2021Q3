import './app.scss';

import React from 'react';

import cards from '../../modules/cards';
import Card from '../card/card';
import SearchBar from '../searchBar/searchBar';

class App extends React.Component {

  state = {
    cardIsLike: [false, false],
  }

  handleLikedState = (index: number) => {
    console.log(`ДО: ${this.state.cardIsLike}`);

    const arr = this.state.cardIsLike;
    arr[index] = true;
    console.log(arr);

    
    this.setState({
      cardIsLike: arr,
    })

    console.log(`После: ${this.state.cardIsLike}`);
    
  }

  render() {
    return (
      <div className="main">
        <h1 className="logo">React components task</h1>
        <SearchBar />
        <div className="cards__field">
          {cards.map((card) => {
             return <Card 
                      key={card.id} 
                      card={card}
                      isLiked={this.state.cardIsLike[card.id - 1]}
                      onHandleLiked={this.handleLikedState.bind(this, (card.id - 1))}
                      />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
