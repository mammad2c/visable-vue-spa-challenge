import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Button from "../button.vue";

describe("Button", () => {
  it("renders properly", () => {
    render(Button, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });
});
