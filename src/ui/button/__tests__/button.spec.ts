import { screen } from "@testing-library/vue";
import Button from "../button.vue";
import renderComponent from "@/tests/render-component";

describe("Button", () => {
  it("renders properly", () => {
    renderComponent(Button, {
      slots: {
        default: "test",
      },
    });
    expect(screen.queryByText("test")).toBeTruthy();
  });
});
