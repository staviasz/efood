import { PropsItem } from '../store/reducers/cart';

const totalPrice = (items: PropsItem[]) => {
  return items.reduce((acc, i) => acc + i.price * i.qty, 0);
};

export default totalPrice;
