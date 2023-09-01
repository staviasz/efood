import styled from 'styled-components';
import background from '../../assets/images/Vector.png';
import { colors } from '../../styles/variaveis';

export const Container = styled.header`
  background-image: url(${background});
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

export const Image = styled.img`
  max-width: 125px;
`;

export const Title = styled.h1`
  max-width: 539px;
  margin: 138px auto 0;
  color: ${colors.pink};
`;
