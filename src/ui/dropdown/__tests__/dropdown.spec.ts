import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import PrimeVue from "primevue/config";
import Dropdown from "../dropdown.vue";
import router from "@/router";

const renderDropdown = (props = {}) =>
  render(Dropdown, {
    global: {
      plugins: [PrimeVue, router],
    },
    props,
  });

const items = [
  {
    command: () => {
      return "item-1 clicked";
    },
    id: "item-1",
    label: "item-1",
  },
  {
    command: () => {
      return "item-2 clicked";
    },
    id: "item-2",
    label: "item-2",
  },
  {
    command: () => {
      return "item-3 clicked";
    },
    id: "item-3",
    label: "item-3",
  },
];

describe("Dropdown", () => {
  it("renders properly", () => {
    renderDropdown({
      buttonText: "test",
      items,
    });

    expect(screen.queryByText("test")).toBeTruthy();
  });

  it("renders properly with items and clickable", async () => {
    const spy = vi.spyOn(items[0], "command");
    renderDropdown({
      items,
    });

    // click on the button to show the dropdown
    await fireEvent.click(screen.getByText(/select/i));

    const item1 = screen.getByText(/item-1/i);

    expect(item1).toBeTruthy();

    await fireEvent.click(item1);

    expect(spy).toHaveBeenCalled();
  });
});
