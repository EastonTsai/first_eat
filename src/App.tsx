import React from 'react';
import 'styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
