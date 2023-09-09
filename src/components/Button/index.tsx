import { ButtonLink, ButtonStyle } from './style';

type Props = {
  children: React.ReactNode;
  typeButton?: 'button' | 'submit' | 'link';
  to?: string;
  onClick?: () => void;
};

const Button = ({ children, typeButton = 'button', to, onClick }: Props) => {
  if (typeButton !== 'link')
    return (
      <ButtonStyle onClick={onClick} type={typeButton}>
        {children}
      </ButtonStyle>
    );
  return <ButtonLink to={to as string}>{children}</ButtonLink>;
};

export default Button;
