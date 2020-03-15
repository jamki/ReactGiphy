import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Gif from './components/Gif';
// import Loading from './components/Loading';
import debounce from "lodash.debounce";
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();

    this.apiKey = 'jkZWLAP7QCOLEZr4BcfiVmoqqZ3dCDH2';
    this.resultsPerSearch = 16;
    this.pageLoad = true;

    this.state = {
      results: [],
      // isLoading: false,
      page: 1,
      requestOffset: this.resultsPerSearch,
    }

    this.getGifs();

    // On scroll load more gifs…
    window.onscroll = debounce(() => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !this.pageLoad) {
        this.getGifs();
      }
    }, 100);
  }

  getGifs() {
    const getOffset = () => {
      if (this.pageLoad) {
        return {
          offset: ''
        }
      } else {
        return {
          offset: this.state.requestOffset
        }
      }
    }


    request
      .get(`https://api.giphy.com/v1/gifs/trending`)
      .query({ api_key: this.apiKey })
      .query({ limit: this.resultsPerSearch })
      .query({ rating: 'G' })
      .query( getOffset() )
      .then(res => {
        this.setState({
          results: [...this.state.results, ...res.body.data],
          requestOffset: this.pageLoad ? '' : this.state.page * this.resultsPerSearch,
          page: this.state.page + 1,
        });
      });

    this.pageLoad = false;
  }

  render() {
    // const renderLoading = () => {
    //   if (this.state.isLoading) {
    //     return <Loading />
    //   }
    // };

    return (
      <div className="App sobump">
        <header className="sobump-header">
          <img src={logo} className="sobump-logo" alt="logo" />
          <Search />
        </header>
        <section>
          <ul className="sobump-results">
            { this.state.results && this.state.results.map(gif =>
              <Gif gifData={gif} key={gif.id} />)
            }
          </ul>
          {/* { renderLoading() } */}
        </section>
      </div>
    );
  }
}

export default App;
