import estrela from '../../assets/images/estrela.png';
import suchi from '../../assets/images/suchi.png';
import Tag from '../Tag';
import * as S from './style';

const Card = () => (
  <S.Card>
    <S.Image src={suchi} alt="suchi" />
    <S.Infos>
      <Tag>Destaque</Tag>
      <Tag>Japonesa</Tag>
    </S.Infos>
    <div>
      <S.ContainerTitle>
        <h2>Suchi</h2>
        <span>
          4.9 <img src={estrela} alt="estrela" />
        </span>
      </S.ContainerTitle>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>

      <Tag>Siba mais</Tag>
    </div>
  </S.Card>
);

export default Card;
