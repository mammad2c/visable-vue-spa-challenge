import { screen } from "@testing-library/vue";
import { Button } from "..";
import { renderComponent } from "@/tests/render-component";

describe("Button", () => {
  it("should renders properly", () => {
    renderComponent(Button, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("should render anchor tag if href is provided", () => {
    const { container } = renderComponent(Button, {
      props: {
        href: "test",
      },
      slots: {
        default: "test",
      },
    });

    expect(container.querySelector("a")).toBeTruthy();
  });

  it("should render anchor tag if to is provided", () => {
    const { container } = renderComponent(Button, {
      props: {
        to: {
          name: "restaurants",
        },
      },
      slots: {
        default: "test",
      },
    });

    expect(container.querySelector("a")).toBeTruthy();
  });

  it("should disable button", () => {
    renderComponent(Button, {
      attrs: {
        disabled: true,
      },
      slots: {
        default: "test",
      },
    });

    expect(screen.queryByText(/test/i)).toHaveAttribute("disabled");
  });
});
