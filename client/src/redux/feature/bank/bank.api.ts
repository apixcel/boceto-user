import { api } from "@/redux/api/api";

const bankApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBankInfo: builder.query({
      query: () => ({
        url: `/bank-account/get`, 
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    bankInfoCreate: builder.mutation({
      query: ({bankInfo }) => ({
        url: `/bank-account/create`, 
        method: "POST",
        body: bankInfo,
      }),
      invalidatesTags: ["user"], 
    }),
    bankUpdate: builder.mutation({
      query: ({ bankAccountId, bankInfo }) => ({
        url: `/bank-account/update/${bankAccountId}`, 
        method: "PATCH",
        body: bankInfo,
      }),
      invalidatesTags: ["user"], 
    }),
  }),
});

export const { useGetBankInfoQuery , useBankInfoCreateMutation, useBankUpdateMutation } = bankApi; 
