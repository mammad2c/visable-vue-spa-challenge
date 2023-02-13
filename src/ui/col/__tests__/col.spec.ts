import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Col from "../col.vue";

describe("Col", () => {
  it("renders properly", () => {
    render(Col, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("should have correct number of columns", () => {
    render(Col, {
      props: {
        cols: 3,
      },
      slots: {
        default: "test",
      },
    });

    expect(
      screen.getByText("test").classList.contains("col-span-3"),
    ).toBeTruthy();
  });

  it("should throw an error if col prop is not a number", () => {
    const generalErrorMessage = (col: string) =>
      `cols must be a number, received: ${col}`;

    try {
      render(Col, {
        props: {
          cols: "lorem",
        },
      });
    } catch (e) {
      expect((e as Error).message).toBe(generalErrorMessage("lorem"));
    }
  });

  it("should throw an error if col prop is not a number in range", () => {
    const generalErrorMessage = (col: number) =>
      `cols must be a number between 1 and 12, received: ${col}`;

    try {
      render(Col, {
        props: {
          cols: 20,
        },
      });
    } catch (e) {
      expect((e as Error).message).toBe(generalErrorMessage(20));
    }

    try {
      render(Col, {
        props: {
          cols: 0,
        },
      });
    } catch (e) {
      expect((e as Error).message).toBe(generalErrorMessage(0));
    }
  });
});
