import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

type Props = {
  backgroundImage: string;
};

export const Container = styled.div<Props>`
  background-image: url(${(props) => props.backgroundImage});
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
