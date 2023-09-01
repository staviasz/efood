import styled from 'styled-components';
import background from '../../assets/images/Vector.png';
import { colors } from '../../styles/variaveis';

export const HeaderHome = styled.header`
  background-image: url(${background});
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  margin-bottom: 40px;
`;

export const Image = styled.img`
  max-width: 125px;
`;

export const Title = styled.h1`
  max-width: 539px;
  margin: 138px auto 0;
  color: ${colors.pink};
`;

export const HeaderProfile = styled.header`
  background-image: url(${background});
  color: ${colors.pink};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  margin-bottom: 40px;
`;
