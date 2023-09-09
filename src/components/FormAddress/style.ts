import styled from 'styled-components';
import { FormContainer } from '../../container/Forms/style';

export const Form = styled(FormContainer)`
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  small {
    color: #ff2200;
    font-size: 10px;
  }

  .error {
    border: 1px solid red;
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
