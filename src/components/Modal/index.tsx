import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import close from '../../assets/images/close 1.png';
import { Menu } from '../../mapData/mapRestaurants';
import { add, openClose } from '../../store/reducers/cart';
import * as S from './style';

type Props = {
  visible: boolean;
  onClick: () => void;
  data: Menu;
};

const Modal = ({ visible, onClick, data }: Props) => {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = useState(visible);

  useEffect(() => {
    setVisibleModal(visible);
  }, [visible]);

  const handleClose = () => {
    setVisibleModal(false);
    onClick();
  };

  const addCart = () => {
    dispatch(add(data));
    handleClose();
    dispatch(openClose());
  };

  const { cover, name, description, portion, price } = data;
  return (
    <S.Container visible={visibleModal}>
      <S.ContainerModal>
        <img src={cover} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>Serve {portion}</span>
          <S.Button onClick={addCart}>
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </S.Button>
        </div>
        <S.Close src={close} alt="" onClick={handleClose} />
      </S.ContainerModal>
    </S.Container>
  );
};

export default Modal;
