import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Sidebar from './components/Sidebar';
import NewsList from './components/NewsList';
import { useEffect, useState } from 'react';

function App() {
  const [news,setNews] = useState([]);
  const [category,setCategory] = useState('Business');

  useEffect(()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&` +
                `apiKey=20f1ffd2265b43d1a87fee2cd0a8d939`;

    let req = new Request(url);
    fetch(req)
      .then(async (response) => {
        setNews(await response.json());
      })
  },[category]);

  const handleClick = e => setCategory(e.target.id)

  const hamburgerMenuOpen = e => {
    const aside = document.querySelector('aside');
    const hamburgerButton = document.querySelector('.hamburger-button');
    aside.classList.toggle("hamburger-menu--open");
    hamburgerButton.classList.toggle("hamburger-button--close");
  }

  const hamburgerMenuClose = e => {
    const aside = document.querySelector('aside');
    const hamburgerButton = document.querySelector('.hamburger-button');
    aside.classList.remove("hamburger-menu--open");
    hamburgerButton.classList.add("hamburger-button--close");
  }

  return (
    <div className="App">
      <Reset />
      <Sidebar
        changeCategory={handleClick}
        category={category}
        hamburgerMenuClose={hamburgerMenuClose} 
      />
      <NewsList
        newsData={news}
        category={category}
        hamburgerMenuOpen={hamburgerMenuOpen}
      />
    </div>
  );
}

export default App;
