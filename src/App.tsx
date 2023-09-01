import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Rotas from './routes';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Rotas />
    <Footer />
  </BrowserRouter>
);
export default App;
