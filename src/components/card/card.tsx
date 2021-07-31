import './card.scss';

import React from 'react';
import CardObj from '../../modules/interfaces';

function addLike(svg: JSX.Element) {
  const cardLike = document.querySelector('.card__like');
}

export default function Card(props: CardObj) {
  const id = props.id;
  console.log(id);
  return (
    <div className="card" id={`card${String(props.id)}`}>
      <div className="card-pic" style={{ backgroundImage: `url(${props.imgURL})` }} />
      <div className="card__main">
        <a className="card__link" href={props.link}>
          <h3 className="card__main-title">{props.name}</h3>
        </a>
        <a className="card__link" href={props.adressLink}>
          <p className="card__main-adress">{props.adress}</p>
        </a>
        <p className="card__date">{props.date}</p>
      </div>
      <div className="card__info">
        <p className="card__info-tite">{props.subtitle}</p>
        <div className="card__footer">
          <button type="button"
          >Add to wishlist</button>
          <div className='card__like' />
      </div>
      </div>
    </div>
  );
}
