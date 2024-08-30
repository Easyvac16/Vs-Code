import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import GetMangas from './get-mangas/get-mangas';
import MangaInfo from './manga-info/manga-info';
import GetImage from './load-image/get-img';
import './App.css';

function Header() {
  const location = useLocation();
  const hideHeader = location.pathname.includes('/chapter/');

  if (hideHeader) {
    return null;
  }

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src="/OIP.jpg" alt="Logo" className="logo" />
        <span className="header-title">Manga Reader</span>
      </a>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="column"></div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="manga">
                <GetMangas genre="Recomendation" />
                <GetMangas genre="Romance" />
                <GetMangas genre="Isekai" />
                <GetMangas genre="Fantasy" />
                <GetMangas genre="Reincarnation" />
              </div>
            }
          />
          <Route path="/manga/:mangaId" element={<MangaInfo />} />
          <Route path="/manga/:mangaId/chapter/:chapterId" element={<GetImage />} />
        </Routes>

        <div className="column"></div>
      </div>
    </Router>
  );
}


