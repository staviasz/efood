import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();

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
        <p>0 produto(s) no carrinho</p>
      </S.HeaderProfile>
    );
  }
};
export default Header;
