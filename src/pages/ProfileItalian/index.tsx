import banner from '../../assets/images/imagem_de_fundo.png';
import pizza from '../../assets/images/plates/pizza.png';
import BannerProfile from '../../components/Banner';
import RestaurantList from '../../components/Restaurants';
import Restaurant from '../../models/Data';

const plates: Omit<Restaurant, 'infos' | 'note'>[] = [
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 2,
    image: pizza,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
  },
  {
    id: 3,
    image: pizza,
    name: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 4,
    image: pizza,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
  },
  {
    id: 5,
    image: pizza,
    name: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 6,
    image: pizza,
    name: 'La Dolce Vita Trattoria',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!',
  },
];

const ProfileItalian = () => (
  <>
    <BannerProfile
      image={banner}
      category="Italiana"
      name="La Dolce Vita Trattoria"
    />
    <RestaurantList data={plates} grid={3} typeCardList="menu" />
  </>
);

export default ProfileItalian;
