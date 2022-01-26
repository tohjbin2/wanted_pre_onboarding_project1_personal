import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import FirstCalculator from './pages/FirstCalculator';
import SecondCalculator from './pages/SecondCalculator';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/first" element={<FirstCalculator />} />
        <Route path="/second" element={<SecondCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
