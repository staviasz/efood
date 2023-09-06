import { styled } from 'styled-components';
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
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: flex;
  justify-content: flex-end;
`;

export const ContainerContent = styled.div`
  position: relative;
  background-color: ${colors.pink};
  color: ${colors.white};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
`;
