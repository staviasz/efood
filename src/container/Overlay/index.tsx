import { Container, ContainerContent } from './style';

type Props = {
  children: React.ReactNode;
  visible: boolean;
};

const Overlay = ({ children, visible }: Props) => (
  <Container visible={visible}>
    <ContainerContent>{children}</ContainerContent>
  </Container>
);

export default Overlay;
