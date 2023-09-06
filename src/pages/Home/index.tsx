import RestaurantList from '../../components/Restaurants';

import { useEffect, useState } from 'react';
import mapRestaurants, { Restaurant } from '../../mapData/mapRestaurants';

const Home = () => {
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setData(mapRestaurants(res)));
  }, []);

  return <RestaurantList data={data} grid={2} typeCardList="restaurant" />;
};

export default Home;
