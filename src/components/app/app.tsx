import './app.scss';

import React from 'react';

import cards from '../../modules/cards';
import Card from '../card/card';
import SearchBar from '../searchBar/searchBar';

type AppStateType = {
  cardIsLike: boolean[];
};

export default class App extends React.Component<{}, AppStateType> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      cardIsLike: [false, false],
    };
  }

  handleLikedState = (index: number) => {
    const { cardIsLike } = this.state;
    cardIsLike[index] = true;

    this.setState({
      cardIsLike,
    });
  };

  render() {
    const { cardIsLike } = this.state;
    return (
      <div className="main">
        <h1 className="logo">React components task</h1>
        <SearchBar />
        <div className="cards__field">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isLiked={cardIsLike[card.id - 1]}
              onHandleLiked={this.handleLikedState}
            />
          ))}
        </div>
      </div>
    );
  }
}
