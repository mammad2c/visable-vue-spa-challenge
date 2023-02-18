import { render, RenderOptions } from "@testing-library/vue";
import PrimeVue from "primevue/config";
import { VueQueryPlugin } from "vue-query";
import { router } from "@/router";

const renderComponent = (
  component: unknown,
  renderOptions: RenderOptions = {},
) =>
  render(component, {
    global: {
      plugins: [PrimeVue, router, VueQueryPlugin],
    },
    ...renderOptions,
  });

export { renderComponent };
