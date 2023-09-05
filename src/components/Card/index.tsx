import { useState } from 'react';
import { Link } from 'react-router-dom';
import estrela from '../../assets/images/estrela.png';
import Restaurant from '../../models/Data';
import Modal from '../Modal';
import Tag from '../Tag';
import * as S from './style';

type Props = {
  typeCard: 'restaurant' | 'menu';
  data: Restaurant;
};

const Card = ({
  typeCard,
  data: { id, name, descricao, image, infos, note },
}: Props) => {
  const [visible, setVisible] = useState(false);

  const modalVisible = () => {
    setVisible((v) => !v);
  };

  const slug = (name = '') => {
    return name.replace(/\s+/g, '-').toLowerCase();
  };

  if (typeCard === 'restaurant') {
    return (
      <S.CardRestaurant>
        <S.Image src={image} alt="suchi" />
        <S.Infos>
          {infos?.map((tag) => <Tag key={id.toString() + tag}>{tag}</Tag>)}
        </S.Infos>
        <div className="content">
          <S.ContainerTitle>
            <h2>{name}</h2>
            <span>
              {note} <img src={estrela} alt="estrela" />
            </span>
          </S.ContainerTitle>
          <S.Paragraph>{descricao}</S.Paragraph>
          <Link to={`/${slug(name)}`}>
            <Tag>Siba mais</Tag>
          </Link>
        </div>
      </S.CardRestaurant>
    );
  } else {
    return (
      <S.CardMenu>
        <Modal visible={visible} onClick={modalVisible} />
        <S.Image src={image} alt="suchi" />
        <div className="content">
          <S.ContainerTitle>
            <h2>{name}</h2>
          </S.ContainerTitle>
          <S.Paragraph>{descricao}</S.Paragraph>
          <S.Button onClick={modalVisible}>Mais detalhes</S.Button>
        </div>
      </S.CardMenu>
    );
  }
};

export default Card;
