import { screen } from "@testing-library/vue";
import { Row } from "..";
import { renderComponent } from "@/tests/render-component";

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
