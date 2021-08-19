import './Filter.scss';

import React from 'react';

import useTypedSelector from '../../hooks/useTypedSelector';

type FilterProps = {
  handleLangFilter: (langFilter: string) => void;
  options: string[];
};

const Filter: React.FC<FilterProps> = ({ handleLangFilter, options }: FilterProps) => {
  const { langFilter } = useTypedSelector((state) => state.newsCards);
  return (
    <label htmlFor="language">
      Filter by language:
      <select
        value={langFilter}
        id="language"
        onChange={(event) => {
          handleLangFilter((event?.target as HTMLSelectElement).value);
          // eslint-disable-next-line prettier/prettier
        }}
      >
        <option disabled>Filter by: </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Filter;
