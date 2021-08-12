/* eslint-disable @typescript-eslint/indent */
import './NewsCard.scss';

import React from 'react';

import { INewsCard } from '../../shared/interfaces';

export default function NewsCard({
  title,
  author,
  description,
  publishedAt,
  url,
  source,
  urlToImage,
}: INewsCard) {
  return (
    <a className="NewsCard" href={url} target="_blank" rel="noreferrer">
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
        <p className="NewsCard__description">{description}</p>
      </div>
    </a>
  );
}
