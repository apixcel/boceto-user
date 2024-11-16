import { api } from "@/redux/api/api";
import { IWithdrawElement } from "@/types/withdrawEelement";

const withDrawElementApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createWithdrawElement: builder.mutation<
      { data: string },
      Pick<IWithdrawElement, "button" | "facts">
    >({
      query: (form) => ({
        url: `/withdraw-element/create`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["withdrawEelement"],
    }),
    getWithdrawElementByOwner: builder.query<
      { data: IWithdrawElement },
      undefined
    >({
      query: () => ({
        url: `/withdraw-element/get-owner`,
        method: "GET",
      }),
      providesTags: ["withdrawEelement"],
    }),
  }),
});

export const {
  useCreateWithdrawElementMutation,
  useGetWithdrawElementByOwnerQuery,
} = withDrawElementApi;
