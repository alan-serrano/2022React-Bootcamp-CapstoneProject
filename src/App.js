import './App.css';
import { GlobalStyle } from './styles';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { HomePage } from './views/HomePage/styles';

function App() {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
