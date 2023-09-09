import styled from 'styled-components';
import { FormContainer } from '../../container/Forms/style';

export const Form = styled(FormContainer)`
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  small {
    font-size: 10px;
    color: #ff2200;
  }

  .error {
    border: 1px solid red;
  }

  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 34px;
  }

  .flex {
    display: flex;
    gap: 34px;
  }

  .buttons {
    margin-top: 16px;

    button {
      font-size: 14px;
      padding: 4px 0;
      margin-top: 0;
      margin-bottom: 8px;
    }
  }
`;

export const Order = styled.div`
  font-size: 14px;

  h2 {
    font-size: 16px;
  }

  p {
    margin: 16px 0;
  }

  button {
    margin-top: 24px;
    font-weight: bold;
    padding: 4px 0;
  }
`;
