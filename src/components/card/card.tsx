import './card.scss';

import React from 'react';

import CardObj from '../../modules/interfaces';

type CardProps = {
  isLiked: boolean;
  card: CardObj;
  onHandleLiked: (index: number) => void;
};

export default function Card({ isLiked, card, onHandleLiked }: CardProps): JSX.Element {
  let cardIsLiked = 'card__no-like';
  if (isLiked) cardIsLiked = 'card__like';
  return (
    <div className="card" id={`card${String(card.id)}`}>
      <div className="card-pic" style={{ backgroundImage: `url(${card.imgURL})` }} />
      <div className="card__main">
        <a className="card__link" href={card.link}>
          <h3 className="card__main-title">{card.name}</h3>
        </a>
        <a className="card__link" href={card.adressLink}>
          <p className="card__main-adress">{card.adress}</p>
        </a>
        <p className="card__date">{card.date}</p>
      </div>
      <div className="card__info">
        <p className="card__info-title">{card.subtitle}</p>
        <div className="card__footer">
          <button
            className="card__footer-btn"
            type="button"
            onClick={() => onHandleLiked(card.id - 1)}>
            Add to wishlist
          </button>
          <div className={cardIsLiked} />
        </div>
      </div>
    </div>
  );
}
