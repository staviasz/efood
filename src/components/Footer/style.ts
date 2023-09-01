import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  text-align: center;
  font-size: 10px;
  color: ${colors.pink};
  margin-top: 128px;

  > img {
    margin-top: 40px;
    margin-bottom: 32px;
  }

  > p {
    width: 480px;
    margin: 80px auto 0;
    padding-bottom: 40px;
  }
`;

export const SocialNetwork = styled.img`
  margin-right: 8px;
`;
