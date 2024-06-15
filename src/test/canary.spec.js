import { assert } from "chai";
describe("Canary Test.", () => {
  it("Deve retornar true para func(true)", () => {
    assert.isTrue(true);
  });

  it("Deve retornar false para func(false)", () => {
    assert.isFalse(false);
  });

  it("Deve retornar 1 para func(1)", () => {
    assert.equal(1, 1);
  });
});
