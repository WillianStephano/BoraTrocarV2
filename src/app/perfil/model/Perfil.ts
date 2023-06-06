export interface Perfil {
  email: string;
  imagem: null;
  nickname: string;
  nomeCompleto: string;
  tipoConta: string;
  anunciosPostados: [
    { idLivro: number; nomeLivro: string; isbn: number; descricao: string }
  ];
}
