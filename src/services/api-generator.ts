import axios, { AxiosRequestConfig } from "axios";
import { useQuery, UseQueryReturnType, UseQueryOptions } from "vue-query";

type Methods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Params = AxiosRequestConfig["params"];
type ApiGeneratorReturnType<T> = T extends "POST" | "PUT" | "PATH"
  ? (data?: unknown, params?: Params) => UseQueryReturnType<unknown, unknown>
  : (params?: Params) => UseQueryReturnType<unknown, unknown>;

const $http = axios.create();
const dataMethods = ["POST", "PUT", "PATH"];

interface ApiGeneratorArgs {
  queryKey: string | readonly unknown[];
  url: string;
  method: Methods;
  queryOptions?: Omit<UseQueryOptions, "queryKey" | "queryFn">;
}

function apiGenerator<T extends Methods>({
  queryKey,
  method,
  url,
  queryOptions = {},
}: ApiGeneratorArgs): ApiGeneratorReturnType<T> {
  if (dataMethods.includes(method)) {
    return (data: unknown = {}, params: Params = {}) => {
      const api = () =>
        $http({
          data,
          method,
          params,
          url,
        });

      return useQuery({
        queryFn: api,
        queryKey,
        ...queryOptions,
      });
    };
  }

  return (params: Params = {}) => {
    const api = () =>
      $http({
        method,
        params,
        url,
      });

    return useQuery({
      queryFn: api,
      queryKey,
      ...queryOptions,
    });
  };
}

export { apiGenerator };
