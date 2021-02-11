import React from 'react';
import Header from './components/Header';
import PostAndMemes from './PostAndMemes';
import './App.css';
import './MediaQueries.css';

function App () {
  return (
    <div className="app">
      <Header/>
      <PostAndMemes/>
    </div>
  );
}
export default App;