import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

export const CardRestaurant = styled.div`
  max-width: 472px;
  color: ${colors.pink};
  position: relative;

  .content {
    background-color: ${colors.white};
    border: 1px solid ${colors.pink};
    border-top: none;
    padding: 8px;
    margin-top: -5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 217px;
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

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const CardMenu = styled.div`
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.beige};
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  color: ${colors.pink};
  background-color: ${colors.beige};
  cursor: pointer;
`;
