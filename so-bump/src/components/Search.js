import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
  }

  newSearch(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <input className="sobump-search" onChange={ event => this.newSearch(event.target.value)} placeholder="Search Giphy" />
    );
  }
}

export default Search;