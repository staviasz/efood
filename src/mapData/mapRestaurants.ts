/* eslint-disable @typescript-eslint/no-explicit-any */

export type Menu = {
  id: number;
  cover: string;
  price: number;
  name: string;
  description: string;
  portion: string;
};

export type Restaurant = {
  id: number;
  name: string;
  highlighted?: boolean;
  type: string;
  assessment: string;
  description: string;
  cover: string;
  menu: Menu[];
};

const mapRestaurants = (data: any[]): Restaurant[] => {
  return data.map((item) => {
    const {
      id,
      titulo: name,
      destacado: highlighted,
      tipo: type,
      avaliacao: assessment,
      descricao: description,
      capa: cover,
      cardapio,
    } = item;
    return {
      id,
      name,
      highlighted,
      type,
      assessment,
      description,
      cover,
      menu: cardapio.map((item: any) => {
        const {
          id,
          foto: cover,
          preco: price,
          nome: name,
          descricao: description,
          porcao: portion,
        } = item;
        return {
          id,
          cover,
          price,
          name,
          description,
          portion,
        };
      }),
    };
  });
};

export default mapRestaurants;
