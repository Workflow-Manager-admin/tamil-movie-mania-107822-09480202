import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';


// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header" style={{paddingBottom: 0}}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <h1 className="title" style={{ marginTop: '2rem', marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>
            Tamil Movie Mania 🎶
          </h1>
          <p className="subtitle" style={{marginBottom: '1.5rem'}}>Guess the Song from Lyrics or Audio Clip!</p>
        </header>
        <main style={{ minHeight: "75vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/play" element={<GamePage />} />
            {/* TODO: Add routing for leaderboard, stats, etc. */}
          </Routes>
        </main>
        <footer style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', padding: '10px', fontSize: '0.9rem' }}>
          Tamil Movie Mania &copy; {new Date().getFullYear()}
        </footer>
      </Router>
    </div>
  );
}

export default App;
