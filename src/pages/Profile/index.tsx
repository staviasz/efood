import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BannerProfile from '../../components/Banner';
import RestaurantList from '../../components/Restaurants';
import mapRestaurants, { Restaurant } from '../../mapData/mapRestaurants';

const Profile = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setData(mapRestaurants([res])));
  }, []);

  return (
    <>
      {data.map((item) => (
        <BannerProfile key={item.id} {...item} />
      ))}

      <RestaurantList data={data} grid={3} typeCardList="menu" />
    </>
  );
};

export default Profile;
