import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/vue";
import Header from "../header.vue";
import renderComponent from "@/tests/render-component";

describe("Header", () => {
  it("renders properly", () => {
    renderComponent(Header);
    expect(screen.queryByText(/restaurant finder/i)).toBeTruthy();
    expect(screen.getByText(/select theme/i)).toBeTruthy();
  });
});
