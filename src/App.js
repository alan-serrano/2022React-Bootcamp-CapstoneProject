import { useState } from 'react';
import './App.css';
import { GlobalStyle } from './styles';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HomePage from './views/HomePage';
import ProductListPage from './views/ProductListPage';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  const [activePage, setActivePage] = useState({
    homePage: true,
    productListPage: false,
  });

  const navigateTo = (page) => {
    setActivePage((activePage) => {
      activePage = { ...activePage };
      for (const page in activePage) {
        activePage[page] = false;
      }
      activePage[page] = true;
      return activePage;
    });
  };

  return (
    <div className="App">
      <GlobalStyle />
      {activePage.homePage && <HomePage navigateTo={navigateTo} />}
      {activePage.productListPage && (
        <ProductListPage navigateTo={navigateTo} />
      )}
    </div>
  );
}

export default App;
