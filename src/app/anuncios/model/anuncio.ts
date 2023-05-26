export interface Anuncio {
  idLivro: number;
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
