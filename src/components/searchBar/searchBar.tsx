import './searchBar.scss';

import React from 'react';

export default function SearchBar(): JSX.Element {
  function stopEvent(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault();
  }

  return (
    <form className="searchBar">
      <input type="search" className="searchBar__field" placeholder="search" required />
      <button type="submit" className="searchBar__btn" onClick={(e) => stopEvent(e)}>
        Search
      </button>
    </form>
  );
}
