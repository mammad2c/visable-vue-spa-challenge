import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Row from "../row.vue";

describe("Row", () => {
  it("renders properly", () => {
    render(Row, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });
});
