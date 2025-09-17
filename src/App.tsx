import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TechStackPage from './pages/TechStackPage';
import ComparisonPage from './pages/ComparisonPage';
import { ProgressProvider } from './contexts/ProgressContext';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stack/:stackId" element={<TechStackPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            {/* Progress route removed */}
          </Routes>
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;