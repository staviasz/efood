import { TagSpan } from './style';

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => <TagSpan>{children}</TagSpan>;

export default Tag;
