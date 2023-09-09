import styled from 'styled-components';
import { breakPoint, colors } from '../../styles/variaveis';
import { ButtonStyle } from '../Button/style';

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
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

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const CardMenu = styled.div`
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.beige};

  .content {
    min-height: 230px;
  }
  @media (max-width: ${breakPoint.tablet}) {
    margin-bottom: 32px;
  }
`;

export const Button = styled(ButtonStyle)`
  background-color: ${colors.beige};
`;
