/* eslint-disable @typescript-eslint/indent */
import './Main.scss';

import React from 'react';

import NewsCard from '../../components/NewsCard/NewsCard';
import { IMainProps } from '../../shared/interfaces';

export default function Main({ cards }: IMainProps) {
  return (
    <div className="Main">
      <div className="sortBtnWrapper">
        <label htmlFor="language">
          Sort by language:
          <select id="language">
            <option>none</option>
            <option>en</option>
            <option>ru</option>
            <option>de</option>
            <option>fr</option>
            <option>it</option>
          </select>
        </label>
        <label htmlFor="sortBy">
          Sort by:
          <select id="sortBy">
            <option>newest</option>
            <option>popularity</option>
            <option>relevancy</option>
          </select>
        </label>
      </div>
      <div className="cardsField">
        {cards
          ? cards.map((card, index) => {
              const key = card.author + index;
              const {
                author,
                content,
                description,
                publishedAt,
                title,
                url,
                urlToImage,
              } = card;
              return (
                <NewsCard
                  author={author}
                  content={content}
                  description={description}
                  publishedAt={publishedAt}
                  title={title}
                  url={url}
                  urlToImage={urlToImage}
                  key={key}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
