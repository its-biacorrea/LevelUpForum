import { assert } from "chai";
import User from "../models/User.js";

describe("Testes para a Classe User", () => {
  it("Deve retornar 3 pontos para um post postado", () => {
    const user = new User();

    user.atualizarPontos("postado");
    const pontos = user.pontos;

    assert.equal(pontos, 6);
  });

  it("Deve retornar 2 pontos para um post comentado", () => {
    const user = new User();

    user.atualizarPontos("comentado");
    const pontos = user.pontos;

    assert.equal(pontos, 3);
  });

  it("Deve retornar 1 ponto para um post curtido", () => {
    const user = new User();

    user.atualizarPontos("curtido");
    const pontos = user.pontos;

    assert.equal(pontos, 1);
  });

  it("Deve retornar 6 ponto para todos os posts", () => {
    const user = new User();

    user.atualizarPontos("postado");
    user.atualizarPontos("comentado");
    user.atualizarPontos("curtido");
    const pontos = user.pontos;

    assert.equal(pontos, 10);
  });
});
