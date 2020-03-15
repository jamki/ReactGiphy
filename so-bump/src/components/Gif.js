import React from 'react';

class Gif extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.gifData.images.downsized_large.url} alt={this.props.gifData.title} />
      </li>
    );
  }
}

export default Gif;