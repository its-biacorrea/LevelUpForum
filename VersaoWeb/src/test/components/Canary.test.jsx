import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Banner from "../../components/Banner.jsx";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import "@testing-library/jest-dom";

test("Canary Test / Components", async () => {
  const msg = "Teste de Componente";
  render(<Banner message={msg} />);

  const paragrafo = screen.getByTestId("banner-component");

  expect(paragrafo).toHaveTextContent(msg);
});
