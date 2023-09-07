import { useDispatch, useSelector } from 'react-redux';
import close from '../../assets/images/close 1.png';
import lixeira from '../../assets/images/lixeira-de-reciclagem.png';
import Overlay from '../../container/Overlay';
import { RootReducer } from '../../store';
import { add, decraseQty, openClose, remove } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils/formatPrice';
import Button from '../Button';
import * as S from './style';

const Cart = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state: RootReducer) => state.cart.isOpen);
  const items = useSelector((state: RootReducer) => state.cart.items);

  const totalPrice = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  const incraseQty = (id: number) => {
    const plate = items.find((i) => i.id === id);
    dispatch(add(plate!));
  };

  return (
    <Overlay visible={visible}>
      <S.Close
        src={close}
        alt="Fechar carrinho"
        onClick={() => dispatch(openClose())}
      />
      {items.length === 0 ? (
        <S.EmpetyCart>
          Carrinho vazio, adicione aqui as maiores delicias culinarias
        </S.EmpetyCart>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <S.ItemCart key={item.id}>
                <S.Cover src={item.cover} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>Qtd:</p>
                  <S.InputQtd>
                    <span onClick={() => dispatch(decraseQty(item.id))}>
                      {' '}
                      -{' '}
                    </span>
                    <input type="text" disabled value={item.qty} />
                    <span onClick={() => incraseQty(item.id)}> + </span>
                  </S.InputQtd>
                  <p>{parseToBrl(item.price * item.qty)}</p>
                </div>
                <S.Lixeira
                  src={lixeira}
                  alt="Lixeira"
                  onClick={() => dispatch(remove(item.id))}
                />
              </S.ItemCart>
            ))}
          </ul>
          <S.TotalPrice>
            <p>Valor</p>
            <p>{parseToBrl(totalPrice)}</p>
          </S.TotalPrice>
          <Button>Continuar com a entrega</Button>
        </>
      )}
    </Overlay>
  );
};

export default Cart;
