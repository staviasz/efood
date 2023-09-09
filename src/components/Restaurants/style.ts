import styled from 'styled-components';
import { breakPoint } from '../../styles/variaveis';

type Props = {
  repeat: number;
};

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.repeat}, 1fr);
  justify-items: center;
  gap: 50px;

  @media (max-width: ${breakPoint.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakPoint.tablet}) {
    display: block;
  }
`;
