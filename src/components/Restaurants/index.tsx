import Card from '../Card';
import * as S from './style';

type Props = {
  grid: number;
  typeCardList: 'restaurant' | 'menu';
};

const RestaurantList = ({ grid, typeCardList }: Props) => (
  <S.Container className="container" repeat={grid}>
    <Card typeCard={typeCardList} />
    <Card typeCard={typeCardList} />
    <Card typeCard={typeCardList} />
    <Card typeCard={typeCardList} />
  </S.Container>
);

export default RestaurantList;
