import { screen } from "@testing-library/vue";
import { Col } from "..";
import { renderComponent } from "@/tests/render-component";

describe("Col", () => {
  it("renders properly", () => {
    renderComponent(Col, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("should have correct number of columns", async () => {
    const { rerender } = renderComponent(Col, {
      props: {
        cols: 3,
      },
      slots: {
        default: "test",
      },
    });

    expect(
      screen.getByText(/test/i).classList.contains("col-span-3"),
    ).toBeTruthy();

    await rerender({
      cols: 7,
    });

    expect(
      screen.getByText(/test/i).classList.contains("col-span-7"),
    ).toBeTruthy();

    await rerender({
      cols: 8,
    });

    expect(
      screen.getByText(/test/i).classList.contains("col-span-8"),
    ).toBeTruthy();
  });

  it("should throw an error if col prop is not a number", () => {
    const generalErrorMessage = (col: string) =>
      `cols must be a number, received: ${col}`;

    try {
      renderComponent(Col, {
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
      renderComponent(Col, {
        props: {
          cols: 20,
        },
      });
    } catch (e) {
      expect((e as Error).message).toBe(generalErrorMessage(20));
    }

    try {
      renderComponent(Col, {
        props: {
          cols: 0,
        },
      });
    } catch (e) {
      expect((e as Error).message).toBe(generalErrorMessage(0));
    }
  });
});
