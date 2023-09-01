import logo from '../../assets/images/logo.png';
import * as S from './style';

const Header = () => (
  <S.Container>
    <S.Image src={logo} alt="efood" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Container>
);
export default Header;
