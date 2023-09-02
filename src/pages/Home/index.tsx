import RestaurantList from '../../components/Restaurants';
import Restaurant from '../../models/Data';

import italiano from '../../assets/images/imagem_de_fundo.png';
import japones from '../../assets/images/restaurants/japones.png';

const restaurants: Restaurant[] = [
  {
    id: 1,
    image: japones,
    infos: ['Japonesa', 'top 1'],
    name: 'Hioki Sushi',
    note: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: 2,
    image: italiano,
    infos: ['Italiana', 'top 1'],
    name: 'La Dolce Vita Trattoria',
    note: '4.9',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 3,
    image: japones,
    infos: ['Japonesa', 'top 1'],
    name: 'Hioki Sushi',
    note: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: 4,
    image: italiano,
    infos: ['Italiana', 'top 1'],
    name: 'La Dolce Vita Trattoria',
    note: '4.9',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 5,
    image: japones,
    infos: ['Japonesa', 'top 1'],
    name: 'Hioki Sushi',
    note: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: 6,
    image: italiano,
    infos: ['Italiana', 'top 1'],
    name: 'La Dolce Vita Trattoria',
    note: '4.9',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
];

const Home = () => (
  <RestaurantList data={restaurants} grid={2} typeCardList="restaurant" />
);

export default Home;
