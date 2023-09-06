import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Rotas from './routes';
import { store } from './store';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Cart />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  </Provider>
);
export default App;
