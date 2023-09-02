import Restaurant from '../../models/Data';
import Card from '../Card';
import * as S from './style';

type Props = {
  grid: number;
  typeCardList: 'restaurant' | 'menu';
  data: Restaurant[];
};

const RestaurantList = ({ grid, typeCardList, data }: Props) => (
  <S.Container className="container" repeat={grid}>
    {data.map((item) => (
      <Card key={item.id} typeCard={typeCardList} data={item} />
    ))}
  </S.Container>
);

export default RestaurantList;
