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
  urlToImage,
}: INewsCard) {
  return (
    <a className="NewsCard" href={url} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <p>{publishedAt}</p>
      <p>{author}</p>
      <p>{description}</p>
      <div className="card-pic" style={{ backgroundImage: `url(${urlToImage})` }} />
    </a>
  );
}
