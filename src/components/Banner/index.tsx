import * as S from './style';

type Props = {
  type: string;
  cover: string;
  name: string;
};

const BannerProfile = ({ type, cover, name }: Props) => (
  <S.Container backgroundImage={cover}>
    <div className="container">
      <span>{type}</span>
      <h2>{name}</h2>
    </div>
  </S.Container>
);
export default BannerProfile;
