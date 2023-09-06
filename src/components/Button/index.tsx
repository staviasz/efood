import { ButtonStyle } from './style';

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => <ButtonStyle>{children}</ButtonStyle>;

export default Button;
