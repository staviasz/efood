import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RootReducer } from '../../store';
import { openClose } from '../../store/reducers/cart';
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.cart.items);
  const totalCart = items.reduce((acc, i) => acc + i.qty, 0);

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
        <p onClick={() => dispatch(openClose())}>
          {totalCart} produto(s) no carrinho
        </p>
      </S.HeaderProfile>
    );
  }
};
export default Header;
