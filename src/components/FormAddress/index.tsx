import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { RootReducer } from '../../store';
import { openClose as openCloseCart } from '../../store/reducers/cart';
import {
  addFormAddress,
  openClose as openCloseForm,
} from '../../store/reducers/form';
import Button from '../Button';
import InputLabel from '../InputForm';
import * as S from './style';

interface Props {
  handleAddress: () => void;
}

const FormAddress = ({ handleAddress }: Props) => {
  const dispatch = useDispatch();
  const { address, cep, city, number, receiver, complement } = useSelector(
    (state: RootReducer) => state.form.formAddress,
  );

  const form = useFormik({
    initialValues: {
      receiver: receiver,
      address: address,
      city: city,
      cep: cep,
      number: number,
      complement: complement,
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter no minímo 3 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(3, 'O endereço precisa ter no minímo 3 caracteres')
        .max(255, 'O endereço precisa ter no maximo 255 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Cidade precisa ter no minímo 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().max(
        255,
        'O endereço precisa ter no maximo 255 caracteres',
      ),
    }),
    onSubmit: () => {
      const delivery = form.values;
      dispatch(addFormAddress(delivery));
      handleAddress();
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChange = fieldName in form.touched;
    const isValid = fieldName in form.errors;
    if (isChange && isValid) return message;
    return '';
  };
  const getErrorClass = (fieldName: string) => {
    const isChange = fieldName in form.touched;
    const isValid = fieldName in form.errors;
    if (isChange && isValid) return true;
    return false;
  };

  const backToCart = () => {
    dispatch(openCloseForm());
    dispatch(openCloseCart());
  };

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <h2>Entrega</h2>
      <InputLabel
        label="Quem irá receber"
        idName="receiver"
        value={form.values.receiver}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={getErrorClass('receiver') ? 'error' : ''}
      />
      <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
      <InputLabel
        label="Endereço"
        idName="address"
        value={form.values.address}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={getErrorClass('address') ? 'error' : ''}
      />
      <small>{getErrorMessage('address', form.errors.address)}</small>
      <InputLabel
        label="Cidade"
        idName="city"
        value={form.values.city}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={getErrorClass('city') ? 'error' : ''}
      />
      <small>{getErrorMessage('city', form.errors.city)}</small>
      <div className="flex">
        <div>
          <InputLabel
            mask="99999-999"
            label="Cep"
            idName="cep"
            value={form.values.cep}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('cep') ? 'error' : ''}
          />
          <small>{getErrorMessage('cep', form.errors.cep)}</small>
        </div>
        <div>
          <InputLabel
            mask="(99) 9 9999-9999"
            label="Número"
            idName="number"
            value={form.values.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('number') ? 'error' : ''}
          />
          <small>{getErrorMessage('number', form.errors.number)}</small>
        </div>
      </div>
      <InputLabel
        label="complemento(opcional)"
        idName="complement"
        value={form.values.complement}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={getErrorClass('complement') ? 'error' : ''}
      />
      <small>{getErrorMessage('complement', form.errors.complement)}</small>
      <div className="buttons">
        <Button typeButton="submit">Continuar com o pagamento</Button>
        <Button onClick={backToCart}>Voltar para o carrinho</Button>
      </div>
    </S.Form>
  );
};

export default FormAddress;
