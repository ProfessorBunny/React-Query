import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
export const useFetchData = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isLoading, data, error, isError };
};
