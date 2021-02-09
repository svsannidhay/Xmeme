import React from 'react';
import MemeCards from './MemeCards';
import Header from './Header';
import PostForm from './PostForm';
import './App.css';

function App () {
  return (
    <div className="app">
      <Header/>
      <PostForm/>
      <MemeCards/>
    </div>
  );
}
export default App;