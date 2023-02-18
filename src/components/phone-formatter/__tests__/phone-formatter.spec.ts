import { screen } from "@testing-library/vue";
import PhoneFormatter from "..";
import renderComponent from "@/tests/render-component";

describe("PhoneFormatter", () => {
  it("should generate phone number and add spaces to make the number more readable", async () => {
    const { rerender } = renderComponent(PhoneFormatter, {
      props: {
        value: "+494057283299",
      },
    });

    expect(screen.getByText("+49 40 57283299")).toBeTruthy();

    await rerender({
      value: "+494033441852",
    });

    expect(screen.getByText("+49 40 33441852")).toBeTruthy();
  });
});
