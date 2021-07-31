import './card.scss';

import React from 'react';
import CardObj from '../../modules/interfaces';


// export default class Card extends React.Component {
//   constructor({ card }: CardObj) {
//     super(card);
//     this.state = {
//       isLiked: false,
//       cardProp: card,
//     }
//  }

//   render() {
//     const id = this.state.card.id;
//     return (
//       <div className="card" id={`card${String(this.state.cardProp)}`}>
//       <div className="card-pic" style={{ backgroundImage: `url(${card.imgURL})` }} />
//       <div className="card__main">
//         <a className="card__link" href={card.link}>
//           <h3 className="card__main-title">{card.name}</h3>
//         </a>
//         <a className="card__link" href={card.adressLink}>
//           <p className="card__main-adress">{card.adress}</p>
//         </a>
//         <p className="card__date">{card.date}</p>
//       </div>
//       <div className="card__info">
//         <p className="card__info-tite">{card.subtitle}</p>
//         <div className="card__footer">
//           <button className='card__footer-btn' type="button"
//           >Add to wishlist</button>
//           <div className='card__like' />
//       </div>
//       </div>
//     </div>
//     )
//   }
// }

export default function Card(props: { isLiked: boolean; card: CardObj; onHandleLiked: React.MouseEventHandler<HTMLButtonElement>; }): JSX.Element {
  let isLiked = 'card__no-like';
  if (props.isLiked === true) isLiked = 'card__like'
  return (
    <div className="card" id={`card${String(props.card.id)}`}>
      <div className="card-pic" style={{ backgroundImage: `url(${props.card.imgURL})` }} />
      <div className="card__main">
        <a className="card__link" href={props.card.link}>
          <h3 className="card__main-title">{props.card.name}</h3>
        </a>
        <a className="card__link" href={props.card.adressLink}>
          <p className="card__main-adress">{props.card.adress}</p>
        </a>
        <p className="card__date">{props.card.date}</p>
      </div>
      <div className="card__info">
        <p className="card__info-tite">{props.card.subtitle}</p>
        <div className="card__footer">
          <button 
            className='card__footer-btn' 
            type="button"
            onClick={props.onHandleLiked}
          >Add to wishlist</button>
          <div 
          className={isLiked}
          />
      </div>
      </div>
    </div>
  );
}
