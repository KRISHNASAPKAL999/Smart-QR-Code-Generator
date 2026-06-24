/**
 * App.jsx – Root application component
 * Composes all sections and manages shared history state.
 */
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar      from './components/Navbar';
import HeroSection from './components/HeroSection';
import QRGenerator from './components/QRGenerator';
import History     from './components/History';
import About       from './components/About';
import Footer      from './components/Footer';

import './App.css';

const App = () => {
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('qr-history') || '[]');
    } catch {
      return [];
    }
  });

  const handleGenerate = (updatedHistory) => setHistory(updatedHistory);
  const handleClearHistory = (updatedHistory) => setHistory(updatedHistory);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(30, 27, 75, 0.95)',
            color: '#f1f5f9',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: '600',
          },
          duration: 3000,
        }}
      />
      <Navbar />
      <main className="app-main">
        <HeroSection />
        <QRGenerator onGenerate={handleGenerate} />
        <History history={history} onClearHistory={handleClearHistory} />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
