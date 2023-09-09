import styled from 'styled-components';
import {
  ContainerContent,
  Container as Overlay,
} from '../../container/Overlay/style';
import { breakPoint, colors } from '../../styles/variaveis';
import { ButtonStyle } from '../Button/style';

export const Container = styled(Overlay)`
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled(ContainerContent)`
  max-width: 1024px;
  position: relative;
  width: 1024px;
  height: 344px;
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

  @media (max-width: ${breakPoint.tablet}) {
    display: block;
    min-height: 90vh;
    img:first-child {
      width: 100%;
      margin-top: 8px;
    }
  }
`;

export const Button = styled(ButtonStyle)`
  background-color: ${colors.beige};
  width: 216px;
`;

export const Close = styled.img`
  width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
