import { screen } from "@testing-library/vue";
import { Container } from "..";
import { renderComponent } from "@/tests/render-component";

describe("Container", () => {
  it("renders properly", () => {
    renderComponent(Container, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("should not have max width when it is fluid", () => {
    renderComponent(Container, {
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

  it("should not have padding when it have no-padding props", () => {
    renderComponent(Container, {
      props: {
        noPadding: true,
      },
      slots: {
        default: "test",
      },
    });

    expect(screen.queryByText("test")?.classList.contains("px-4")).toBe(false);
  });
});
