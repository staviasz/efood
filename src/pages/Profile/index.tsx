import BannerProfile from '../../components/Banner';
import RestaurantList from '../../components/Restaurants';

const Perfil = () => (
  <>
    <BannerProfile />
    <RestaurantList grid={3} typeCardList="menu" />
  </>
);

export default Perfil;
