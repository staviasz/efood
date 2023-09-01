import styled from 'styled-components';
import banner from '../../assets/images/imagem_de_fundo.png';
import { colors } from '../../styles/variaveis';

export const Container = styled.div`
  background-image: url(${banner});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -40px;
  margin-bottom: 48px;
  padding: 16px;
  color: ${colors.white};

  > div {
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 32px;
      font-weight: 100;
    }
  }
`;
