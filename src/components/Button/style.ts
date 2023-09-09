import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/variaveis';

export const ButtonStyle = styled.button`
  background-color: ${colors.white};
  color: ${colors.pink};
  display: block;
  margin-top: 16px;
  padding: 8px;
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background-color: ${colors.white};
  color: ${colors.pink};
  display: block;
  margin-top: 16px;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  width: 100%;
  cursor: pointer;
`;
