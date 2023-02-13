import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Container from "../container.vue";

describe("Container", () => {
  it("renders properly", () => {
    render(Container, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("should not have max width when it is fluid", () => {
    render(Container, {
      props: {
        fluid: true,
      },
      slots: {
        default: "test",
      },
    });

    expect(screen.queryByText("test")?.classList.contains("max-w-none")).toBe(
      true,
    );
  });
});
