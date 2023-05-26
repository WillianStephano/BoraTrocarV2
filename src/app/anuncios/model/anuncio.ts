export interface Anuncio {
  _id: string;
  isbn: string;
  nomeLivro: string;
  autor: {
    nomeAutor: string;
  };
  categoria: {
    nomeCategoria: string;
  };
  nomeCondicao: string;
  descricao: string;
  usuario: {
    nomeUsuario: string;
  };
  imgLivro: '';
}
