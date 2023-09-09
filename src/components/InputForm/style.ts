import styled from 'styled-components';

export const Container = styled.div`
  label {
    margin-top: 16px;
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    margin-top: 8px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    border-color: transparent;

    &:focus {
      outline: none;
      border-color: transparent;
    }
  }
`;
