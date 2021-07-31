import './card.scss';

import React from 'react';
import CardObj from '../../modules/interfaces';


export default function Card({ card }: CardObj): JSX.Element {
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
        <p className="card__info-tite">{card.subtitle}</p>
        <div className="card__footer">
          <button type="button"
          >Add to wishlist</button>
          <div className='card__like' />
      </div>
      </div>
    </div>
  );
}
