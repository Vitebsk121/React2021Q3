import './NewsDetail.scss';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { INewsCard } from '../../types/interfaces';

const NewsDetail: React.FC = () => {
  const { state } = useLocation<INewsCard>();
  return (
    <div>
      {state ? (
        <>
          <div
            style={{
              backgroundImage: `url(${state!.urlToImage})`,
              height: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <h1>{`id:${state.id}`}</h1>
          <h2>{`author: ${state.author}`}</h2>
          <h2>{`publishedAt: ${state.publishedAt}`}</h2>
          <h2>{`source: ${state.source?.name}`}</h2>
          <h2>
            url:
            <a href={state.url}> Read in source</a>
          </h2>
          <h2>{`title: ${state.title}`}</h2>
          <h2>{`content: ${state.content}`}</h2>
          <h2>{`description: ${state.description}`}</h2>
        </>
      ) : null}
    </div>
  );
};

export default NewsDetail;
