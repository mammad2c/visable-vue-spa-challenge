import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "vue-query";
import { QueryOptions } from "vue-query/types";

type Methods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Params = AxiosRequestConfig["params"];
// type ApiGeneratorReturnType<R, T> = T extends "POST" | "PUT" | "PATH"
//   ? (data?: unknown, params?: Params) => UseQueryReturnType<any, Error>
//   : (params?: Params) => UseQueryReturnType<any, Error>;

const $http = axios.create();
const dataMethods = ["POST", "PUT", "PATH"];

interface ApiGeneratorArgs<R> {
  queryKey: string | readonly unknown[];
  url: string;
  method: Methods;
  queryOptions?: Omit<QueryOptions<R, Error>, "queryKey" | "queryFn">;
}

function apiGenerator<ResponseType, SelectedData = ResponseType>({
  queryKey,
  method,
  url,
  queryOptions = {},
}: ApiGeneratorArgs<ResponseType>) {
  const arrayQueryKey = Array.isArray(queryKey) ? queryKey : [queryKey];
  if (dataMethods.includes(method)) {
    return (data: unknown = {}, params: Params = {}) => {
      const finalQueryKey = [...arrayQueryKey, { ...params }];

      const query = useQuery<ResponseType, Error, SelectedData>({
        ...queryOptions,
        queryFn: async () => {
          const response = await $http({ data, method, params, url });
          return response.data;
        },
        queryKey: finalQueryKey,
      });

      return query;
    };
  }

  return (params: Params = {}) => {
    const finalQueryKey = [...arrayQueryKey, { ...params }];

    const query = useQuery<ResponseType, Error>({
      ...queryOptions,
      queryFn: async () => {
        const response = await $http({ method, params, url });
        return response.data;
      },
      queryKey: finalQueryKey,
    });

    return query;
  };
}

export { apiGenerator };
