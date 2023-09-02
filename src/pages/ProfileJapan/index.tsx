import sushi from '../../assets/images/plates/sushi.jpg';
import BannerProfile from '../../components/Banner';
import RestaurantList from '../../components/Restaurants';
import Restaurant from '../../models/Data';

const plates: Omit<Restaurant, 'infos' | 'note'>[] = [
  {
    id: 1,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
  {
    id: 2,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
  {
    id: 3,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
  {
    id: 4,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
  {
    id: 5,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
  {
    id: 6,
    image: sushi,
    name: 'Sushi',
    descricao:
      'Delicie-se com a frescura e sabor único do sushi. Experimente nossas criações únicas e mergulhe no mundo da culinária japonesa.',
  },
];

const ProfileJapan = () => (
  <>
    <BannerProfile />
    <RestaurantList data={plates} grid={3} typeCardList="menu" />
  </>
);

export default ProfileJapan;
