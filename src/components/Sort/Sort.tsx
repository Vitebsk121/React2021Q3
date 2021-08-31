import './Sort.scss';

import React from 'react';

import useTypedSelector from '../../hooks/useTypedSelector';

type SortProps = {
  handleSort: (sortBy: string) => void;
  options: string[];
};

const Sort: React.FC<SortProps> = ({ handleSort, options }: SortProps) => {
  const { sortBy } = useTypedSelector((state) => state.newsCards);
  return (
    <label htmlFor="sortBy">
      Sort by:
      <select
        value={sortBy}
        id="sortBy"
        onChange={(event) => {
          handleSort((event?.target as HTMLSelectElement).value);
          // eslint-disable-next-line prettier/prettier
        }}
      >
        <option disabled>Sort by: </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Sort;
