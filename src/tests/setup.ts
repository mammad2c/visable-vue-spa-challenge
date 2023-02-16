import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { QueryCache } from "vue-query";
import { server } from "@/mocks/server";

const queryCache = new QueryCache();

expect.extend(matchers);

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  queryCache.clear();
  server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => {
  server.close();
});
