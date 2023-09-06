import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

type Props = {
  visible: boolean;
};

export const Container = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const ContainerModal = styled.div`
  position: relative;
  width: 1024px;
  height: 344px;
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 16px;
  display: flex;
  gap: 16px;
  font-size: 14px;
  line-height: 22px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 16px;
    margin-bottom: 24px;
  }

  img:first-child {
    width: 280px;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 16px;
  padding: 8px;
  font-weight: bold;
  border: none;
  color: ${colors.pink};
  background-color: ${colors.beige};
  cursor: pointer;
`;

export const Close = styled.img`
  width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
