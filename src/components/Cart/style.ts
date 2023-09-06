import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

export const ItemCart = styled.li`
  background-color: ${colors.white};
  color: ${colors.pink};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  h2 {
    margin-bottom: 16px;
  }

  p {
    display: inline;
  }
`;

export const Lixeira = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const Cover = styled.img`
  max-width: 80px;
  object-fit: cover;
`;

export const TotalPrice = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const Close = styled.img`
  z-index: 1;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const InputQtd = styled.div`
  display: inline;
  margin-left: 5px;
  margin-right: 40px;

  span {
    cursor: pointer;
    max-width: 16px;
    width: 100%;
  }

  input {
    max-width: 30px;
    border: none;
    text-align: center;
    border-radius: 2px;
    color: ${colors.pink};
    background-color: ${colors.beige};
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;
