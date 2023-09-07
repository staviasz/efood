import RestaurantList from '../../components/Restaurants';

import { useGetRestaurantsQuery } from '../../services/api';

const Home = () => {
  const { data } = useGetRestaurantsQuery();

  return <RestaurantList data={data!} grid={2} typeCardList="restaurant" />;
};

export default Home;
