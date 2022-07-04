import { useState } from 'react';
import './App.css';
import { GlobalStyle } from './styles';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { Outlet } from 'react-router-dom';

function App() {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <GlobalStyle />
      <Outlet />
    </div>
  );
}

export default App;
