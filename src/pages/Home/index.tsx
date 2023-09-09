import Loader from '../../components/Loader';
import RestaurantList from '../../components/Restaurants';

import { useGetRestaurantsQuery } from '../../services/api';

const Home = () => {
  const { data, isLoading } = useGetRestaurantsQuery();

  if (isLoading) return <Loader />;

  return <RestaurantList data={data!} grid={2} typeCardList="restaurant" />;
};

export default Home;
