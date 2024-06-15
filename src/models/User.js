export default class User {
  constructor() {
    this.pontos = 0;
  }

  atualizarPontos(acao) {
    switch (acao) {
      case "postado":
        this.pontos += 3;
      case "comentado":
        this.pontos += 2;
      case "curtido":
        this.pontos += 1;
    }
    return this.pontos;
  }
}
