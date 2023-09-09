import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';
import { RootReducer } from '../../store';
import { clear } from '../../store/reducers/cart';
import { openClose } from '../../store/reducers/form';
import { parseToBrl } from '../../utils/formatPrice';
import totalPrice from '../../utils/totalPrice';
import Button from '../Button';
import InputLabel from '../InputForm';
import * as S from './style';

interface Props {
  handleAddress: () => void;
}

const FormPayment = ({ handleAddress }: Props) => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation();

  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.cart.items);
  const { address, cep, city, number, receiver, complement } = useSelector(
    (state: RootReducer) => state.form.formAddress,
  );

  const form = useFormik({
    initialValues: {
      nameCard: '',
      numberCard: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
    },
    validationSchema: Yup.object({
      cvv: Yup.string().required('O campo é obrigatório'),
      expiryMonth: Yup.string().required('O campo é obrigatório'),
      expiryYear: Yup.string().required('O campo é obrigatório'),
      nameCard: Yup.string()
        .min(3, 'O nome precisa ter no mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      numberCard: Yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: receiver,
          address: {
            description: address,
            city: city,
            zipCode: cep,
            number: Number(number),
            complement: complement,
          },
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiryMonth),
              year: Number(values.expiryYear),
            },
          },
        },
        products: items.map((i) => ({ id: i.id, price: i.price * i.qty })),
      });
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

  const orderCompleted = () => {
    dispatch(openClose());
    dispatch(clear());
  };

  return !isSuccess ? (
    <S.Form onSubmit={form.handleSubmit}>
      <h2>Pagamento - Valor a pagar {parseToBrl(totalPrice(items))}</h2>
      <InputLabel
        label="Nome do cartão"
        idName="nameCard"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        className={getErrorClass('nameCard') ? 'error' : ''}
      />
      <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
      <div className="grid">
        <div>
          <InputLabel
            mask="9999 9999 9999 9999"
            label="Numero do cartão"
            idName="numberCard"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('numberCard') ? 'error' : ''}
          />
          <small>{getErrorMessage('numberCard', form.errors.numberCard)}</small>
        </div>
        <div>
          <InputLabel
            mask="999"
            label="CVV"
            idName="cvv"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('cvv') ? 'error' : ''}
          />
          <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
        </div>
      </div>
      <div className="flex">
        <div>
          <InputLabel
            mask="99"
            label="Mês do vencimento"
            idName="expiryMonth"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('expiryMonth') ? 'error' : ''}
          />
          <small>
            {getErrorMessage('expiryMonth', form.errors.expiryMonth)}
          </small>
        </div>
        <div>
          <InputLabel
            mask="9999"
            label="Ano do vencimento"
            idName="expiryYear"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={getErrorClass('expiryYear') ? 'error' : ''}
          />
          <small>{getErrorMessage('expiryYear', form.errors.expiryYear)}</small>
        </div>
      </div>
      <div className="buttons">
        <Button typeButton="submit">Finalizar Pagamento</Button>
        <Button onClick={handleAddress}>
          Voltar para a edição do endereço
        </Button>
      </div>
    </S.Form>
  ) : (
    <S.Order>
      <h2>Pedido realizado - {data!.orderId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button onClick={orderCompleted}>Concluir</Button>
    </S.Order>
  );
};

export default FormPayment;
