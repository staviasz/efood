class Data {
  id: number;
  image: string;
  infos?: string[];
  name: string;
  note?: string;
  descricao: string;

  constructor(
    id: number,
    image: string,
    infos: string[],
    name: string,
    note: string,
    descricao: string,
  ) {
    this.id = id;
    this.image = image;
    this.infos = infos;
    this.name = name;
    this.note = note;
    this.descricao = descricao;
  }
}

export default Data;
