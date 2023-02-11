import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    render(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(screen.queryByText("Hello Vitest")).toBeTruthy();
  });
});
