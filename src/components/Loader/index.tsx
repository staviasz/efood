import { HashLoader } from 'react-spinners';
import { colors } from '../../styles/variaveis';
import { Container } from './style';

const Loader = () => (
  <Container>
    <HashLoader color={colors.pink} />
  </Container>
);

export default Loader;
