import InputMask from 'react-input-mask';
import * as S from './style';

type Props = {
  label: string;
  idName: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  mask?: string;
};

const InputLabel = ({
  label,
  idName,
  value,
  onChange,
  onBlur,
  className,
  mask,
}: Props) => (
  <S.Container>
    <label htmlFor={`id${idName}`}>{label}</label>
    {mask ? (
      <InputMask
        mask={mask}
        type="text"
        name={idName}
        id={`id${idName}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
    ) : (
      <input
        type="text"
        name={idName}
        id={`id${idName}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
    )}
  </S.Container>
);

export default InputLabel;
