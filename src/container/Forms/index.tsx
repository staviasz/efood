import { useState } from 'react';
import { useSelector } from 'react-redux';
import FormAddress from '../../components/FormAddress';
import FormPayment from '../../components/FormPayment';
import { RootReducer } from '../../store';
import Overlay from '../Overlay';

const Forms = () => {
  const [address, setAddress] = useState(false);

  const visible = useSelector((state: RootReducer) => state.form.isOpen);

  const handleAddress = () => {
    setAddress((v) => !v);
  };

  return (
    <Overlay visible={visible}>
      {!address ? (
        <FormAddress handleAddress={handleAddress} />
      ) : (
        <FormPayment handleAddress={handleAddress} />
      )}
    </Overlay>
  );
};

export default Forms;
