/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import './Main.scss';

import React from 'react';

import NewsCard from '../../components/NewsCard/NewsCard';
import { IMainProps } from '../../shared/interfaces';

export default function Main({
  cards = [],
  handleSort,
  handleLangFilter,
  currentPage,
  countOfPages,
  setPage,
}: IMainProps) {
  return (
    <div className="Main">
      {cards.length > 0 ? (
        <div className="sortBtnWrapper">
          <label htmlFor="language">
            Filter by language:
            <select
              id="language"
              onChange={(event) => {
                handleLangFilter((event?.target as HTMLSelectElement).value);
              }}
            >
              <option>ru</option>
              <option>en</option>
              <option>de</option>
              <option>fr</option>
              <option>it</option>
            </select>
          </label>
          <label htmlFor="sortBy">
            Sort by:
            <select
              id="sortBy"
              onChange={(event) => {
                handleSort((event?.target as HTMLSelectElement).value);
              }}
            >
              <option>newest</option>
              <option>popularity</option>
              <option>relevancy</option>
            </select>
          </label>
        </div>
      ) : null}
      <ul className="cardsField">
        {cards
          ? cards.map((card) => {
              const key = Math.random() * 10000;
              const {
                author,
                content,
                description,
                publishedAt,
                title,
                url,
                source,
                urlToImage,
              } = card;
              return (
                <li key={key}>
                  <NewsCard
                    author={author}
                    content={content}
                    description={description}
                    publishedAt={publishedAt}
                    title={title}
                    url={url}
                    key={key + (Math.random() * 1000)}
                    urlToImage={urlToImage}
                    source={source}
                  />
                </li>
              );
            })
          : null}
      </ul>
      {cards.length > 0 ? (
        <form className="page-info" onSubmit={(event) => setPage(event)}>
          Page
          <input
            type="text"
            defaultValue={currentPage}
            id="currentPage"
          />
          of
          <span>
            {countOfPages}
          </span>
          <button type="submit">GO</button>
        </form>
      ) : null}
    </div>
  );
}
