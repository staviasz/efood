import { useEffect, useState } from 'react';
import close from '../../assets/images/close 1.png';
import * as S from './style';

type Props = {
  visible: boolean;
  onClick: () => void;
  cover: string;
  name: string;
  description: string;
  portion: string;
  price: number;
};

const Modal = ({
  visible,
  onClick,
  cover,
  description,
  name,
  portion,
  price,
}: Props) => {
  const [visibleModal, setVisibleModal] = useState(visible);

  useEffect(() => {
    setVisibleModal(visible);
  }, [visible]);

  const handleClose = () => {
    setVisibleModal(false);
    onClick(); // Chama a função onClose para notificar o componente pai
  };

  return (
    <S.Container visible={visibleModal}>
      <S.ContainerModal>
        <img src={cover} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>Serve {portion}</span>
          <S.Button type="button">
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </S.Button>
        </div>
        <S.Close src={close} alt="" onClick={handleClose} />
      </S.ContainerModal>
    </S.Container>
  );
};

export default Modal;
