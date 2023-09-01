import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

export const Card = styled.div`
  border: 1px solid ${colors.pink};
  max-width: 472px;
  color: ${colors.pink};
  position: relative;

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  > div {
    padding: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
  }

  span {
    display: flex;
    width: 50px;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`;
