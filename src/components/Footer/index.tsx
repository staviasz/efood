import * as S from './style';

import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/social_networks/facebook.png';
import instagram from '../../assets/images/social_networks/instagram.png';
import twiter from '../../assets/images/social_networks/twitter.png';

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="logo" />
    <div>
      <S.SocialNetwork src={instagram} alt="instagram" />
      <S.SocialNetwork src={facebook} alt="facebook" />
      <S.SocialNetwork src={twiter} alt="twiter" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.FooterContainer>
);

export default Footer;
