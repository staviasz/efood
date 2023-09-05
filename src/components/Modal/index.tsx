import { useEffect, useState } from 'react';
import close from '../../assets/images/close 1.png';
import * as S from './style';

type Props = {
  visible: boolean;
  onClick: () => void;
};

const Modal = ({ visible, onClick }: Props) => {
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
        <img src="http://placeholder.com/280" alt="" />
        <div>
          <h2>Pizza Marguerita</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <span>Serve: de 2 a 3 pessoas</span>
          <S.Button type="button">Adicionar ao carrinho - R$ 60,90</S.Button>
        </div>
        <S.Close src={close} alt="" onClick={handleClose} />
      </S.ContainerModal>
    </S.Container>
  );
};

export default Modal;
