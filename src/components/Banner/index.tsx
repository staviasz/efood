import * as S from './style';

type Props = {
  category: string;
  image: string;
  name: string;
};

const BannerProfile = ({ category, image, name }: Props) => (
  <S.Container backgroundImage={image}>
    <div className="container">
      <span>{category}</span>
      <h2>{name}</h2>
    </div>
  </S.Container>
);
export default BannerProfile;
