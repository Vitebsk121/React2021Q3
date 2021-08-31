/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import './Main.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import Filter from '../../../components/Filter/Filter';
import NewsCard from '../../../components/NewsCard/NewsCard';
import Sort from '../../../components/Sort/Sort';
import useTypedSelector from '../../../hooks/useTypedSelector';
import fetchNewsCards from '../../../store/actions/newsCards';
import { TSortType } from '../../../types/interfaces';

const Main = () => {
  // eslint-disable-next-line prettier/prettier
  const {
    newsCards,
    currentPage,
    countOfPages,
    langFilter,
    sortBy,
    searchValue,
  } = useTypedSelector((state) => state.newsCards);
  const dispatch = useDispatch();
  const handleLangFilter = async (filter: string) => {
    dispatch(fetchNewsCards(currentPage!, filter, sortBy!, searchValue!));
  };
  const handleSort = async (sort: TSortType) => {
    dispatch(fetchNewsCards(currentPage!, langFilter!, sort, searchValue!));
  };
  const handleCurrentPage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let curPage: number = +(event.target as HTMLFormElement).currentPage.value;

    if (countOfPages && curPage > countOfPages) curPage = countOfPages;

    dispatch(fetchNewsCards(curPage, langFilter!, sortBy!, searchValue!));
  };
  return (
    <div className="Main">
      {newsCards && newsCards.length > 0 ? (
        <div className="sortBtnWrapper">
          <Filter
            handleLangFilter={handleLangFilter}
            options={['ru', 'en', 'fr', 'it']}
          />
          <Sort handleSort={handleSort} options={['newest', 'popularity', 'relevancy']} />
        </div>
      ) : null}
      <ul className="cardsField">
        {newsCards
          ? newsCards.map((card, index) => {
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
                    data-testid='NewsCard'
                    author={author}
                    content={content}
                    description={description}
                    publishedAt={publishedAt}
                    title={title}
                    url={url}
                    key={key + Math.random() * 1000}
                    id={index}
                    urlToImage={urlToImage}
                    source={source}
                  />
                </li>
              );
            })
          : null}
      </ul>
      {newsCards && newsCards.length > 0 ? (
        <form className="page-info" onSubmit={(event) => handleCurrentPage(event)}>
          Page
          <input type="text" defaultValue={currentPage} id="currentPage" />
          of
          <span>{countOfPages}</span>
          <button type="submit">GO</button>
        </form>
      ) : null}
    </div>
  );
};

export default Main;
