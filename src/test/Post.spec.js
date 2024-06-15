import { assert } from "chai";
import Post from "../models/Post.js";

describe("Testes para a Classe Post", () => {
  it("Deve retornar 9 (8 + 1)", () => {
    const post = new Post(8);
    const esperado = 9;

    const valorTotal = post.verificarLike();

    assert.equal(valorTotal, esperado);
  });
});
