import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/vue";
import Row from "../row.vue";
import renderComponent from "@/tests/render-component";

describe("Row", () => {
  it("renders properly", () => {
    renderComponent(Row, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });
});
