import { api } from "@/redux/api/api";
import { IFrontView } from "@/types/frontview";

const frontViewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFrontViewByOwner: builder.query<{ data: IFrontView | null }, undefined>({
      query: () => ({
        url: `/frontview/get-owner`,
        method: "GET",
      }),
      providesTags: ["frontview"],
    }),

    createFronteView: builder.mutation<{ data: IFrontView }, IFrontView>({
      query: (payload) => ({
        url: `/frontview/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["frontview"],
    }),
    updateFrontViewBy: builder.mutation<
      { data: IFrontView },
      Partial<IFrontView>
    >({
      query: (payload) => ({
        url: `/frontview/update`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["frontview"],
    }),
  }),
});

export const {
  useGetFrontViewByOwnerQuery,
  useCreateFronteViewMutation,
  useUpdateFrontViewByMutation,
} = frontViewApi;
