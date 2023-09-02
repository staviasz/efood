import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RootReducer } from '../../store';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();
  const qtdCart = useSelector((state: RootReducer) => state.carrinho.qtd);

  if (pathname === '/') {
    return (
      <S.HeaderHome>
        <Link to="/">
          <S.Image src={logo} alt="efood" />
        </Link>
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.HeaderHome>
    );
  } else {
    return (
      <S.HeaderProfile>
        <p>Restaurante</p>
        <Link to="/">
          <S.Image src={logo} alt="efood" />
        </Link>
        <p>{qtdCart} produto(s) no carrinho</p>
      </S.HeaderProfile>
    );
  }
};
export default Header;
