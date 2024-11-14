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
    createCasino: builder.mutation<
      { data: ICasaino | null },
      Pick<ICasaino, "name" | "status">
    >({
      query: (payload) => ({
        url: `/casino/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["casino"],
    }),
    updateCasinoById: builder.mutation<
      { data: ICasaino },
      {
        id: string;
        payload: Partial<ICasaino>;
      }
    >({
      query: ({ id, payload }) => ({
        url: `/casino/update/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["casino"],
    }),
  }),
});

export const { useGetOwnerCasinoInfoQuery, useCreateCasinoMutation,useUpdateCasinoByIdMutation } = bankApi;
