import './Detail.scss';

import React from 'react';

import { INewsCard } from '../../shared/interfaces';

type NewsDetailsProps = {
  match: { params: { id: string } };
  cards: INewsCard[];
};

const NewsDetail: React.FC<NewsDetailsProps> = (props) => {
  const { match } = props;
  return (
    <>
      <h1>{match.params.id}</h1>
      <h2>wlfdksdfsd</h2>
      <div className="asdasd">
        <ul>
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
};

export default NewsDetail;
