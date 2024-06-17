import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import PostsList from "../../components/PostsList.jsx";

test("PostListScreen Input Search", async () => {
  render(<PostsList />);

  const posts = screen.getByTestId("post_card");

  expect(posts).toHaveLength(19);

  const inputSearch = screen.getByTestId("inputSearch");
  userEvent.type(inputSearch, "Hey all");

  posts = screen.screen.getByTestId("post_card");
  expect(posts).toHaveLength(1);
});
