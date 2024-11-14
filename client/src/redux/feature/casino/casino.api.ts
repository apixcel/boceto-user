import { api } from "@/redux/api/api";
import { ICasaino } from "@/types/casino";

const bankApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOwnerCasinoInfo: builder.query<{ data: ICasaino | null }, undefined>({
      query: () => ({
        url: `/casino/get`,
        method: "GET",
      }),
      providesTags: ["casino"],
    }),
  }),
});

export const { useGetOwnerCasinoInfoQuery } = bankApi;
