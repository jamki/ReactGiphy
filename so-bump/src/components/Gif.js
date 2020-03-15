import React from 'react';

class Gif extends React.Component {
  constructor() {
    super();
  }

  newSearch(keyword) {
    console.log(keyword);
  }

  render() {
    return (
      <li>
        <img src="https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif" alt="" />
      </li>
    );
  }
}

export default Gif;