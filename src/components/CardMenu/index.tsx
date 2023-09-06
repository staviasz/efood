import { useState } from 'react';
import { Menu } from '../../mapData/mapRestaurants';
import Modal from '../Modal';
import * as S from './style';

type Props = {
  data: Menu;
};

const CardMenu = ({ data }: Props) => {
  const [visible, setVisible] = useState(false);

  const modalVisible = () => {
    setVisible((v) => !v);
  };

  const { name, description, cover } = data;

  return (
    <S.CardMenu>
      <Modal visible={visible} onClick={modalVisible} {...data} />
      <S.Image src={cover} alt="suchi" />
      <div className="content">
        <S.ContainerTitle>
          <h2>{name}</h2>
        </S.ContainerTitle>
        <S.Paragraph>{description}</S.Paragraph>
      </div>
      <S.Button onClick={modalVisible}>Mais detalhes</S.Button>
    </S.CardMenu>
  );
};

export default CardMenu;
