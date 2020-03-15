import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src="https://i.giphy.com/media/3y0oCOkdKKRi0/giphy.gif" alt="Loading…" />
    );
  }
}

export default Loading;