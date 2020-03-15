import React from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Gif from './components/Gif';

function App() {
  return (
    <div className="App sobump">
      <header className="sobump-header">
        <img src={logo} className="sobump-logo" alt="logo" />
        <Search />
      </header>
      <section>
        <ul className="sobump-results">
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
          <Gif />
        </ul>
      </section>
    </div>
  );
}

export default App;
