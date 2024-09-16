import { useState } from 'react';
import './App.css';
import { GlobalStyle } from './styles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;
