import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Header from "../header.vue";

describe("Header", () => {
  it("renders properly", () => {
    render(Header);
    expect(screen.queryByText(/restaurant finder/i)).toBeTruthy();
  });

  it("should render current theme", () => {
    render(Header);
    expect(screen.getByText(/select theme/i)).toBeTruthy();
  });
});
