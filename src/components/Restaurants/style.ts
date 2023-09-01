import styled from 'styled-components';

type Props = {
  repeat: number;
};

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.repeat}, 1fr);
  justify-items: center;
  gap: 50px;
`;
