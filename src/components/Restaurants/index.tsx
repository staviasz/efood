import { Restaurant } from '../../mapData/mapRestaurants';
import CardMenu from '../CardMenu';
import CardRestaurant from '../CardRestaurant';
import * as S from './style';

type Props = {
  grid: number;
  typeCardList: 'restaurant' | 'menu';
  data: Restaurant[];
};

const RestaurantList = ({ grid, typeCardList, data }: Props) => {
  if (typeCardList === 'restaurant') {
    return (
      <S.Container className="container" repeat={grid}>
        {data &&
          data.map((item) => <CardRestaurant key={item.id} data={item} />)}
      </S.Container>
    );
  } else {
    return (
      <S.Container className="container" repeat={grid}>
        {data &&
          data.length > 0 &&
          data[0].menu &&
          data[0].menu.map((item) => <CardMenu key={item.id} data={item} />)}
      </S.Container>
    );
  }
};

export default RestaurantList;
