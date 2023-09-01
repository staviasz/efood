import estrela from '../../assets/images/estrela.png';
import pizza from '../../assets/images/pizza.png';
import suchi from '../../assets/images/suchi.png';
import Tag from '../Tag';
import * as S from './style';

type Props = {
  typeCard: 'restaurant' | 'menu';
};

const Card = ({ typeCard }: Props) => {
  if (typeCard === 'restaurant') {
    return (
      <S.CardRestaurant>
        <S.Image src={suchi} alt="suchi" />
        <S.Infos>
          <Tag>Destaque</Tag>
          <Tag>Japonesa</Tag>
        </S.Infos>
        <div className="content">
          <S.ContainerTitle>
            <h2>Suchi</h2>
            <span>
              4.9 <img src={estrela} alt="estrela" />
            </span>
          </S.ContainerTitle>
          <S.Paragraph>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </S.Paragraph>

          <Tag>Siba mais</Tag>
        </div>
      </S.CardRestaurant>
    );
  } else {
    return (
      <S.CardMenu>
        <S.Image src={pizza} alt="suchi" />
        <div className="content">
          <S.ContainerTitle>
            <h2>Pizza Marguerita</h2>
          </S.ContainerTitle>
          <S.Paragraph>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Paragraph>
          <S.Button>Adicionar ao carrinho</S.Button>
        </div>
      </S.CardMenu>
    );
  }
};

export default Card;
