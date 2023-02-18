import { screen } from "@testing-library/vue";
import Header from "..";
import renderComponent from "@/tests/render-component";

describe("Header", () => {
  it("renders properly", () => {
    renderComponent(Header);
    expect(screen.queryByText(/restaurant finder/i)).toBeTruthy();
    expect(screen.getByText(/select theme/i)).toBeTruthy();
  });

  it("should set height based on height props", () => {
    const { container } = renderComponent(Header, {
      props: {
        height: 100,
      },
    });

    expect(container.querySelector("#main-header")).toHaveStyle({
      height: "100px",
    });
  });
});
