import { useParams } from 'react-router-dom';
import BannerProfile from '../../components/Banner';
import RestaurantList from '../../components/Restaurants';
import { useGetMenuQuery } from '../../services/api';

const Profile = () => {
  const { id } = useParams();
  const { data } = useGetMenuQuery(id!);

  return (
    <>
      {data?.map((item) => <BannerProfile key={item.id} {...item} />)}

      <RestaurantList data={data!} grid={3} typeCardList="menu" />
    </>
  );
};

export default Profile;
