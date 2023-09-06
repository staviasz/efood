import { Link } from 'react-router-dom';
import estrela from '../../assets/images/estrela.png';
import { Restaurant } from '../../mapData/mapRestaurants';
import Tag from '../Tag';
import * as S from './style';

type Props = {
  data: Restaurant;
};

const CardRestaurant = ({
  data: { id, name, description, cover, type, highlighted, assessment },
}: Props) => {
  const infos = [type];
  if (highlighted) infos.unshift('destaque');

  return (
    <S.CardRestaurant>
      <S.Image src={cover} alt="suchi" />
      <S.Infos>
        {infos?.map((tag) => <Tag key={id.toString() + tag}>{tag}</Tag>)}
      </S.Infos>
      <div className="content">
        <S.ContainerTitle>
          <h2>{name}</h2>
          <span>
            {assessment} <img src={estrela} alt="estrela" />
          </span>
        </S.ContainerTitle>
        <S.Paragraph>{description}</S.Paragraph>
        <Link to={`/${id}`}>
          <Tag>Siba mais</Tag>
        </Link>
      </div>
    </S.CardRestaurant>
  );
};

export default CardRestaurant;
