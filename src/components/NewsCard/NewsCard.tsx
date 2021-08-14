/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/indent */
import './NewsCard.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';

import { INewsCard } from '../../shared/interfaces';

const NewsCard = ({
  title,
  author,
  description,
  publishedAt,
  url,
  source,
  urlToImage,
  id,
}: INewsCard) => {
  const history = useHistory();
  return (
    <div className="NewsCard" onClick={() => history.push(`details/${id}`)}>
      <div className="NewsCard__pic" style={{ backgroundImage: `url(${urlToImage})` }} />
      <div className="NewsCard__content">
        <h3>{title}</h3>
        <p className="NewsCard__info date">
          {new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          {' в '}
          {new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
        <p className="NewsCard__info author">{author}</p>
        <p className="NewsCard__info source">{source?.name}</p>
        <p className="NewsCard__description">
          {description}
          <a href={url} target="_blank" rel="noreferrer">
            READ IN SOURCE
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
