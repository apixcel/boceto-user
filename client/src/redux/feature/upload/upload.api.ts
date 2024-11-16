import { api } from "@/redux/api/api";

const bankApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingle: builder.mutation<{ data: string }, FormData>({
      query: (form) => ({
        url: `/upload/single`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["upload"],
    }),
    uploadMutilple: builder.mutation<{ data: string[] }, FormData>({
      query: (form) => ({
        url: `/upload/multi`,
        method: "POST",
        body: form,
      }),
      invalidatesTags: ["upload"],
    }),
  }),
});

export const { useUploadMutilpleMutation, useUploadSingleMutation } = bankApi;
